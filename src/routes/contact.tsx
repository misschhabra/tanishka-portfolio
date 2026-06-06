import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Morgan" },
      { name: "description", content: "Get in touch with Alex Morgan — accessible contact form and social links." },
      { property: "og:title", content: "Contact — Alex Morgan" },
      { property: "og:description", content: "Get in touch via the contact form or social media." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type Errors = { name?: string; email?: string; message?: string };

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!message) next.message = "Please enter a message.";
    else if (message.length < 10) next.message = "Message should be at least 10 characters.";

    setErrors(next);

    if (Object.keys(next).length === 0) {
      setStatus("Thanks! Your message has been sent. I'll reply within 1–2 business days.");
      e.currentTarget.reset();
    } else {
      setStatus(null);
    }
  };

  return (
    <SiteLayout>
      <section className="section" aria-labelledby="contact-heading">
        <div className="container fade-in">
          <span className="eyebrow">Contact</span>
          <h1 id="contact-heading">Let's work together</h1>
          <p style={{ maxWidth: "60ch" }}>
            Have a project in mind, or just want to say hi? Send a message — I'll get back to you soon.
          </p>

          <div className="contact-grid" style={{ marginTop: "2.5rem" }}>
            <form className="form" onSubmit={onSubmit} noValidate aria-labelledby="contact-heading">
              {status && (
                <div className="form-status" role="status" aria-live="polite">{status}</div>
              )}

              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text" autoComplete="name" required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span id="name-error" className="error" role="alert">{errors.name}</span>}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" autoComplete="email" required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span id="email-error" className="error" role="alert">{errors.email}</span>}
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <span id="message-error" className="error" role="alert">{errors.message}</span>}
              </div>

              <div>
                <button type="submit" className="btn btn-primary">Send message</button>
              </div>
            </form>

            <aside aria-labelledby="connect-heading">
              <h2 id="connect-heading">Other ways to connect</h2>
              <p>Prefer email or social? Reach out on any of these channels.</p>
              <ul role="list" style={{ listStyle: "none", padding: 0, display: "grid", gap: ".5rem" }}>
                <li><a href="mailto:hello@alexmorgan.dev">hello@alexmorgan.dev</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter ↗</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
