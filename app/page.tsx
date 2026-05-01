import Image from "next/image";

const services = [
  "Executive Function Coaching",
  "Performance Psychology",
  "Goal Setting",
  "Accountability",
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="/" className="nav-brand">
          <Image
            src="/BSPP-Logo/BPV-V2/VECTOR/BPV-VECTOR-V2.svg"
            alt="Bozeman Sport & Performance Psychology"
            width={260}
            height={90}
            priority
          />
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <Image
          className="hero-watermark"
          src="/BPV-Logo-Art-Only/VECTOR/BP-VECTOR.svg"
          alt=""
          width={700}
          height={700}
          priority
        />

        <div className="hero-inner">
          <div className="hero-copy animate-in">
            <p className="kicker">Bozeman Performance</p>
            <h1>Executive function coaching for clarity, structure, and follow-through.</h1>
            <p>
              Simple, focused coaching for professionals who want better systems,
              stronger accountability, and more consistent execution.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button button-dark">
                Schedule Consultation
              </a>
              <a href="#services" className="button button-light">
                View Services
              </a>
            </div>
          </div>

          <div className="hero-logo animate-in delay-1">
            <Image
              src="/Bozeman-Performance-Logos/VECTOR/BP-BOZEMAN-PERFORMANCE-VECTOR-01.svg"
              alt="Bozeman Performance"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-inner split">
          <div className="animate-in">
            <p className="kicker">About</p>
            <h2>Built for people who are capable, driven, and ready for better structure.</h2>
          </div>

          <div className="text-stack animate-in delay-1">
            <p>
              Executive function coaching helps clients turn goals into practical
              systems. The work focuses on prioritization, time management,
              emotional regulation, self-advocacy, and accountability.
            </p>
            <p>
              The process is direct and structured: define the goal, identify the
              barriers, build the system, and create consistent follow-through.
            </p>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-inner">
          <div className="section-heading animate-in">
            <p className="kicker">Services</p>
            <h2>Focused coaching without the noise.</h2>
          </div>

          <div className="cards">
            {services.map((service, index) => (
              <article className={`card animate-in delay-${index + 1}`} key={service}>
                <span>0{index + 1}</span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section logo-strip">
        <div className="logo-track">
          <Image
            src="/BPV-Logo-Art-Only/VECTOR/BP-VECTOR.svg"
            alt=""
            width={120}
            height={120}
          />
          <Image
            src="/Bozeman-Performance-Logos/VECTOR/BP-BOZEMAN-PERFORMANCE-VECTOR-01.svg"
            alt=""
            width={260}
            height={120}
          />
          <Image
            src="/BSPP-Logo/BPV-V2/VECTOR/BPV-VECTOR-V2.svg"
            alt=""
            width={340}
            height={120}
          />
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-box animate-in">
          <Image
            src="/BSPP-Logo/BPV-V2/VECTOR/BPV-VECTOR-V2.svg"
            alt="Bozeman Sport & Performance Psychology"
            width={340}
            height={120}
          />

          <h2>Ready to build better structure?</h2>
          <p>
            Start with a simple consultation and determine whether coaching is
            the right fit.
          </p>

          <a href="mailto:info@bozemanpv.com" className="button button-dark">
            Contact Bozeman Performance
          </a>
        </div>
      </section>
    </main>
  );
}