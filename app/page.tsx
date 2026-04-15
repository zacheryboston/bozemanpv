"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Executive Function Coaching",
    text: "For professionals who need stronger follow-through, better planning, cleaner prioritization, and more consistent execution under pressure.",
  },
  {
    title: "Performance Psychology",
    text: "For leaders, athletes, and high performers who want to improve confidence, composure, mental resilience, and performance consistency.",
  },
  {
    title: "High-Accountability Support",
    text: "Structured guidance built around real-life demands, with practical tools that help translate insight into action.",
  },
];

const outcomes = [
  "Stronger focus in high-demand environments",
  "Better prioritization and time management",
  "Improved follow-through and consistency",
  "Reduced overwhelm and mental clutter",
  "Clearer decision-making under pressure",
  "A more sustainable way to perform at a high level",
];

const process = [
  {
    step: "01",
    title: "Assess the friction",
    text: "We identify what is breaking execution: attention drift, overload, inconsistent systems, weak boundaries, or poor recovery.",
  },
  {
    step: "02",
    title: "Build the structure",
    text: "We create an operating system around your real life so you can think clearly, execute consistently, and stop relying on last-minute effort.",
  },
  {
    step: "03",
    title: "Strengthen performance",
    text: "We refine the habits, mindset, and accountability required to sustain high output without burning yourself down.",
  },
];

const testimonials = [
  {
    quote:
      "Stephen brings a rare combination of calm, insight, and structure. The work helped me become more intentional, more focused, and far more effective in how I lead and operate.",
    name: "Leadership Client",
    role: "Executive Coaching",
  },
  {
    quote:
      "This was not surface-level coaching. It helped me understand how I was getting in my own way and gave me practical tools I could actually use every week.",
    name: "Professional Client",
    role: "Executive Function Coaching",
  },
  {
    quote:
      "What stood out most was the balance between empathy and accountability. I left sessions with clarity, direction, and something concrete to execute.",
    name: "Performance Client",
    role: "High-Performance Coaching",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`page ${loaded ? "page-loaded" : ""}`}>
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <div className="grid-lines" />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="BozemanPV home">
          <div className="brand-mark">
            <Image
              src="/bplogo.png"
              alt="BozemanPV logo"
              fill
              className="brand-logo"
              priority
            />
          </div>
          <div className="brand-copy">
            <span className="brand-name">BozemanPV</span>
            <span className="brand-subtitle">Executive Function Coaching</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="https://stephen-bozeman.clientsecure.me"
          target="_blank"
          rel="noreferrer"
          className="header-cta"
        >
          Schedule Online
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal reveal-1">
            EXECUTIVE FUNCTION COACHING
          </div>

          <h1 className="hero-title reveal reveal-2">
            Build the structure
            <span> behind elite performance.</span>
          </h1>

          <p className="hero-text reveal reveal-3">
            Coaching for professionals, founders, and high performers who want
            sharper focus, better execution, and a more stable way to operate at
            a high level.
          </p>

          <div className="hero-actions reveal reveal-4">
            <a
              href="https://stephen-bozeman.clientsecure.me"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Schedule Consultation
            </a>
            <a href="#approach" className="btn btn-secondary">
              Explore the Process
            </a>
          </div>

          <div className="hero-metrics reveal reveal-5">
            <div className="metric-card">
              <span className="metric-label">Focus</span>
              <span className="metric-value">Clearer thinking</span>
            </div>
            <div className="metric-card">
              <span className="metric-label">Execution</span>
              <span className="metric-value">Stronger follow-through</span>
            </div>
            <div className="metric-card">
              <span className="metric-label">Performance</span>
              <span className="metric-value">Sustainable output</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-3">
          <div className="portrait-shell">
            <div className="portrait-orb" />
            <div className="portrait-frame">
              <Image
                src="/portrait.png"
                alt="Stephen Bozeman"
                fill
                className="portrait-image"
                priority
              />
            </div>
          </div>

          <div className="floating-panel floating-panel-top">
            <span className="floating-label">For high performers</span>
            <strong>Sharper execution under pressure</strong>
          </div>

          <div className="floating-panel floating-panel-bottom">
            <span className="floating-label">Built for real life</span>
            <strong>Structure, accountability, and sustainable performance</strong>
          </div>
        </div>
      </section>

      <section className="trust-strip reveal reveal-4">
        <div className="trust-line" />
        <p>
          Executive coaching for people who do not need more information.
          <span> They need better execution.</span>
        </p>
        <div className="trust-line" />
      </section>

      <section className="services section" id="services">
        <div className="section-heading reveal reveal-1">
          <span className="section-kicker">Services</span>
          <h2>Precision support for leadership, focus, and performance.</h2>
          <p>
            Designed for professionals who are capable, driven, and tired of
            underperforming because their internal systems are overloaded,
            inconsistent, or unclear.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`service-card reveal reveal-${index + 2}`}
            >
              <div className="service-number">0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="approach-layout">
          <div className="approach-left reveal reveal-1">
            <span className="section-kicker">Approach</span>
            <h2>
              Less noise.
              <span> More structure, clarity, and follow-through.</span>
            </h2>
            <p>
              The goal is not just insight. The goal is operational change. This
              work helps you identify what is interfering with performance and
              replace it with a system that actually holds up in demanding
              environments.
            </p>

            <ul className="outcomes-list">
              {outcomes.map((item, index) => (
                <li
                  key={item}
                  className={`reveal reveal-${(index % 3) + 2}`}
                >
                  <span className="check-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="approach-right">
            {process.map((item, index) => (
              <article
                key={item.step}
                className={`process-card reveal reveal-${index + 2}`}
              >
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results section" id="results">
        <div className="section-heading narrow reveal reveal-1">
          <span className="section-kicker">Results</span>
          <h2>What this work is meant to change.</h2>
          <p>
            Better planning. Better execution. Better self-management.
            Stronger performance without relying on chaos, overwork, or constant
            recovery.
          </p>
        </div>

        <div className="results-grid">
          <div className="result-panel large reveal reveal-2">
            <span className="result-label">Strategic Clarity</span>
            <h3>Know what matters, when it matters.</h3>
            <p>
              Create a more deliberate approach to priorities, boundaries, and
              decision-making so your attention stops getting hijacked by every
              incoming demand.
            </p>
          </div>

          <div className="result-panel reveal reveal-3">
            <span className="result-label">Consistent Execution</span>
            <h3>Do the work you know you need to do.</h3>
            <p>
              Replace drift and inconsistency with systems that help you
              initiate, organize, and follow through.
            </p>
          </div>

          <div className="result-panel reveal reveal-4">
            <span className="result-label">Resilient Performance</span>
            <h3>Perform at a high level without running yourself into the ground.</h3>
            <p>
              Build a more sustainable rhythm that supports both ambition and
              long-term effectiveness.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="section-heading reveal reveal-1">
          <span className="section-kicker">Testimonials</span>
          <h2>Trusted, thoughtful, and built for real change.</h2>
          <p>
            Replace these with your real testimonials when ready. The layout is
            already set up for them.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <article
              key={item.name + item.role}
              className={`testimonial-card reveal reveal-${index + 2}`}
            >
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-meta">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta section" id="contact">
        <div className="cta-panel reveal reveal-2">
          <span className="section-kicker">Contact</span>
          <h2>For people who are ready to operate better.</h2>
          <p>
            If your work demands clarity, consistency, and high-level execution,
            this is where that process starts.
          </p>

          <div className="cta-actions">
            <a
              href="https://stephen-bozeman.clientsecure.me"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Schedule Online
            </a>
            <a href="tel:18323865973" className="btn btn-secondary">
              Call (832) 386-5973
            </a>
          </div>

          <div className="cta-footer">
            <span>Houston</span>
            <span className="footer-divider" />
            <span>Austin</span>
          </div>
        </div>
      </section>
    </main>
  );
}