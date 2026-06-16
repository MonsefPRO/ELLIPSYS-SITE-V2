# -*- coding: utf-8 -*-
"""Génère un PDF d'une page : vision globale des campagnes Ads Ellipsys."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)

OUT = r"C:\Users\Poste\Desktop\ELLIPSYS-SITE-V2\docs\Ellipsys-Vision-Ads.pdf"

# ---- Couleurs marque ----
ORANGE = colors.HexColor("#F2700A")
NAVY = colors.HexColor("#0B1B33")
BLUE = colors.HexColor("#0A66C2")   # LinkedIn
GREY = colors.HexColor("#5A6472")
LIGHT = colors.HexColor("#F3F5F8")
GREEN = colors.HexColor("#1F9D55")

styles = getSampleStyleSheet()

def S(name, **kw):
    base = kw.pop("parent", styles["Normal"])
    return ParagraphStyle(name, parent=base, **kw)

h_title = S("t", fontName="Helvetica-Bold", fontSize=16, textColor=NAVY, leading=18)
h_sub = S("s", fontName="Helvetica", fontSize=8.5, textColor=GREY, leading=11)
sec = S("sec", fontName="Helvetica-Bold", fontSize=10.5, textColor=colors.white, leading=12)
body = S("b", fontName="Helvetica", fontSize=7.6, textColor=NAVY, leading=9.6)
bsm = S("bsm", fontName="Helvetica", fontSize=7.0, textColor=NAVY, leading=8.8)
kw_s = S("kw", fontName="Helvetica", fontSize=7.2, textColor=NAVY, leading=9.2)
lbl = S("lbl", fontName="Helvetica-Bold", fontSize=7.4, textColor=NAVY, leading=9.2)
note = S("n", fontName="Helvetica-Oblique", fontSize=6.8, textColor=GREY, leading=8.4)

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=12*mm, rightMargin=12*mm, topMargin=10*mm, bottomMargin=9*mm,
)
W = doc.width
story = []

def section_bar(text, color):
    t = Table([[Paragraph(text, sec)]], colWidths=[W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), color),
        ("LEFTPADDING", (0,0), (-1,-1), 6),
        ("TOPPADDING", (0,0), (-1,-1), 3),
        ("BOTTOMPADDING", (0,0), (-1,-1), 3),
    ]))
    return t

# ---------- EN-TÊTE ----------
story.append(Paragraph("Ellipsys Solutions — Vision globale Publicité", h_title))
story.append(Paragraph("Nettoyage par drone & robot · Juin 2026 · Objectif : demandes de devis (formulaires) + appels", h_sub))
story.append(Spacer(1, 3))
story.append(HRFlowable(width="100%", thickness=1.2, color=ORANGE))
story.append(Spacer(1, 6))

# ---------- GOOGLE ADS ----------
story.append(section_bar("GOOGLE  ADS  —  Campagne locale Montpellier  (B2C : démoussage toiture)", ORANGE))
story.append(Spacer(1, 4))

params = Table([
    [Paragraph("Zone", lbl), Paragraph("Rayon 15 km autour de Montpellier · ciblage « Présence »", bsm),
     Paragraph("Budget", lbl), Paragraph("25 € / jour", bsm)],
    [Paragraph("Enchères", lbl), Paragraph("Maximiser les clics · plafond CPC 2,50 €", bsm),
     Paragraph("Réseau", lbl), Paragraph("Recherche seule (Display + Partenaires OFF)", bsm)],
], colWidths=[W*0.10, W*0.46, W*0.10, W*0.34])
params.setStyle(TableStyle([
    ("VALIGN",(0,0),(-1,-1),"TOP"),
    ("BACKGROUND",(0,0),(-1,-1),LIGHT),
    ("BOX",(0,0),(-1,-1),0.5,colors.HexColor("#D8DEE6")),
    ("INNERGRID",(0,0),(-1,-1),0.4,colors.white),
    ("TOPPADDING",(0,0),(-1,-1),3),("BOTTOMPADDING",(0,0),(-1,-1),3),
    ("LEFTPADDING",(0,0),(-1,-1),5),("RIGHTPADDING",(0,0),(-1,-1),5),
]))
story.append(params)
story.append(Spacer(1, 5))

# Mots-clés
kw_head = [[Paragraph("<b>Mots-clés ACTIFS</b>  (exact [ ] · expression « »)", lbl),
            Paragraph("<b>Mots-clés NÉGATIFS</b>  (à exclure)", lbl)]]
kw_rows = [
    ["[démoussage toiture montpellier]", "gratuit · soi-même · tuto · youtube"],
    ["[entreprise démoussage toiture montpellier]", "produit · karcher · leroy merlin"],
    ["« démoussage toiture »", "location · nacelle · échafaudage"],
    ["« nettoyage toiture montpellier »", "emploi · formation · salaire · stage"],
    ["« traitement hydrofuge toiture »", "javel · vinaigre · pas cher"],
    ["« démoussage toiture hérault » · « anti mousse toiture »", "maprimerénov · aide · subvention"],
    ["« démoussage toit »", "diy · brico · castorama"],
]
data = kw_head + [[Paragraph(a, kw_s), Paragraph(b, kw_s)] for a,b in kw_rows]
kt = Table(data, colWidths=[W*0.55, W*0.45])
kt.setStyle(TableStyle([
    ("VALIGN",(0,0),(-1,-1),"TOP"),
    ("BACKGROUND",(0,0),(-1,0),NAVY),
    ("TEXTCOLOR",(0,0),(-1,0),colors.white),
    ("BACKGROUND",(0,1),(0,-1),colors.HexColor("#FFF3E9")),
    ("BACKGROUND",(1,1),(1,-1),colors.HexColor("#F1F4F8")),
    ("BOX",(0,0),(-1,-1),0.5,colors.HexColor("#D8DEE6")),
    ("INNERGRID",(0,0),(-1,-1),0.4,colors.white),
    ("TOPPADDING",(0,0),(-1,-1),2.5),("BOTTOMPADDING",(0,0),(-1,-1),2.5),
    ("LEFTPADDING",(0,0),(-1,-1),5),("RIGHTPADDING",(0,0),(-1,-1),5),
]))
# header paragraphs need white text
kt.setStyle(TableStyle([("SPAN",(0,0),(0,0))]))
story.append(kt)
story.append(Spacer(1, 3))
story.append(Paragraph("Annonce : 7 titres + 4 descriptions · extension d'appel 04 67 20 97 09 · 2 liens annexes · 4 accroches (Devis gratuit 24h · Sans échafaudage · Certifiés DGAC/EASA · Montpellier & alentours).", note))
story.append(Spacer(1, 8))

# ---------- LINKEDIN ADS ----------
story.append(section_bar("LINKEDIN  ADS  —  Lead Gen B2B  (parcs / centrales photovoltaïques)", BLUE))
story.append(Spacer(1, 4))

li_params = Table([
    [Paragraph("Objectif", lbl), Paragraph("Génération de leads (formulaire natif pré-rempli)", bsm),
     Paragraph("Budget", lbl), Paragraph("~22 $ / jour", bsm)],
    [Paragraph("Zone", lbl), Paragraph("France · format Image unique", bsm),
     Paragraph("Coût/lead", lbl), Paragraph("~30-60 $ (leads très qualifiés)", bsm)],
], colWidths=[W*0.10, W*0.46, W*0.10, W*0.34])
li_params.setStyle(TableStyle([
    ("VALIGN",(0,0),(-1,-1),"TOP"),
    ("BACKGROUND",(0,0),(-1,-1),LIGHT),
    ("BOX",(0,0),(-1,-1),0.5,colors.HexColor("#D8DEE6")),
    ("INNERGRID",(0,0),(-1,-1),0.4,colors.white),
    ("TOPPADDING",(0,0),(-1,-1),3),("BOTTOMPADDING",(0,0),(-1,-1),3),
    ("LEFTPADDING",(0,0),(-1,-1),5),("RIGHTPADDING",(0,0),(-1,-1),5),
]))
story.append(li_params)
story.append(Spacer(1, 5))

li_target = [
    [Paragraph("<b>CIBLAGE (audience)</b>", lbl), Paragraph("<b>FORMULAIRE LEAD GEN</b>", lbl)],
    [Paragraph("Secteurs : Énergies renouvelables · Production d'énergie / Utilities · "
               "Gestion d'investissements · Immobilier", kw_s),
     Paragraph("Titre : « Audit gratuit de nettoyage de votre centrale PV »", kw_s)],
    [Paragraph("Titres/Fonctions : Asset Manager · O&M Manager · Resp. exploitation · "
               "Directeur technique · Resp. maintenance EnR", kw_s),
     Paragraph("Champs : prénom, nom, email pro, tél, entreprise, poste", kw_s)],
    [Paragraph("Ancienneté : décideurs (Senior, Manager, Directeur, VP, CXO)", kw_s),
     Paragraph("Question : puissance du parc (<100 kWc → >10 MWc)", kw_s)],
    [Paragraph("Taille entreprise : 51+ · Extension d'audience : DÉSACTIVÉE", kw_s),
     Paragraph("Leads → téléchargeables / sync HubSpot", kw_s)],
]
lt = Table(li_target, colWidths=[W*0.55, W*0.45])
lt.setStyle(TableStyle([
    ("VALIGN",(0,0),(-1,-1),"TOP"),
    ("BACKGROUND",(0,0),(-1,0),NAVY),
    ("BACKGROUND",(0,1),(0,-1),colors.HexColor("#EAF2FB")),
    ("BACKGROUND",(1,1),(1,-1),colors.HexColor("#F1F4F8")),
    ("BOX",(0,0),(-1,-1),0.5,colors.HexColor("#D8DEE6")),
    ("INNERGRID",(0,0),(-1,-1),0.4,colors.white),
    ("TOPPADDING",(0,0),(-1,-1),2.5),("BOTTOMPADDING",(0,0),(-1,-1),2.5),
    ("LEFTPADDING",(0,0),(-1,-1),5),("RIGHTPADDING",(0,0),(-1,-1),5),
]))
story.append(lt)
story.append(Spacer(1, 8))

# ---------- STRATEGIE ----------
story.append(section_bar("STRATÉGIE  &  STATUT", NAVY))
story.append(Spacer(1, 4))
strat = [
    [Paragraph("<b>Google = volume local B2C</b> : le démoussage toiture génère le plus d'appels "
               "(besoin visible, récurrent). On capte la demande à Montpellier.", bsm)],
    [Paragraph("<b>LinkedIn = valeur B2B</b> : on cible les décideurs de parcs photovoltaïques "
               "(panier 10-100k€) impossibles à atteindre sur Google.", bsm)],
    [Paragraph("<b>Tracking actif</b> : conversion « devis envoyé » (Google), PostHog EU, "
               "Insight Tag LinkedIn — prêts. Stratégie prix discrète.", bsm)],
    [Paragraph("<b>Statut</b> : les 2 campagnes sont EN BROUILLON (0 € dépensé). "
               "Reste : activer la facturation des 2 comptes → publier.", bsm)],
]
st = Table(strat, colWidths=[W])
st.setStyle(TableStyle([
    ("BACKGROUND",(0,0),(-1,-1),LIGHT),
    ("BOX",(0,0),(-1,-1),0.5,colors.HexColor("#D8DEE6")),
    ("LINEBELOW",(0,0),(-1,-2),0.4,colors.white),
    ("TOPPADDING",(0,0),(-1,-1),3),("BOTTOMPADDING",(0,0),(-1,-1),3),
    ("LEFTPADDING",(0,0),(-1,-1),6),("RIGHTPADDING",(0,0),(-1,-1),6),
]))
story.append(st)
story.append(Spacer(1, 5))
story.append(HRFlowable(width="100%", thickness=0.6, color=colors.HexColor("#D8DEE6")))
story.append(Spacer(1, 2))
story.append(Paragraph("ellipsys-solutions.com · Détails complets : docs/google-ads/LANCEMENT-MONTPELLIER-LOCAL.md  &  docs/linkedin-ads/PLAN-LINKEDIN-LEADGEN.md", note))

doc.build(story)
print("OK ->", OUT)
