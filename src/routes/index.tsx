import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanishka Chhabra — Computer Science Engineering Student" },
      { name: "description", content: "Portfolio of Tanishka Chhabra — a Computer Science Engineering student building accessible web experiences with HTML, CSS, and JavaScript." },
      { property: "og:title", content: "Tanishka Chhabra — Computer Science Engineering Student" },
      { property: "og:description", content: "Portfolio of Tanishka Chhabra — building accessible web experiences with HTML, CSS, and JavaScript." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = [
  {
    title: "Portfolio Website",
    description: "A fully accessible, responsive personal portfolio built with semantic HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Calculator Application",
    description: "A clean, functional calculator built to practice DOM manipulation and event handling.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Future Projects",
    description: "More exciting projects are on the way as I continue learning modern web technologies.",
    tags: ["Coming Soon"],
  },
];

function Home() {
  return (
    <SiteLayout>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-grid fade-in">
          <div>
            <span className="eyebrow">Computer Science Engineering Student</span>
            <h1 id="hero-heading">Hi, I'm Tanishka Chhabra. I build accessible web experiences.</h1>
            <p className="lead">
              Passionate about web development, programming, and AI.
              Currently learning HTML, CSS, JavaScript, and modern web technologies.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View my work</Link>
              <Link to="/contact" className="btn btn-outline">Get in touch</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">TC</div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <span className="eyebrow">Selected work</span>
          <h2 id="featured-heading">Featured projects</h2>
          <p style={{ maxWidth: "60ch" }}>A glimpse of the projects I've built while learning web development.</p>
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
