import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tanishka Chhabra" },
      { name: "description", content: "Selected projects by Tanishka Chhabra — portfolio website, calculator app, and upcoming work." },
      { property: "og:title", content: "Projects — Tanishka Chhabra" },
      { property: "og:description", content: "Selected projects with details on technologies used." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Portfolio Website",
    description: "A fully accessible, responsive personal portfolio built from scratch using semantic HTML5, modern CSS3, and vanilla JavaScript. Features dark mode, smooth animations, and WCAG-compliant navigation.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "/",
    repo: "https://github.com",
  },
  {
    title: "Calculator Application",
    description: "A responsive calculator built using HTML, CSS, and JavaScript. Supports basic arithmetic operations, keyboard input, clear and delete functionality, and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "PASTE_YOUR_GITHUB_PAGES_URL",
    repo: "PASTE_YOUR_CALCULATOR_GITHUB_URL",
  },
  {
    title: "Future Projects",
    description: "More exciting projects are on the way as I continue exploring React, Node.js, and AI-powered web applications.",
    tags: ["Coming Soon"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
];

function Projects() {
  return (
    <SiteLayout>
      <section className="section" aria-labelledby="projects-heading">
        <div className="container fade-in">
          <span className="eyebrow">Work</span>
          <h1 id="projects-heading">Projects</h1>
          <p style={{ maxWidth: "60ch" }}>
            A selection of things I've built while learning and experimenting with web technologies.
          </p>

          <div className="card-grid" style={{ marginTop: "2rem" }}>
            {projects.map((p) => (
              <article className="card" key={p.title} aria-labelledby={`p-${p.title}`}>
                <h2 id={`p-${p.title}`} style={{ fontSize: "1.25rem" }}>{p.title}</h2>
                <p>{p.description}</p>
                <ul className="tag-list" aria-label={`${p.title} technologies`}>
                  {p.tags.map((t) => <li key={t} className="tag">{t}</li>)}
                </ul>
                <div className="card-actions">
                  <a
                    className="btn btn-primary"
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} — live demo (opens in new tab)`}
                  >
                    Live demo
                  </a>
                  <a
                    className="btn btn-outline"
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} — GitHub repository (opens in new tab)`}
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
