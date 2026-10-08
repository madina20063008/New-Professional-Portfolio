import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { certifications, experience } from "../data";

export const metadata: Metadata = { title: "Experience", description: "Professional experience, education, and certifications of frontend software engineer Madina Batoshova." };

export default function ExperiencePage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero shell"><p className="eyebrow"><span /> Experience & education</p><div className="page-hero-grid"><h1>A career built by<br/><em>shipping.</em></h1><p>Hands-on product delivery, continuous learning, and an expanding view of what strong frontend engineering can do.</p></div></section>
      <section className="timeline shell">
        {experience.map((item, index)=><article key={`${item.role}-${item.period}`} className="timeline-item"><div className="timeline-index">0{index+1}</div><div className="timeline-date">{item.period}</div><div className="timeline-content"><p>{item.company}</p><h2>{item.role}</h2><span>{item.location}</span><ul>{item.points.map(point=><li key={point}>{point}</li>)}</ul></div></article>)}
      </section>
      <section className="education-band"><div className="shell education-grid"><div><p className="eyebrow light"><span /> Education</p><h2>Economics, management,<br/><em>and technology.</em></h2></div><div><h3>Tashkent University of Information Technology (TUIT)</h3><p>Bachelor of Economics and Management in the field of Information and Communication</p><span>Tashkent · Sep 2023 — Present</span></div></div></section>
      <section className="certifications shell section-pad"><p className="eyebrow"><span /> Certifications</p><div className="cert-list">{certifications.map((cert,index)=><article key={cert.title}><span>0{index+1}</span><div><h3>{cert.title}</h3><p>{cert.issuer} · {cert.date}</p></div>{cert.url ? <a href={cert.url} target="_blank" rel="noreferrer" aria-label={`Verify ${cert.title}`}>↗</a> : <b>✓</b>}</article>)}</div></section>
      <SiteFooter />
    </main>
  );
}
