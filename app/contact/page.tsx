import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Contact", description: "Contact frontend software engineer Madina Batoshova for product, frontend, and collaboration opportunities." };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-hero shell"><p className="eyebrow"><span /> Contact</p><h1>Have a product that needs<br/><em>thoughtful frontend work?</em></h1><p>I’m happy to hear about ambitious web products, frontend engineering roles, and collaborations where interface quality matters.</p><a href="mailto:madinabatoshova@gmail.com" className="contact-email">madinabatoshova@gmail.com <span>↗</span></a></section>
      <section className="contact-cards shell">
        <a href="mailto:madinabatoshova@gmail.com"><span>01 · Email</span><h2>Start a conversation</h2><p>The best way to reach me for roles, projects, and product discussions.</p><b>↗</b></a>
        <a href="https://www.linkedin.com/in/madinabatoshova" target="_blank" rel="noreferrer"><span>02 · LinkedIn</span><h2>Connect professionally</h2><p>See my professional profile and stay in touch.</p><b>↗</b></a>
        <a href="https://github.com/madina20063008" target="_blank" rel="noreferrer"><span>03 · GitHub</span><h2>Explore the code trail</h2><p>Browse repositories and development activity.</p><b>↗</b></a>
      </section>
      <section className="availability shell"><span className="availability-dot"/><p>Open to frontend software engineering opportunities and thoughtful product collaborations.</p><span>Uzbekistan · UTC+5</span></section>
      <SiteFooter />
    </main>
  );
}
