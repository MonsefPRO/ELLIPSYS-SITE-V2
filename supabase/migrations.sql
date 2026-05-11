-- ─────────────────────────────────────────────────────────────────────────
-- Migrations Supabase pour Ellipsys Solutions V2
-- À exécuter dans : Supabase Dashboard → SQL Editor → New query → Run
-- ─────────────────────────────────────────────────────────────────────────

-- ============= 1) TABLE: devis_requests =============
-- Backup des demandes de devis (la source de vérité reste HubSpot)
create table if not exists public.devis_requests (
  id                  bigserial primary key,
  client_type         text,
  service             text,
  service_label       text,
  name                text not null,
  email               text not null,
  phone               text,
  city                text not null,
  siret               text,
  message             text,
  full_description    text,
  hubspot_contact_id  text,
  hubspot_deal_id     text,
  page_uri            text,
  ip                  text,
  created_at          timestamptz not null default now()
);

create index if not exists devis_requests_email_idx       on public.devis_requests (email);
create index if not exists devis_requests_created_at_idx  on public.devis_requests (created_at desc);
create index if not exists devis_requests_service_idx     on public.devis_requests (service);

-- RLS désactivé sur cette table (écriture serveur uniquement avec service role)
alter table public.devis_requests enable row level security;

-- Aucune policy d'INSERT/SELECT publique → seul le service role peut écrire/lire
-- (le serveur Next.js utilise SUPABASE_SERVICE_ROLE_KEY)


-- ============= 2) TABLE: newsletter_subscriptions =============
-- Existe peut-être déjà — création conditionnelle
create table if not exists public.newsletter_subscriptions (
  id              bigserial primary key,
  email           text not null unique,
  lang            text default 'fr',
  subscribed_at   timestamptz not null default now()
);

create index if not exists newsletter_subscribed_at_idx on public.newsletter_subscriptions (subscribed_at desc);

alter table public.newsletter_subscriptions enable row level security;


-- ============= 3) TABLE: leads_email =============
-- Existe peut-être déjà — création conditionnelle pour /api/leads (popup lead)
create table if not exists public.leads_email (
  id          bigserial primary key,
  email       text not null,
  source      text,
  page        text,
  created_at  timestamptz not null default now(),
  unique (email, source)
);

create index if not exists leads_email_created_at_idx on public.leads_email (created_at desc);

alter table public.leads_email enable row level security;


-- ─────────────────────────────────────────────────────────────────────────
-- Fin des migrations
-- ─────────────────────────────────────────────────────────────────────────
