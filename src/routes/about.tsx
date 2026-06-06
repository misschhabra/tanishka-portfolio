import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Morgan" },
      { name: "description", content: "Learn about Alex Morgan's background, education, and career goals as a full-stack developer." },
      { property: "og:title", content: "About — Alex Morgan" },
      { property: "og:description", content: "Background, education, and career goals." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="section" aria-labelledby="about-heading">
        <div className="container fade-in">
          <span className="eyebrow">About</span>
          <h1 id="about-heading">A developer who cares about the details.</h1>

          <div className="about-grid" style={{ marginTop: "2rem" }}>
            <div>
              <h2>Introduction</h2>
              <p>
                I'm a full-stack developer based in Lisbon, Portugal. For the past seven
                years I've helped startups and product teams ship accessible, performant
                web applications — from internal dashboards to consumer mobile apps.
              </p>
              <p>
                I care deeply about typography, keyboard ergonomics, and building UIs
                that work for every user.
              </p>

              <h2 style={{ marginTop: "2rem" }}>Career goals</h2>
              <p>
                I want to keep building products at the intersection of design and
                engineering — particularly tools that make the web more inclusive.
              </p>
            </div>

            <aside aria-labelledby="education-heading">
              <h2 id="education-heading">Education & experience</h2>
              <ol className="timeline" reversed>
                <li>
                  <span className="year">2021 — Present</span>
                  <strong>Senior Engineer · Mosaic Labs</strong>
                  <span>Leading frontend for the design platform.</span>
                </li>
                <li>
                  <span className="year">2018 — 2021</span>
                  <strong>Full-Stack Developer · Northwind</strong>
                  <span>Built customer-facing dashboards.</span>
                </li>
                <li>
                  <span className="year">2014 — 2018</span>
                  <strong>BSc Computer Science · TU Lisbon</strong>
                  <span>Graduated with distinction.</span>
                </li>
              </ol>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
