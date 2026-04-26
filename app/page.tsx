"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroServices = [
  {
    label: "Executive Function Coaching",
    value:
      "For college students who need accountability and support with time management, prioritization, goal setting, task initiation and execution.",
  },
  {
    label: "Sport and Performance Consultation",
    value:
      "For athletes and performers facing adversity or seeking elevated levels of performance.",
  },
  {
    label: "Executive Coaching",
    value:
      "For seasoned and retired executives pursuing balance within the workplace or during the transition out of it.",
  },
];

export default function Home() {
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

        <a href="#top" className="brand-center" aria-label="BozemanPV home">
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
          <a
            href="/testimonials"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
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
            Coaching for professionals, founders, athletes, and high performers
            who want sharper focus, better execution, and a more stable way to
            operate at a high level.
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
            <a href="/process" className="btn btn-secondary">
              Explore the Process
            </a>
          </div>

          <div className="hero-metrics reveal reveal-5">
            {heroServices.map((item) => (
              <div className="metric-card" key={item.label}>
                <span className="metric-label">{item.label}</span>
                <span className="metric-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal reveal-3">
          <div className="hero-vector-mark" aria-hidden="true">
            <Image
              src="/BP_VECTOR.svg"
              alt=""
              fill
              sizes="(max-width: 1100px) 60vw, 32vw"
              className="hero-vector-image"
            />
          </div>

          <div className="portrait-shell">
            <div className="portrait-frame">
              <Image
                src="/portrait.png"
                alt="Stephen Bozeman"
                fill
                sizes="(max-width: 640px) calc(100vw - 20px), (max-width: 1100px) min(520px, 100vw), 520px"
                className="portrait-image"
                priority
              />
            </div>
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


      <section className="approach section">
        <div className="section-heading reveal reveal-1">
          <span className="section-kicker">Process</span>
          <h2>A cleaner way to understand, collaborate, and execute.</h2>
          <p>
            A clear, step-by-step process to diagnose performance gaps,
            implement practical systems, and create consistent, high-level execution.
          </p>
        </div>

        <div className="hero-actions reveal reveal-2">
          <a href="/process" className="btn btn-secondary">
            Explore the Process
          </a>
        </div>
      </section>

      <section className="services section">
        <div className="section-heading reveal reveal-1">
          <span className="section-kicker">About</span>
          <h2>Meet the coach behind the work.</h2>
          <p>
            People choose Stephen Bozeman for clarity, structure, and honest accountability.
            His approach goes beyond conversation and focuses on building systems that actually
            improve how clients think, work, and perform. The result is more consistency, less
            overwhelm, and a more sustainable way to operate at a high level.
          </p>
        </div>

        <div className="hero-actions reveal reveal-2">
          <a href="/about" className="btn btn-primary">
            About Me
          </a>
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

        </div>
      </section>
    </main>
  );
}