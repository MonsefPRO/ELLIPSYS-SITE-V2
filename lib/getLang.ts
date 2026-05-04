import { cookies } from "next/headers";
import type { Lang } from "../contexts/LanguageContext";

export async function getLang(): Promise<Lang> {
  const cookieStore = await cookies();
  return cookieStore.get("lang")?.value === "en" ? "en" : "fr";
}
