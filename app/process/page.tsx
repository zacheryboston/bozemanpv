"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    <main className={`process-page-light ${loaded ? "page-loaded" : ""}`}>
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

      <section className="process-light-hero">
        <div className="process-light-shell">
          <h1>What is Executive Function Coaching?</h1>

          <div className="process-light-copy">
            <p>
              Executive function refers to ones ability to objectively analyze
              their current situation and take calculated action towards their
              ideal future. Executive function is a term that psychologists use
              to describe how one utilizes brain functions to carry out behaviors
              such as the prioritization and initiation of tasks. An executive
              function coach&apos;s job is to provide accountability and support
              during goal pursuit. This is accomplished through defining goals
              using empirically tested frameworks and engineering the structure
              that is needed to realize them. Such structures are built from the
              education and application of skills such as time - management,
              emotional regulation, and self - advocacy.
            </p>

            <p>
              Throughout the application of executive function skills,
              accountability and support from a coach is essential. These
              elements of the relationship allows the coach to help clients
              uncover intrinsic motivation and personalized ways to build
              resiliency along the journey to achievement.
            </p>

            <p>
              The goal of executive function coaching is to guide individuals to
              a place where they are autonomous in their lives. The underlying
              philosophy of this goal is the following belief: By building a
              toolbox which will allow one to identify a goal and confidently
              pursue it, one may go out into the world and express themselves in
              a free and unhindered way. When obstacles arise and setbacks occur,
              experience in making mindful adjustments allows for continued
              growth and fulfillment.
            </p>

            <h2>Who do we work with?</h2>

            <p>
              We currently coach senior executives and consultants in the
              finance, marketing, and analytics industry. In addition we offer
              executive function coaching to future leaders pursuing degrees at
              top Universities across the country.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}