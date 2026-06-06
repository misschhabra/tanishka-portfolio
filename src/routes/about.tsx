import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tanishka Chhabra" },
      { name: "description", content: "Learn about Tanishka Chhabra's background, education, and passion for web development, programming, and AI." },
      { property: "og:title", content: "About — Tanishka Chhabra" },
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
          <h1 id="about-heading">A student passionate about building for the web.</h1>

          <div className="about-grid" style={{ marginTop: "2rem" }}>
            <div>
              <h2>Introduction</h2>
              <p>
                I'm Tanishka Chhabra, a Computer Science Engineering student with a deep passion for web development,
                programming, and artificial intelligence. I love turning ideas into real, interactive experiences on the web.
              </p>
              <p>
                I'm currently focused on mastering the fundamentals — HTML, CSS, and JavaScript — while exploring modern
                frameworks and tools that power today's web applications.
              </p>

              <h2 style={{ marginTop: "2rem" }}>Career goals</h2>
              <p>
                My goal is to grow into a skilled full-stack developer who can build inclusive, performant, and
                beautifully crafted digital products. I'm especially interested in the intersection of AI and web technologies.
              </p>
            </div>

            <aside aria-labelledby="education-heading">
              <h2 id="education-heading">Education & experience</h2>
              <ol className="timeline" reversed>
                <li>
                  <span className="year">Present</span>
                  <strong>Computer Science Engineering Student</strong>
                  <span>Learning web development, programming, and AI fundamentals.</span>
                </li>
                <li>
                  <span className="year">Ongoing</span>
                  <strong>Self-Directed Learning</strong>
                  <span>Building projects with HTML, CSS, and JavaScript.</span>
                </li>
              </ol>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
