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
    title: "Understand",
    text: "We build a foundation for liftoff by thoroughly understanding the client's unique goals and challenges.",
  },
  {
    step: "02",
    title: "Collaborate",
    text: "We create an alliance to develop a system that suits the client's individual personal, professional, and performance profile.",
  },
  {
    step: "03",
    title: "Implement",
    text: "In addition to expertise and accountability, we monitor and refine support by measuring performance indicators such as process goals or adversity reactions, both of which naturally result from progress.",
  },
];

export default function ProcessPage() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
        setMenuOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={`page ${loaded ? "page-loaded" : ""}`}>
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <div className="grid-lines" />

      <header
        className={`site-header ${showHeader ? "visible" : "hidden"} ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="/" className="brand-center" aria-label="BozemanPV home">
          <Image
            src="/BPBP.png"
            alt="BozemanPV mark"
            width={180}
            height={70}
            className="brand-nav-mark-image"
            style={{ height: "auto" }}
            priority
          />
        </a>

        <a
          href="https://stephen-bozeman.clientsecure.me"
          target="_blank"
          rel="noreferrer"
          className="header-cta"
        >
          Client Portal
        </a>

        <nav className={`dropdown-nav ${menuOpen ? "open" : ""}`}>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a href="/testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <section className="services section" id="services" style={{ paddingTop: "150px" }}>
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
              Goal Oriented Relationships:
              <span>
                {" "}
                Empathy, honesty, and accountability produce measurable results.
              </span>
            </h2>
            <p>
              It&apos;s a built in feature: We know our clients and learn what
              they&apos;re truly seeking. The client-consultant relationship
              creates intrinsic value and motivation resilient against extrinsic
              circumstances.
            </p>

            <ul className="outcomes-list">
              {outcomes.map((item, index) => (
                <li key={item} className={`reveal reveal-${(index % 3) + 2}`}>
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
            Better planning. Better execution. Better self-management. Stronger
            performance without relying on chaos, overwork, or constant
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
            <h3>
              Perform at a high level without running yourself into the ground.
            </h3>
            <p>
              Build a more sustainable rhythm that supports both ambition and
              long-term effectiveness.
            </p>
          </div>
        </div>
      </section>

      <section className="cta section" id="contact">
        <div className="cta-panel reveal reveal-2">
          <span className="section-kicker">Contact</span>
          <h2>Ready to build a better operating system?</h2>
          <p>
            Start with a consultation and explore whether this process is the
            right fit for your goals.
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
            <a href="/" className="btn btn-secondary">
              Back Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}