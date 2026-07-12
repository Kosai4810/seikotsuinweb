import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { MobileCTA } from "@/components/common/MobileCTA";

type Section = { title: string; text: string; items?: string[] };

export function SeoLandingPage({ title, lead, image, imageAlt, sections, relatedHref, relatedLabel }: { eyebrow?: string; title: string; lead: string; image: string; imageAlt: string; sections: Section[]; relatedHref: string; relatedLabel: string }) {
  return <>
    <Header />
    <main>
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-[#171512] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div><h1 className="font-serif text-3xl md:text-5xl leading-snug tracking-wide mb-7">{title}</h1><p className="text-sm md:text-base text-white/75 leading-loose mb-8">{lead}</p><Link href="/#contact-form" className="inline-flex bg-[#a88750] text-white px-7 py-4 text-sm">無料HP診断を申し込む</Link></div>
          <div className="relative aspect-[4/3] overflow-hidden"><Image src={image} alt={imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" priority /></div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        {sections.map((section, index) => <section key={section.title} className="py-10 md:py-14 border-b border-[var(--usuzumi-line)]">
          <p className="text-xs tracking-widest text-[#8a6d3d] mb-3">{String(index + 1).padStart(2, "0")}</p>
          <h2 className="heading-lg text-2xl md:text-3xl mb-5">{section.title}</h2>
          <p className="text-[var(--sumi-nezumi)] leading-loose">{section.text}</p>
          {section.items && <ul className="grid sm:grid-cols-2 gap-px bg-[var(--usuzumi-line)] mt-8">{section.items.map(item => <li key={item} className="bg-white px-5 py-4 text-sm flex gap-3"><span className="text-[#a88750]">✓</span>{item}</li>)}</ul>}
        </section>)}
        <aside className="mt-14 bg-[#eee8dc] p-7 md:p-10"><p className="font-medium mb-2">関連ページ</p><Link href={relatedHref} className="text-sm underline underline-offset-4">{relatedLabel}</Link></aside>
        <div className="mt-14 text-center"><h2 className="heading-lg text-2xl md:text-3xl mb-6">まずは現在の状況をお聞かせください。</h2><p className="text-sm text-[var(--sumi-nezumi)] mb-7">まだ内容が決まっていなくても問題ありません。必要な準備と優先順位から整理します。</p><Link href="/#contact-form" className="inline-flex bg-[#a88750] text-white px-8 py-4 text-sm">無料HP診断を申し込む</Link></div>
      </div>
    </main>
    <Footer /><MobileCTA />
  </>;
}
