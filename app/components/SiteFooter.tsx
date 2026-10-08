import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <p className="eyebrow light"><span /> Have a product in mind?</p>
        <div className="footer-heading">
          <h2>Let&apos;s build something<br/><em>people enjoy using.</em></h2>
          <a className="round-link" href="mailto:madinabatoshova@gmail.com" aria-label="Email Madina">↗</a>
        </div>
        <div className="footer-grid">
          <div><small>Email</small><a href="mailto:madinabatoshova@gmail.com">madinabatoshova@gmail.com</a></div>
          <div><small>Connect</small><a href="https://www.linkedin.com/in/madinabatoshova" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/madina20063008" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          <div><small>Navigate</small><Link href="/work">Projects</Link><Link href="/about">About</Link><Link href="/resume">Résumé</Link><a href="/downloads/Madina-Batoshova-Portfolio-Source.zip" download>Download source ↓</a></div>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Madina Batoshova</span><span>Designed & engineered with care</span></div>
    </footer>
  );
}
