import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Full-Stack Developer & Designer" },
      { name: "description", content: "Portfolio of Alex Morgan — building accessible, performant, and beautifully crafted web experiences." },
      { property: "og:title", content: "Alex Morgan — Full-Stack Developer" },
      { property: "og:description", content: "Portfolio of Alex Morgan — building accessible, performant, and beautifully crafted web experiences." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = [
  {
    title: "Atlas Analytics",
    description: "Real-time dashboard for product teams with WCAG AA compliance.",
    tags: ["React", "TypeScript", "D3"],
  },
  {
    title: "Mosaic CMS",
    description: "Headless content platform with collaborative editing.",
    tags: ["Node.js", "Postgres", "tRPC"],
  },
  {
    title: "Pulse Mobile",
    description: "Cross-platform fitness companion with offline sync.",
    tags: ["React Native", "GraphQL"],
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-grid fade-in">
          <div>
            <span className="eyebrow">Available for freelance</span>
            <h1 id="hero-heading">Hi, I'm Alex Morgan. I build accessible web products.</h1>
            <p className="lead">
              Full-stack developer with 7+ years crafting performant, inclusive interfaces
              for startups and design-led teams.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View my work</Link>
              <Link to="/contact" className="btn btn-outline">Get in touch</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">AM</div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <span className="eyebrow">Selected work</span>
          <h2 id="featured-heading">Featured projects</h2>
          <p style={{ maxWidth: "60ch" }}>A glimpse of recent things I've shipped.</p>
          <div className="card-grid" style={{ marginTop: "2rem" }}>
            {featured.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tag-list" aria-label="Technologies">
                  {p.tags.map((t) => <li key={t} className="tag">{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link to="/projects" className="btn btn-outline">See all projects</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
