import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "../../components/ProjectVisual";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { projects } from "../../data";
import { siteUrl } from "../../site-url";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  const previewImage = project.images?.[0]
    ? `${siteUrl}${project.images[0]}`
    : undefined;
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: `${project.title} — Madina Batoshova`, description: project.summary, images: previewImage ? [previewImage] : [] },
    twitter: { card: "summary_large_image", title: `${project.title} — Madina Batoshova`, description: project.summary, images: previewImage ? [previewImage] : [] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  if (projectIndex === -1) notFound();
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main>
      <SiteHeader />
      <article className="case-study">
        <header className="case-hero shell">
          <Link href="/work" className="back-link">← All projects</Link>
          <p className="eyebrow"><span /> Case study · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-meta">
            <div><small>Role</small><span>{project.role}</span></div>
            <div><small>Focus</small><span>{project.label}</span></div>
            <div><small>Stack</small><span>{project.stack.slice(0, 4).join(" · ")}</span></div>
          </div>
          <div className="case-actions">
            {project.live && <a href={project.live} className="button button-primary">Visit live project <span>↗</span></a>}
            {project.secondaryLive && <a href={project.secondaryLive.url} className="button button-outline">{project.secondaryLive.label} <span>↗</span></a>}
          </div>
        </header>
        <div className={`case-visual-wrap shell ${project.images?.length ? "case-visual-gallery" : ""}`}>
          {project.images?.length ? project.images.map((image, index) => (
            <ProjectVisual key={image} tone={project.tone} image={image} imageAlt={`${project.title} interface preview ${index + 1}`} />
          )) : <ProjectVisual tone={project.tone} />}
        </div>
        <section className="case-body shell">
          <aside><p className="eyebrow"><span /> The story</p></aside>
          <div className="case-copy">
            <div className="case-section"><span>01</span><div><h2>The challenge</h2><p>{project.challenge}</p></div></div>
            <div className="case-section"><span>02</span><div><h2>The solution</h2><p>{project.solution}</p></div></div>
            <div className="case-section"><span>03</span><div><h2>The outcome</h2><p>{project.impact}</p></div></div>
          </div>
        </section>
        <section className="feature-band">
          <div className="shell feature-band-grid">
            <div><p className="eyebrow light"><span /> Product scope</p><h2>What the system<br/><em>delivers.</em></h2></div>
            <div className="feature-list">{project.features.map((feature, index) => <div key={feature}><span>0{index + 1}</span><strong>{feature}</strong></div>)}</div>
          </div>
        </section>
        <section className="stack-section shell">
          <p className="eyebrow"><span /> Technology</p>
          <div className="stack-cloud">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </section>
        <a href={`/work/${nextProject.slug}`} className={`next-project tone-${nextProject.tone}`}>
          <div className="shell"><span>Next project</span><h2>{nextProject.title}</h2><b>→</b></div>
        </a>
      </article>
      <SiteFooter />
    </main>
  );
}
