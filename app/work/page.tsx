import type { Metadata } from "next";
import { ProjectCard } from "../components/ProjectCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected product work by Madina Batoshova across operational CRMs, multilingual platforms, commerce, healthcare, real estate, and full-stack systems.",
};

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero shell">
        <p className="eyebrow"><span /> Projects · 2025—2026</p>
        <div className="page-hero-grid"><h1>Products built for<br/><em>real projects.</em></h1><p>A growing collection of production systems and focused experiments. The common thread: complex requirements turned into interfaces people can understand.</p></div>
      </section>
      <section className="work-index shell">
        <div className="work-index-head"><span>Project</span><span>Focus</span><span>Year</span></div>
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </section>
      <SiteFooter />
    </main>
  );
}
