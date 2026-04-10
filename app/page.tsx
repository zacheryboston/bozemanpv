"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="page"
      style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      <nav
        className="nav"
        style={{
          position: "sticky",
          top: 0,
        }}
      >
        <a href="/" className="nav-left" aria-label="Home">
          <div className="logo-wrap">
            <Image
              src="/BP_VECTOR_nav.svg"
              alt="Bozeman Performance"
              fill
              className="logo-image"
              priority
            />
          </div>
        </a>

        <div className="nav-right">
          <a>Services</a>
          <a>Expertise</a>
          <a>Testimonials</a>
          <a>Contact</a>
          <button className="btn-primary">Client Portal</button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero"
        style={{
          position: "relative",
        }}
      >
        <div className="hero-image">
          <Image
            src="/desk.png"
            alt="Desk workspace"
            fill
            priority
            className="hero-bg"
          />
          <div className="hero-overlay" />
          <div className="hero-mesh" />
        </div>

        <div className={`hero-content ${loaded ? "fade-up" : ""}`}>
          <div className="hero-tag">EXECUTIVE FUNCTION COACHING</div>

          <h1>
            Build the Mental Systems
            <br />
            That Drive Performance
          </h1>

          <p>
            Improve focus, organization, follow through, time management, and
            decision-making under pressure. Designed for executives, athletes,
            entrepreneurs, and high performers who want more control over how
            they operate every day.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Work With Me</button>
            <button className="btn-secondary">View Services</button>
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "-1px",
            height: "180px",
            zIndex: 3,
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(11,15,25,0) 0%, rgba(11,15,25,0.18) 28%, rgba(11,15,25,0.45) 52%, rgba(11,15,25,0.75) 76%, #0b0f19 100%)",
          }}
        />
      </section>

      {/* SECOND HERO / SERVICES */}
      <section
        className="services"
        style={{
          position: "relative",
          overflow: "hidden",
          isolation: "isolate",
          minHeight: "720px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
          gap: "30px",
          padding: "140px 80px",
          background: "#0b0f19",
          marginTop: "-70px",
          zIndex: 1,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "160px",
            zIndex: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(11,15,25,0.95) 0%, rgba(11,15,25,0.72) 35%, rgba(11,15,25,0.35) 70%, rgba(11,15,25,0) 100%)",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "1100px",
              height: "1100px",
              opacity: 0.11,
              transform: "translateY(20px)",
            }}
          >
            <Image
              src="/BP_VECTOR_dark.svg"
              alt=""
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(11,15,25,0.12) 0%, rgba(11,15,25,0.42) 62%, rgba(11,15,25,0.72) 100%)",
            }}
          />
        </div>

        <div
          className={`card ${loaded ? "fade-up" : ""}`}
          style={{
            position: "relative",
            zIndex: 1,
            animationDelay: "0.2s",
          }}
        >
          <h3>Sport Psychology</h3>
          <p>
            Mental performance systems built for athletes who want consistent,
            measurable results.
          </p>
          <button className="btn-secondary">Learn More</button>
        </div>

        <div
          className={`card ${loaded ? "fade-up delay" : ""}`}
          style={{
            position: "relative",
            zIndex: 1,
            animationDelay: "0.35s",
          }}
        >
          <h3>Executive Coaching</h3>
          <p>
            Improve focus, decision-making, and execution under pressure for
            business leaders.
          </p>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`cta ${loaded ? "fade-up" : ""}`}
        style={{
          animationDelay: "0.45s",
        }}
      >
        <h2>Operate at a Higher Level</h2>
        <p>
          Built for executives, founders, and high performers who want an edge.
        </p>

        <div
          style={{
            marginTop: "28px",
          }}
        >
          <button className="btn-primary">Start Now</button>
        </div>
      </section>
    </main>
  );
}