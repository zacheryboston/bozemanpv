"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "C.B., IL",
    school: "Colorado School of Mines",
    quote: `Stephen Bozeman has been coaching my son for the last few years and assisting with executive functioning skills. He is extremely patient and empathetic. He is very committed to helping his clients achieve their goals by guiding them through the steps to make their dreams a reality. He is very personable and relatable, making my son feel at ease and able to open up and communicate. He is determined to find out what motivates a person so that he can help them be successful. I can highly recommend working with Stephen for executive functioning and life coaching, he has been a Godsend to our family`,
  },
  {
    name: "K.T., TX",
    school: "",
    quote: `Our ten year old son struggled for years in sports with performance anxiety. We were at a loss on how to address the issue and felt as though we had exhausted all available options. Thank God we were introduced to Stephen. Within weeks of regular meetings with Stephen our son was a different child, anxiety free and excelling on the field with a new sense of confidence. Stephen’s ability to communicate with athletes is excellent. We are so grateful and appreciative of the amazing help he has provided our son, who always looks forward to his sessions with Coach Bozeman`,
  },
  {
    name: "W. & D.B., TX",
    school: "CU Boulder",
    quote: `Stephen entered our lives in August, 2022 when he worked as a Coach at Collegiate Coaching Services. Our son was a junior at CU Boulder and was struggling. He was in great need of help with organization, good study habits, accountability, time management etc. Stephen has been a true Godsend for our son and us as parents. He meets with our son regularly and has became a combination of coach, big brother, and friend. He's older than our son, but young enough to be totally relatable and understanding of the difficulties and needs of a student. Stephen somehow is always able to phrase things in a professional, positive, encouraging manner that helped him become the student we knew he was capable of becoming. Not only has Stephen been great for our son, but he's also been a blessing for my husband and I too. We have regular coach/parent meetings where Stephen keeps us totally informed about our son - his progression and all issues they're working on. The open communication we have with Stephen has given us valuable insight on our son that we never would have gotten on our own. Our son will graduate in December. Stephen is now helping him successfully end his college career and coaching him in his professional job search. If your child is in need of some extra help becoming the best they can be - we highly recommend Stephen and his services. We love that he's become such a valuable part of our family as a coach and a friend`,
  },
  {
    name: "L.C. & B.L, CO",
    school: "New Mexico Institute of Mining & Technology",
    quote: `Stephen is an exceptional coach for young adults struggling with executive functioning. When our son went to college, he had trouble with focusing, communicating, and accountability, which resulted in poor grades. If it weren't for Stephen's coaching, our son would never have turned things around in the college environment. Today, our son is thriving in college and is determined to get his degree in Mechanical Engineering. The best advice I can give to parents with children with ADHD and dyslexia is to work with an executive coach early in their academic journey, and Stephen is a great place to start`,
  },
  {
    name: "J.S., CA",
    school: "San Diego State University",
    quote: `Stephen has been coaching our daughter for the last few months in her first semester of college. She has ADHD and needed help in organizing the complexities of a collegiate schedule. He has been amazing! He has given her the tools and confidence to manage her workload, to prioritize assignments without getting overwhelmed, and to work on communication and self-advocacy with her professors. It has taken the stress out of college for our daughter and for us as parents. We are so grateful to Stephen for giving her executive functioning skills that she can access for a lifetime.`,
  },
  {
    name: "G.D., CO",
    school: "Kendall College, Chicago",
    quote: `We brought Stephen into our lives at a particularly rocky point in our son’s educational journey. Emerging from the COVID school years as a dyslexic learner had left him overwhelmed, disorganized, and quietly discouraged about his abilities. School felt like a constant uphill climb, and confidence was in short supply. As parents who had spent years advocating, scaffolding, reminding, and gently (and not so gently) nudging, we were exhausted too—and longing for interactions with our son that didn’t inevitably morph into a well-meaning but unwanted lecture about missing assignments and to-do lists.

Enter Stephen. With his calm, steady presence, genuine empathy, and deep knowledge of executive functioning, he quickly built trust and met our son exactly where he was. His strategies were practical, thoughtful, and—most importantly—actually usable in real life. Over time, our son began to feel more capable and more in control of his learning, and we saw his confidence return along with a sense of himself. Stephen didn’t just help our son develop systems and skills; he helped restore belief in himself, and in the process. For our family, that made all the difference.`,
  },
  {
    name: "M.S., IL",
    school: "Iowa State University",
    quote: `Our son started working with Stephen at the end of the 1st semester of his senior year in high school. He consistently struggled with organization and motivation, starting off strong with good intentions and then getting behind and overwhelmed with missing assignments and poor grades. We tried to offer him our help or tutoring, but nothing worked out. A good friend recommended Stephen, and our son was willing to give it a try. The connection Stephen made with our son was exactly what he needed. Stephen helped him with executive functioning, motivation, and future planning. He passed all his classes and was accepted to college. He decided on Iowa State University, and we were nervous but thrilled he would have Stephen’s help starting his college journey. He exceeded our expectations first semester and continues to thrive both academically and socially, so much that they have reduced their meeting frequency. This would not have been possible without Stephen’s guidance. He creates a safe space for his clients to talk honestly and confidentially. It’s hard for a parent to admit they can’t help their child; we knew what he needed, but he wouldn’t accept our help. Stephen saved our relationship with our son and has helped him find his confidence.`,
  },
];

export default function TestimonialsPage() {
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
    <main className={`testimonials-page page ${loaded ? "page-loaded" : ""}`}>
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
          <a
            href="/testimonials"
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <section className="testimonials-hero">
        <p className="section-kicker">Testimonials</p>

        <h1 className="testimonial-fade">Client stories and family feedback.</h1>

        <p className="testimonial-fade delay-1">
          Real words from families and clients who have worked with Bozeman
          Performance Ventures.
        </p>
      </section>

      <section className="testimonials-list">
        {testimonials.map((item, index) => (
          <article
            className="testimonial-card testimonial-reveal"
            key={`${item.name}-${index}`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="testimonial-meta">
              <h2>{item.name}</h2>
              {item.school && <span>{item.school}</span>}
            </div>

            <p className="testimonial-quote">“{item.quote}”</p>
          </article>
        ))}
      </section>
    </main>
  );
}