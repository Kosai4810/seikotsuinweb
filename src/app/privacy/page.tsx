import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";
export const metadata: Metadata = { title: "プライバシーポリシー", description: "整骨院webの個人情報保護方針です。" };
const sections = [["取得する情報", "お問い合わせフォームを通じて、電話番号、メールアドレス、ご相談内容等を取得します。"], ["利用目的", "お問い合わせへの回答、サービスの提案、契約・制作に必要な連絡のために利用します。"], ["第三者提供", "法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。"], ["安全管理", "個人情報の漏えい、滅失、毀損を防ぐため、必要かつ適切な管理を行います。"], ["開示・訂正・削除", "ご本人から個人情報の開示、訂正、削除等のご希望があった場合は、本人確認のうえ適切に対応します。"], ["改定", "本ポリシーは、法令やサービス内容の変更に応じて改定することがあります。"]];
export default function PrivacyPage() { return <LegalPage title="プライバシーポリシー">{sections.map(([title, body]) => <section key={title} className="mb-10 last:mb-0"><h2 className="heading-md text-lg mb-3">{title}</h2><p className="text-sm text-[var(--sumi-nezumi)] leading-loose">{body}</p></section>)}</LegalPage>; }
