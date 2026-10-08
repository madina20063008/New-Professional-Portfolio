import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { certifications, experience, skillGroups } from "../data";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Résumé of Madina Batoshova, frontend software engineer specializing in React, Next.js, TypeScript, and product interfaces.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main>
      <SiteHeader />
      <section className="resume-head shell"><div><p className="eyebrow"><span /> Résumé</p><h1>Madina<br/><em>Batoshova</em></h1></div><div className="resume-intro"><h2>Frontend Software Engineer</h2><p>Building responsive, accessible, and maintainable digital products with React, Next.js, TypeScript, and JavaScript.</p><div><a className="button button-primary" href="/Madina-Batoshova-Resume.pdf" download>Download PDF <span>↓</span></a><a className="button button-outline" href="/Madina-Batoshova-Resume.docx" download>Download DOCX <span>↓</span></a>
      </div></div></section>
      <section className="resume-sheet shell">
        <aside><h3>Contact</h3><a href="mailto:madinabatoshova@gmail.com">madinabatoshova@gmail.com</a><a href="tel:+998917763099">+998 91 776 30 99</a><a href="https://www.linkedin.com/in/madinabatoshova" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/madina20063008" target="_blank" rel="noreferrer">GitHub ↗</a><h3>Education</h3><strong>TUIT</strong><p>Economics & Management in Information and Communication</p><span>Sep 2023 — Present</span><h3>Languages</h3><p>English · IELTS 7.0 / CEFR C1</p></aside>
        <div className="resume-main"><div className="resume-section"><h2>Experience</h2>{experience.slice(0,2).map(item=><article key={item.role}><span>{item.period}</span><h3>{item.role}</h3><p>{item.company}</p><ul>{item.points.slice(0,3).map(point=><li key={point}>{point}</li>)}</ul></article>)}</div><div className="resume-section"><h2>Skills</h2><div className="resume-skills">{skillGroups.map(group=><div key={group.title}><strong>{group.title}</strong><p>{group.items.join(" · ")}</p></div>)}</div></div><div className="resume-section"><h2>Certifications</h2>{certifications.map(cert=><article className="resume-cert" key={cert.title}>{cert.url ? <a className="resume-cert-link" href={cert.url} target="_blank" rel="noreferrer" aria-label={`Verify ${cert.title}`}><h3>{cert.title} <span aria-hidden="true">↗</span></h3><p>{cert.issuer} · {cert.date}</p></a> : <><h3>{cert.title}</h3><p>{cert.issuer} · {cert.date}</p></>}</article>)}</div><Link href="/work" className="text-link">View detailed project case studies <span>→</span></Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}
