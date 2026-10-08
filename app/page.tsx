import Link from "next/link";
import { ProjectCard } from "./components/ProjectCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { featuredProjects } from "./data";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Frontend software engineer · Uzbekistan</p>
          <h1>I build digital products that feel <em>clear, capable,</em> and considered.</h1>
          <p className="hero-lead">
            React and Next.js interfaces for ambitious products—from operational CRMs
            to multilingual platforms used across teams and markets.
          </p>
          <div className="hero-actions">
            <Link href="/work" className="button button-primary">Explore projects <span>→</span></Link>
            <a href="mailto:madinabatoshova@gmail.com" className="text-link">madinabatoshova@gmail.com <span>↗</span></a>
          </div>
          <div className="hero-meta" aria-label="Professional highlights">
            <div><strong>01+</strong><span>Year building production interfaces</span></div>
            <div><strong>09</strong><span>Production project case studies</span></div>
            <div><strong>05</strong><span>Languages shipped with i18n</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Interface composition inspired by Madina's product work">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-card visual-card-main">
            <div className="visual-topline"><span>Product overview</span><span className="status">Live system</span></div>
            <div className="visual-title">Attendance, simplified.</div>
            <div className="visual-chart">
              {[38, 62, 46, 82, 68, 91, 76].map((height, index) => <i key={index} style={{height: `${height}%`}} />)}
            </div>
            <div className="visual-stats"><span><b>94%</b> on time</span><span><b>12</b> branches</span></div>
          </div>
          <div className="visual-card visual-card-float"><span className="tiny-label">Today</span><strong>248</strong><small>check-ins recorded</small></div>
          <div className="visual-note">Product UI<br/><b>→ engineered end-to-end</b></div>
        </div>
      </section>

      <section className="home-work section-pad">
        <div className="shell section-heading-row">
          <div><p className="eyebrow"><span /> Projects</p><h2>Systems with substance,<br/><em>interfaces with soul.</em></h2></div>
          <p>Selected product stories from workforce, real estate, and healthcare—each balancing business complexity with a clear user experience.</p>
        </div>
        <div className="shell project-grid home-project-grid">
          {featuredProjects.slice(0, 2).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
        <div className="shell center-cta"><Link href="/work" className="button button-outline">View all projects <span>→</span></Link></div>
      </section>

      <section className="capabilities section-pad">
        <div className="shell capabilities-grid">
          <div className="capabilities-intro">
            <p className="eyebrow light"><span /> What I bring</p>
            <h2>From interface idea<br/>to <em>shipped product.</em></h2>
            <p>I work where product thinking, interface craft, and engineering discipline meet.</p>
            <Link href="/about" className="text-link light-link">More about my approach <span>→</span></Link>
          </div>
          <div className="capability-list">
            {[
              ["01", "Product interfaces", "Responsive, accessible interfaces designed around real workflows—not decorative screens."],
              ["02", "Frontend architecture", "Scalable React and Next.js foundations, reusable components, predictable state, and clear data flows."],
              ["03", "Complex product UI", "CRMs, admin platforms, analytics, maps, multilingual content, forms, and operational tools."],
              ["04", "Delivery & collaboration", "Close partnership with backend engineers and designers from Figma through API integration and launch."],
            ].map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="process section-pad">
        <div className="shell section-heading-row compact-heading">
          <div><p className="eyebrow"><span /> Working method</p><h2>Thoughtful at every layer.</h2></div>
          <p>Good frontend work is more than implementing a screen. It connects user intent, system behavior, and the details people feel.</p>
        </div>
        <div className="shell process-grid">
          {[
            ["Discover", "Understand the users, business goal, system boundaries, and what success should feel like."],
            ["Structure", "Turn complexity into clear routes, flows, data states, components, and responsive rules."],
            ["Build", "Develop the interface with strong types, accessible patterns, and close API collaboration."],
            ["Refine", "Test the edges, tune performance, polish interactions, and make every screen feel coherent."],
          ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="home-experience section-pad">
        <div className="shell home-experience-grid">
          <div><p className="eyebrow"><span /> Current chapter</p><h2>Growing from frontend developer into <em>product engineer.</em></h2></div>
          <div className="experience-feature">
            <span className="experience-date">May 2025 — August 2026</span>
            <h3>Automatic Technology Solutions LLC</h3>
            <p>Shipped production React and Next.js products across workforce management, real estate, healthcare, industrial engineering, commerce, and international education.</p>
            <Link href="/experience" className="text-link">View experience & education <span>→</span></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
