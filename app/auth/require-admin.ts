import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { requireUser } from "./require-user"

export async function requireAdmin() {
  const user = await requireUser()
  const supabase = await createClient()

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single()

  if (profile?.role !== "admin") {
    redirect("/portal")
  }

  return user
}