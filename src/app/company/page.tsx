import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = { title: "運営者情報", description: "整骨院webの運営者情報です。" };
export default function CompanyPage() { return <LegalPage title="運営者情報"><dl><Row label="屋号">{siteConfig.businessName}</Row><Row label="事業内容">{siteConfig.businessDescription}</Row><Row label="メールアドレス"><a className="underline" href={siteConfig.emailHref}>{siteConfig.email}</a></Row><Row label="電話番号"><a className="underline" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></Row></dl></LegalPage>; }
function Row({ label, children }: { label: string; children: React.ReactNode }) { return <div className="grid md:grid-cols-[180px_1fr] gap-2 md:gap-8 py-5 border-b border-[var(--usuzumi-line)]"><dt className="text-sm font-medium">{label}</dt><dd className="text-sm text-[var(--sumi-nezumi)]">{children}</dd></div>; }
