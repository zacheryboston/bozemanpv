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
          <div className="brand-nav-lockup">
            <div className="brand-nav-mark">
              <Image
                src="/BPBP.png"
                alt="BozemanPV mark"
                fill
                sizes="46px"
                className="brand-nav-mark-image"
                priority
              />
            </div>

            <div className="brand-nav-wordmark">
              <Image
                src="/logoheaderVECTOR.svg"
                alt="Bozeman Performance Ventures"
                fill
                sizes="(max-width: 640px) 170px, (max-width: 920px) 210px, 250px"
                className="brand-header-image"
                priority
              />
            </div>
          </div>
        </a>

        <nav className="nav">
          <a href="#profile">Profile</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#results">Results</a>
          <a href="/testimonials" className="nav-pill">
            Testimonials
          </a>
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
            <a href="#approach" className="btn btn-secondary">
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

      <section className="profile section" id="profile">
        <div className="section-heading profile-heading reveal reveal-1">
          <span className="section-kicker">Professional Profile</span>
          <h2>Training, experience, and applied expertise.</h2>
          <p>
            A background built across psychology, sport and performance
            consulting, executive function coaching, and real-world applied
            accountability.
          </p>
        </div>

        <div className="profile-modern-grid">
          <article className="profile-identity-card reveal reveal-2">
            <div className="profile-identity-top">
              <div className="profile-mark-wrap">
                <Image
                  src="/BP_VECTOR.svg"
                  alt=""
                  fill
                  sizes="84px"
                  className="profile-mark-image"
                />
              </div>

              <div>
                <span className="profile-badge">
                  Certified Mental Performance Consultant®
                </span>
                <h3>Stephen W. Bozeman</h3>
                <p className="profile-role">Founder & Owner</p>
              </div>
            </div>

            <div className="profile-stat-stack">
              <div className="profile-stat">
                <span className="profile-stat-label">Focus Areas</span>
                <strong>
                  Sport & Performance Psychology
                  <br />
                  Executive Function
                </strong>
              </div>

              <div className="profile-stat">
                <span className="profile-stat-label">Populations</span>
                <strong>
                  Neurodiverse clients, athletes, academia, executives
                </strong>
              </div>

              <div className="profile-stat">
                <span className="profile-stat-label">Based In</span>
                <strong>Houston, Texas</strong>
              </div>
            </div>
          </article>

          <div className="profile-copy-stack">
            <article className="profile-copy-card reveal reveal-3">
              <span className="profile-card-kicker">Education</span>
              <p>
                Stephen Bozeman holds a Bachelor of Science in Psychology with a
                minor in Applied Statistics, Summa Cum Laude, and a Master of
                Arts in Applied Sports and Performance Psychology from the
                University of St. Thomas in Houston, Texas.
              </p>
            </article>

            <article className="profile-copy-card reveal reveal-3">
              <span className="profile-card-kicker">Credentials</span>
              <p>
                Stephen maintains the Association for Applied Sport
                Psychology&apos;s Certified Mental Performance Consultant®
                accreditation by the National Commission for Certifying Agencies
                and is a member of AASP and the American Psychological
                Association.
              </p>
            </article>

            <article className="profile-copy-card reveal reveal-4">
              <span className="profile-card-kicker">Mentorship & Foundation</span>
              <p>
                Stephen was mentored by Dr. Lennie Waite of Waite Performance
                Strategies in Houston, Texas and employed by Tracy Markle, MA
                and Dr. Nicole Hipp of Collegiate Coaching Services in Boulder,
                Colorado before starting Bozeman Performance Ventures in 2023.
              </p>
            </article>

            <article className="profile-copy-card reveal reveal-4">
              <span className="profile-card-kicker">Applied Expertise</span>
              <p>
                His areas of expertise are sport and performance psychology and
                executive function. Stephen has extensive experience working with
                neurodiverse individuals, youth and adult competitive sport
                populations, and academia. In addition, he coaches current and
                retired business executives of large companies who seek personal
                accountability in pursuit of their goals inside and outside of
                the office.
              </p>
            </article>

            <article className="profile-copy-card reveal reveal-5">
              <span className="profile-card-kicker">Coaching Presence</span>
              <p>
                Stephen holds a seasonal cross country coaching position at St.
                John&apos;s School in Houston, Texas where he motivates his
                athletes to keep their eyes up and frame obstacles as
                opportunities. He takes pride in running alongside his athletes
                during their day-to-day training as he believes being on the
                ground floor in his community is essential to connecting with,
                understanding, and encouraging the next generation of athletes
                and world leaders.
              </p>
            </article>

            <article className="profile-copy-card reveal reveal-5">
              <span className="profile-card-kicker">Personal</span>
              <p>
                Stephen is a Houston native and lives in Kingwood with his two
                daughters and wife. When he is not engaging in what he considers
                meaningful work at BPV, spending time with his family,
                traveling, or confronting a physical challenge is where you will
                find him.
              </p>
            </article>
          </div>
        </div>
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
              Goal Oriented Relationships:
              <span>
                {" "}
                Empathy, honesty, and accountability produce measurable
                results.
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
            <h3>Perform at a high level without running yourself into the ground.</h3>
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