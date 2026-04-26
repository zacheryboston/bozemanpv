"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
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

      <section className="profile-section" id="profile">
        <div className="profile-section-bg-mark" aria-hidden="true">
          <div className="profile-section-bg-mark-inner">
            <Image
              src="/BP_VECTOR.svg"
              alt=""
              fill
              sizes="100vw"
              className="profile-section-bg-mark-image"
            />
          </div>
        </div>

        <div className="profile-shell">
          <div className="profile-main-card">
            <div className="profile-main-top">
              <div className="profile-main-identity">
                <h3>Stephen W. Bozeman</h3>
                <p className="profile-main-role">Founder & Owner</p>
                <span className="profile-main-badge">
                  Certified Mental Performance Consultant®
                </span>
              </div>

              <div className="profile-extra-headshot">
                <Image
                  src="/extraheadshot.jpeg"
                  alt="Stephen Bozeman additional headshot"
                  width={640}
                  height={800}
                  className="profile-extra-headshot-image"
                />
              </div>

              <div className="profile-main-stats">
                <div className="profile-stat-pill">
                  <span>Focus Areas</span>
                  <strong>
                    Sport & Performance Psychology / Executive Function
                  </strong>
                </div>
                <div className="profile-stat-pill">
                  <span>Populations</span>
                  <strong>
                    Neurodiverse clients, athletes, academia, executives
                  </strong>
                </div>
                <div className="profile-stat-pill">
                  <span>Based In</span>
                  <strong>
                    Houston, TX | Currently serving clients virtually across
                    every U.S. time zone
                  </strong>
                </div>
              </div>
            </div>

            <div className="profile-credentials-marquee">
              <div className="profile-credentials-track">
                {["APA.png", "AASP.png", "CMPC.png", "NCCA.png", "APA.png", "AASP.png", "CMPC.png", "NCCA.png"].map(
                  (logo, index) => (
                    <div className="profile-credential-logo" key={`${logo}-${index}`}>
                      <Image
                        src={`/${logo}`}
                        alt={logo.replace(".png", "")}
                        fill
                        sizes="(max-width: 640px) 140px, (max-width: 980px) 170px, 300px"
                        className="profile-credential-image"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="profile-main-grid">
              <div className="profile-info-block">
                <span className="profile-info-label">Education</span>
                <p>
                  Stephen Bozeman holds a Bachelor of Science in Psychology with
                  a minor in Applied Statistics, Summa Cum Laude, and a Master
                  of Arts in Applied Sports and Performance Psychology from the
                  University of St. Thomas in Houston, Texas.
                </p>
              </div>

              <div className="profile-info-block">
                <span className="profile-info-label">Credentials</span>
                <p>
                  Stephen maintains the Association for Applied Sport
                  Psychology&apos;s Certified Mental Performance Consultant®
                  accreditation by the National Commission for Certifying
                  Agencies and is a member of AASP and the American
                  Psychological Association.
                </p>
              </div>

              <div className="profile-info-block">
                <span className="profile-info-label">Mentorship & Foundation</span>
                <p>
                  Stephen was mentored by Dr. Lennie Waite of Waite Performance
                  Strategies in Houston, Texas and employed by Tracy Markle, MA
                  and Dr. Nicole Hipp of Collegiate Coaching Services in
                  Boulder, Colorado before starting Bozeman Performance Ventures
                  in 2023.
                </p>
              </div>

              <div className="profile-info-block">
                <span className="profile-info-label">Applied Expertise</span>
                <p>
                  His areas of expertise are sport and performance psychology
                  and executive function. Stephen has extensive experience
                  working with neurodiverse individuals, youth and adult
                  competitive sport populations, and academia. In addition, he
                  coaches current and retired business executives of large
                  companies who seek personal accountability in pursuit of their
                  goals inside and outside of the office.
                </p>
              </div>

              <div className="profile-info-block">
                <span className="profile-info-label">Coaching Presence</span>
                <p>
                  Stephen holds a seasonal cross country coaching position at
                  St. John&apos;s School in Houston, Texas where he motivates
                  his athletes to keep their eyes up and frame obstacles as
                  opportunities. He takes pride in running alongside his
                  athletes during their day-to-day training as he believes being
                  on the ground floor in his community is essential to
                  connecting with, understanding, and encouraging the next
                  generation of athletes and world leaders.
                </p>
              </div>

              <div className="profile-info-block">
                <span className="profile-info-label">Personal</span>
                <p>
                  Stephen is a Houston native and lives in Kingwood with his two
                  daughters and wife. When he is not engaging in what he
                  considers meaningful work at BPV, spending time with his
                  family, traveling, or confronting a physical challenge is where
                  you will find him.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}