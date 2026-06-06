import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Morgan" },
      { name: "description", content: "Selected projects with live demos and source code." },
      { property: "og:title", content: "Projects — Alex Morgan" },
      { property: "og:description", content: "Selected projects with live demos and source code." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Atlas Analytics",
    description: "Real-time dashboard for product teams with full WCAG AA compliance and sub-100ms interaction latency.",
    tags: ["React", "TypeScript", "D3", "WebSockets"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Mosaic CMS",
    description: "Headless content platform supporting collaborative editing, versioning, and a plugin SDK.",
    tags: ["Node.js", "Postgres", "tRPC", "Redis"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Pulse Mobile",
    description: "Cross-platform fitness companion app with offline-first sync and adaptive workout plans.",
    tags: ["React Native", "GraphQL", "SQLite"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Quill Editor",
    description: "A minimal, keyboard-first markdown editor with vim mode and live preview.",
    tags: ["Svelte", "Rust (WASM)"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Harbor Auth",
    description: "Drop-in authentication service with passkey support and detailed audit logs.",
    tags: ["Go", "Postgres", "WebAuthn"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Lumen Docs",
    description: "Documentation framework focused on a11y, fast search, and beautiful defaults.",
    tags: ["Next.js", "MDX", "Algolia"],
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
            A selection of products and tools I've designed and built.
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
