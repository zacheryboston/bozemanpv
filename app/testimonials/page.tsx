"use client";
import Link from "next/link";

const testimonials = [
  {
    name: "C. Barhorst, IL",
    school: "Colorado School of Mines",
    quote: `Stephen Bozeman has been coaching my son for the last few years and assisting with executive functioning skills. He is extremely patient and empathetic. He is very committed to helping his clients achieve their goals by guiding them through the steps to make their dreams a reality. He is very personable and relatable, making my son feel at ease and able to open up and communicate. He is determined to find out what motivates a person so that he can help them be successful.

I can highly recommend working with Stephen for executive functioning and life coaching, he has been a Godsend to our family`,
  },
  {
    name: "K. Tepper, TX",
    school: "",
    quote: `Our ten year old son struggled for years in sports with performance anxiety.  We were at a loss on how to address the issue and felt as though we had exhausted all available options. Thank God we were introduced to Stephen. Within weeks of regular meetings with Stephen our son was a different child, anxiety free and excelling on the field with a new sense of confidence.  Stephen’s ability to communicate with athletes is excellent.

We are so grateful and appreciative of the amazing help he has provided our son, who always looks forward to his sessions with Coach Bozeman`,
  },
  {
    name: "W. & D. Benton, TX",
    school: "CU Boulder",
    quote: `Stephen entered our lives in August, 2022 when he worked as a Coach at Collegiate Coaching Services.  Our son was a junior at CU Boulder and was struggling.  He was in great need of help with organization, good study habits, accountability, time management etc.  Stephen has been a true Godsend for our son and us as parents.  He meets with our son regularly and has became a combination of coach, big brother, and friend.  He's older than our son, but young enough to be totally relatable and understanding of the difficulties and needs of a student.  Stephen somehow is always able to phrase things in a professional, positive, encouraging manner that helped him become the student we knew he was capable of becoming.  Not only has Stephen been great for our son, but he's also been a blessing for my husband and I too.  We have regular coach/parent meetings where Stephen keeps us totally informed about our son - his progression and all issues they're working on.  The open communication we have with Stephen has given us valuable insight on our son that we never would have gotten on our own.  Our son will graduate in December.  Stephen is now helping him successfully end his college career and coaching him in his professional job search.  If your child is in need of some extra help becoming the best they can be - we highly recommend Stephen and his services.  We love that he's become such a valuable part of our family as a coach and a friend`,
  },
  {
    name: "L.C. & B.L, CO",
    school: "New Mexico Institute of Mining & Technology",
    quote: `Stephen is an exceptional coach for young adults struggling with executive functioning. When our son went to college, he had trouble with focusing, communicating, and accountability, which resulted in poor grades. If it weren't for Stephen's coaching, our son would never have turned things around in the college environment. Today, our son is thriving in college and is determined to get his degree in Mechanical Engineering.

The best advice I can give to parents with children with ADHD and dyslexia is to work with an executive coach early in their academic journey, and Stephen is a great place to start`,
  },
];

export default function TestimonialsPage() {
  return (
    <main className="testimonials-page">
      <section className="testimonials-hero">
        <Link href="/" className="testimonials-back">
          Back to Home
        </Link>

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
            key={item.name}
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

      <section className="testimonials-cta testimonial-fade delay-2">
        <p className="section-kicker">Contact</p>
        <h2>Ready to start the process?</h2>

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
      </section>
    </main>
  );
}