import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { skillGroups } from "../data";

export const metadata: Metadata = {
  title: "About",
  description: "About Madina Batoshova, a frontend software engineer focused on thoughtful product interfaces and maintainable React systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero about-hero shell">
        <p className="eyebrow"><span /> About me</p>
        <div className="page-hero-grid"><h1>Design-aware.<br/><em>Engineering-led.</em></h1><p>I’m Madina, a frontend software engineer who enjoys making complex products feel calm, intuitive, and genuinely useful.</p></div>
      </section>
      <section className="about-story shell">
        <div className="portrait-composition" aria-label="Madina Batoshova monogram composition"><div className="portrait-ring"/><div className="portrait-card"><span>MB</span><small>Frontend<br/>Software Engineer</small></div><div className="portrait-tag">Based in Uzbekistan<br/>Working across products</div></div>
        <div className="about-copy">
          <p className="large-copy">I work at the intersection of interface design and software engineering—turning detailed product requirements into clear, responsive experiences.</p>
          <p>My professional work spans workforce management, real estate, healthcare, industrial engineering, international education, and commerce. I’m comfortable with complex dashboards and operational flows, but I care just as much about typography, spacing, motion, accessibility, and the feeling of the final product.</p>
          <p>I like collaborative teams where design and engineering talk early. That means understanding the user journey, shaping the component system, working closely with backend APIs, and refining edge cases until the product feels coherent.</p>
          <Link href="/contact" className="button button-primary">Start a conversation <span>→</span></Link>
        </div>
      </section>
      <section className="principles section-pad">
        <div className="shell"><p className="eyebrow light"><span /> Principles</p><div className="principles-grid">
          {[["Clarity over noise", "Every element should help someone understand, decide, or act."],["Systems over one-offs", "Reusable foundations create consistency and make products easier to evolve."],["Details are functional", "Spacing, states, motion, and words all shape whether an interface feels trustworthy."],["Ship, learn, improve", "A strong product is built through thoughtful iteration, not a single perfect pass."]].map(([title,text], index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div></div>
      </section>
      <section className="skills-section section-pad shell">
        <div className="section-heading-row compact-heading"><div><p className="eyebrow"><span /> Toolkit</p><h2>Technology in service<br/>of the product.</h2></div><p>I choose tools for maintainability, delivery speed, and the experience they help create.</p></div>
        <div className="skills-grid">{skillGroups.map(group=><article key={group.title}><h3>{group.title}</h3><div>{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
