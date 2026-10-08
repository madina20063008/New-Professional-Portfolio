import type { Project } from "../data";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <a href={`/work/${project.slug}`} className="project-image-link" aria-label={`Read ${project.title} case study`}>
        <ProjectVisual tone={project.tone} compact image={project.images?.[0]} imageAlt={`${project.title} interface preview`} />
      </a>
      <div className="project-card-meta"><span>0{index + 1}</span><span>{project.year}</span></div>
      <h3><a href={`/work/${project.slug}`}>{project.title}</a></h3>
      <p className="project-label">{project.label}</p>
      <p>{project.summary}</p>
      <div className="project-card-footer">
        <div className="tag-row">{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
        <a href={`/work/${project.slug}`} className="circle-arrow" aria-label={`Open ${project.title}`}>→</a>
      </div>
    </article>
  );
}
