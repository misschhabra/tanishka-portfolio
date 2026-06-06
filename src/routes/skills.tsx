import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Alex Morgan" },
      { name: "description", content: "Technical skills: frontend, backend, programming languages, and developer tools." },
      { property: "og:title", content: "Skills — Alex Morgan" },
      { property: "og:description", content: "Frontend, backend, languages, and tooling expertise." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "CSS & Design Systems", level: 90 },
      { name: "Accessibility (WCAG)", level: 88 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL / tRPC", level: 80 },
      { name: "REST API design", level: 90 },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "JavaScript / TypeScript", level: 95 },
      { name: "Python", level: 75 },
      { name: "Go", level: 60 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "Figma", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Vite / Webpack", level: 85 },
    ],
  },
];

function Skills() {
  return (
    <SiteLayout>
      <section className="section" aria-labelledby="skills-heading">
        <div className="container fade-in">
          <span className="eyebrow">Skills</span>
          <h1 id="skills-heading">What I work with</h1>
          <p style={{ maxWidth: "60ch" }}>
            A breakdown of the technologies I use day-to-day, grouped by domain.
          </p>

          <div style={{ marginTop: "2.5rem" }}>
            {groups.map((g) => (
              <section className="skill-group" key={g.title} aria-labelledby={`group-${g.title}`}>
                <h2 id={`group-${g.title}`}>{g.title}</h2>
                <div>
                  {g.items.map((s) => (
                    <div className="skill-bar" key={s.name}>
                      <div className="skill-bar-header">
                        <span>{s.name}</span>
                        <span aria-hidden="true">{s.level}%</span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label={`${s.name} proficiency`}
                        aria-valuenow={s.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-fill" style={{ width: `${s.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
