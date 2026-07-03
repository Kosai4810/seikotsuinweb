import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export function LegalPage({ title, lead, children }: { title: string; lead?: string; children: React.ReactNode }) {
  return <><Header /><main className="pt-36 lg:pt-44 pb-24 bg-[var(--kinari)] min-h-screen"><article className="max-w-4xl mx-auto px-6 lg:px-12"><h1 className="heading-lg text-3xl md:text-4xl mb-6">{title}</h1>{lead && <p className="text-[var(--sumi-nezumi)] leading-loose mb-14">{lead}</p>}<div className="legal-content bg-white p-7 md:p-12">{children}</div></article></main><Footer /></>;
}
