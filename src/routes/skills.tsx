import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Tanishka Chhabra" },
      { name: "description", content: "Technical skills: HTML, CSS, JavaScript, C++, Python, and Git & GitHub." },
      { property: "og:title", content: "Skills — Tanishka Chhabra" },
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
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "C++", level: 75 },
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", level: 78 },
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
            A breakdown of the technologies and tools I'm learning and using as I grow as a developer.
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
