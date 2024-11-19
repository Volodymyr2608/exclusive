import { ReactNode } from "react"
import type accountBreadcrumbs from "@/app/_lib/dummy/breadcrumbs/account.json"

export type TAccountLayout = {
  children: ReactNode;
  pageType: keyof typeof accountBreadcrumbs;
}