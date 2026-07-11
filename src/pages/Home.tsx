import { useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CaseCard from "../components/CaseCard";
import HeroPhoenix from "../components/HeroPhoenix";
import HeroCursor from "../components/HeroCursor";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  useReveal();
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      <Nav />

      {/* HERO */}
      <header className="home-hero" id="top" ref={heroRef}>
        <div className="ambient" />
        <HeroPhoenix />
        <div className="wrap hero-grid">
          <div className="hero-eyebrow">
            <span className="available-pill">
              <span className="pulse" />
              Available · Senior &amp; lead roles
            </span>
            <span className="eyebrow">
              Senior Product Designer · AI &amp; Data driven SaaS
            </span>
          </div>

          <div className="hero-headline reveal">
            <h1 className="hero-h1-stacked">
              <span className="h1-line">Hello, my name is</span>
              <span className="h1-rule" aria-hidden="true" />
              <span className="h1-line">
                Kanita Pol<em>i</em>mac.
              </span>
            </h1>
          </div>

          <p className="hero-tagline reveal">
            I design products that don't just look good, they solve hard
            problems at scale.
          </p>

          <div className="hero-stats reveal">
            <div className="stat">
              <div className="stat-num">
                <span className="acc">8+</span> yrs
              </div>
              <div className="stat-label">
                Designing AI &amp; data driven SaaS
              </div>
            </div>
            <div className="stat">
              <div className="stat-num">06</div>
              <div className="stat-label">Industries shipped in</div>
            </div>
            <div className="stat">
              <div className="stat-num">MSc</div>
              <div className="stat-label">IT, AI · Data · Cybersecurity</div>
            </div>
            <div className="stat">
              <div className="stat-num">E2E</div>
              <div className="stat-label">
                Built &amp; shipped AI platforms end to end
              </div>
            </div>
          </div>
        </div>
        <HeroCursor hostRef={heroRef} />
      </header>

      {/* SELECTED WORK */}
      <section id="work" className="rule-top">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">§ 01 · Selected Work</div>
            <div>
              <p className="lede">
                Five projects across healthcare AI, PropTech, retail
                intelligence, and skin diagnostics. Each picked to show a
                different muscle, research, systems, AI fluency, leadership,
                and shipping.
              </p>
              <h2>
                Work that
                <br />
                moved a&nbsp;number.
              </h2>
            </div>
          </div>

          <div className="work-grid">
            <CaseCard
              to="/case-telemeet"
              variant="tall"
              num="01"
              title="TeleMeet, AI meeting platform"
              problem="A year on an AI enhanced video conferencing platform for finance, healthcare, legal and education. I owned the engagement engine, the activity stream, and the coaching surface."
              tags={["FinTech · Healthcare", "AI Engagement", "Compliance"]}
              metric={{
                num: "+34%",
                lab: "Client retention. Plus 21% lift in internal communication and 28% sales success.",
              }}
              frameStyle={{ background: "#0B1430" }}
              img={{
                src: "/cases/assets/tm-hero.jpg",
                alt: "TeleMeet hero composition. Face expression and transcript analysis on a deep navy background with a participant on the left, engagement scoring in the middle, and productivity enhancing features listed on the right.",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "left center",
                  display: "block",
                },
              }}
            />

            <CaseCard
              to="/case-carea"
              variant="tall"
              num="02"
              title="Carea, maternal mental health"
              problem="Supporting her through fertility, pregnancy, postpartum and loss. End to end product design across four journeys, hand built first, then AI accelerated."
              tags={["Femtech", "End to end", "AI accelerated"]}
              metric={{
                num: "4",
                lab: "Distinct journeys in one app, pregnancy, postpartum, IVF / IUI, and healing after loss.",
              }}
              frameStyle={{ background: "#F4F0E6" }}
              img={{
                src: "/cases/assets/ca-thumb.jpg",
                alt: "Carea hero, a phone showing the home screen with weekly pregnancy updates next to a portrait of a woman behind a tropical leaf.",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                },
              }}
            />

            <CaseCard
              to="/case-store-intelligence"
              variant="wide-feature"
              num="03"
              title="Store Intelligence, AI vision for retail"
              problem="A leading AI vision product for enterprise retail. Translates store floor reality into operator decisions that ladder up to revenue. Two surfaces (tablet on the aisle, web in the back office) on one data model."
              tags={[
                "Retail AI",
                "Computer Vision",
                "Design System",
                "Enterprise",
              ]}
              metric={{
                num: "+5%",
                lab: "More sales for retailers using the redesigned surface. Plus 11% on shelf availability and 23% planogram compliance.",
              }}
              link="Read full case study"
              img={{
                src: "/cases/assets/si-thumb.png",
                alt: "Store Intelligence in context, a tablet showing POG compliance and on-shelf availability against a grocery aisle.",
              }}
            />

            <CaseCard
              to="/case-airdomo"
              variant="half"
              num="04"
              title="Real Estate Platform · AI native PropTech"
              problem="A luxury real estate platform. Marketing site, an eleven step listing flow, a twelve state search system, plus an entire partner platform I shipped solo with Claude in three days."
              tags={["PropTech", "Generative UI", "3 day solo build"]}
              metric={{
                num: "43%",
                lab: "Less time on core operator workflows. Plus the partner platform shipped solo in 3 days.",
              }}
              img={{
                src: "/cases/assets/ad-thumb.png",
                alt: "Real estate platform homepage, a luxury house with the headline Discover and Own Your Perfect Destination Home and a centered search bar",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                },
              }}
            />

            <CaseCard
              to="/case-system-akvile"
              variant="half"
              num="05"
              title="System Akvile, AI skin for teens"
              problem="AI skin and mental health for teens. I redesigned the onboarding, gamified the return trip, and rebuilt the payment system. The whole product got stickier."
              tags={["AI Health", "Gamification", "Teens"]}
              metric={{
                num: "+12%",
                lab: "Subscription conversion against the previous paywall. Plus a gamified daily scan ritual.",
              }}
              frameStyle={{
                background:
                  "linear-gradient(180deg, #FFF1E8 0%, #FFE2CE 100%)",
              }}
              img={{
                src: "/cases/assets/ak-thumb.jpg",
                alt: "Three System Akvile phones side by side, face scan scores, daily face scan home, and monthly skin progress.",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                },
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="rule-top">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">§ 02 · About</div>
            <div>
              <h2>Strategic, technical, allergic to fluff.</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="portrait-slot reveal">
              <image-slot
                id="kanita-portrait"
                placeholder="Drop portrait of Kanita"
                shape="rect"
                radius="2"
                src="/cases/assets/kanita-portrait.png"
              />
            </div>
            <div className="about-prose reveal">
              <h3>
                I don't just design interfaces, I design the systems behind
                them, from information architecture to design tokens to
                handoff pipelines.
              </h3>
              <p>
                I spend two to three hours every day studying AI and design,
                not as a side hobby, but because it directly shapes how I
                approach product strategy, workflow automation, and where the
                model belongs inside the UX.
              </p>
              <p>
                My MSc in Management of Information Technologies (focus on AI,
                advanced data, and cybersecurity) means I speak the language
                of <strong>engineers, product managers, and C&#8209;suite
                stakeholders</strong> in the same meeting, and I've automated
                significant parts of my own design workflow with AI, cutting
                production time while raising quality.
              </p>
              <p>
                Before all of that I was the CEO of an EU&#8209;incubated
                startup. I've led, not just contributed.
              </p>
              <span className="edu-badge">
                <span className="marker" />
                MSc · IT, AI · Data · Cybersecurity
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process rule-top">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">§ 03 · Process</div>
            <div>
              <p className="lede">
                A loop, not a waterfall. Each step feeds the next, and every
                project moves through every one.
              </p>
              <h2>
                How the work <em>actually</em> gets made.
              </h2>
            </div>
          </div>

          <div className="process-flow reveal">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-glyph">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.5 16.5L21 21" />
                  <path d="M8 11h6M8 8.5h6M8 13.5h4" />
                </svg>
              </div>
              <h5>Research and psychology</h5>
              <p>
                I start with the people, not the brief. Interviews, behavioral
                mapping, cognitive load and motivation models. Why someone
                does the thing is the design.
              </p>
              <div className="tools">Interviews · IA · Heuristics</div>
            </div>

            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-glyph">
                <svg viewBox="0 0 24 24">
                  <path d="M3 18h12l4-4V4H3v14z" />
                  <path d="M15 14h4" />
                  <path d="M7 9h8M7 12h6" />
                </svg>
              </div>
              <h5>Systems and sense check</h5>
              <p>
                Mapping mature ecosystems before drawing the screen. The
                interface is downstream. I draw the system first, on paper or
                on a whiteboard, then go to pixels.
              </p>
              <div className="tools">FigJam · Whiteboard · Pen</div>
            </div>

            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-glyph">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M4 9h16M9 3v18" />
                </svg>
              </div>
              <h5>Design in Figma</h5>
              <p>
                High fidelity, fully composed. Design tokens, components, AI
                states, accessibility checked from the first frame. Motion
                specced in the file, not added later.
              </p>
              <div className="tools">Figma · Tokens · WCAG AA+</div>
            </div>

            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-glyph">
                <svg viewBox="0 0 24 24">
                  <path d="M6 4h12v16H6z" />
                  <path d="M9 9h6M9 12h6M9 15h4" />
                  <path d="M3 7l3 2-3 2" />
                </svg>
              </div>
              <h5>Build with Claude</h5>
              <p>
                I work with Claude as a build partner. Prototypes, internal
                tools, even whole platforms. I shipped a real estate partner
                platform end to end in three days. Application form, Zoho CRM
                integration, approval emails, partner site builder.
              </p>
              <div className="tools">Claude · React · Next.js</div>
            </div>

            <div className="process-step">
              <div className="step-num">05</div>
              <div className="step-glyph">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l9 16H3z" />
                  <circle cx="12" cy="13" r="2" />
                </svg>
              </div>
              <h5>Ship via Vercel</h5>
              <p>
                From repo to live URL in minutes. Connected to a custom
                domain, edge cached, instrumented. This site was built in
                Claude and deployed the same day to Vercel under its own
                domain.
              </p>
              <div className="tools">Vercel · GitHub · Domains</div>
            </div>
          </div>

          <div className="process-receipt">
            <h4>
              This portfolio is a worked example of the process.{" "}
              <em>Built in Claude, deployed via Vercel.</em>
            </h4>
            <div className="body">
              <p>
                The site you're reading was designed and built inside Claude
                across a working session. Editorial layout, motion, the case
                studies, the tweaks panel, the print stylesheet. Shipped to a
                custom domain through Vercel the same afternoon.
              </p>
              <p>
                The point isn't speed. It's that{" "}
                <strong>
                  design thinking, system design, and code now live close
                  enough together for one designer to own the loop end to end.
                </strong>{" "}
                Figma stays the source of truth for visual systems. Claude
                takes care of the parts that used to need a small engineering
                team.
              </p>
              <div className="stack">
                {["Figma", "Claude", "React", "Next.js", "Vercel", "GitHub", "Linear", "Notion"].map(
                  (n) => (
                    <span key={n} className="chip">
                      <span className="dot" />
                      {n}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="rule-top">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">§ 04 · Experience</div>
            <div>
              <h2>
                Eight years.
                <br />
                Six industries.
              </h2>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-rail">
              <b>
                2019, <span className="now">Now</span>
              </b>
              Permanent + Contract
              <br />
              Remote · EU · US
            </div>

            <div className="timeline-list">
              <div className="role reveal">
                <div className="role-when">
                  Feb 2026 to Present
                  <span className="loc">London · Remote · Contract</span>
                </div>
                <div className="role-body">
                  <h4>Carea App</h4>
                  <div className="who">Product Designer</div>
                  <p>
                    Designing an AI supported maternal mental‑health product
                    across 40 plus weeks of pregnancy and postpartum, with
                    adaptive check‑ins that escalate to human support when
                    risk markers appear.
                  </p>
                  <span className="badge-acc">Currently shipping</span>
                </div>
              </div>

              <div className="role reveal">
                <div className="role-when">
                  Apr 2026 to May 2026<span className="loc">San Diego · Contract</span>
                </div>
                <div className="role-body">
                  <h4>Real Estate Platform</h4>
                  <div className="who">Product AI Engineer</div>
                  <p>
                    Transitioned from PD to a Product AI Engineer role, prompt
                    design, model behavior in the UI, and the
                    design‑engineering boundary that AI products live on.
                  </p>
                </div>
              </div>

              <div className="role reveal">
                <div className="role-when">
                  Sep 2025 to Apr 2026<span className="loc">San Diego · Full time</span>
                </div>
                <div className="role-body">
                  <h4>Real Estate Platform</h4>
                  <div className="who">Product Designer</div>
                  <p>
                    Lead product designer for an AI native PropTech platform,
                    chat‑plus‑structured‑data hybrid UI, AI‑state component
                    system, and the public marketing surface.
                  </p>
                </div>
              </div>

              <div className="role reveal">
                <div className="role-when">
                  Jan 2024 to Jul 2025<span className="loc">Chicago · Full time</span>
                </div>
                <div className="role-body">
                  <h4>Motiff, Intuitive Digital Solutions</h4>
                  <div className="who">Product Designer · SymphonyAI retail</div>
                  <p>
                    Working on SymphonyAI's retail AI ecosystem, Store
                    Intelligence dashboards, computer vision driven
                    merchandising, and a retail AI design system used across
                    the suite.
                  </p>
                </div>
              </div>

              <div className="role reveal">
                <div className="role-when">
                  Dec 2022 to Jan 2024
                  <span className="loc">Hamburg · Remote · Full time</span>
                </div>
                <div className="role-body">
                  <h4>System Akvile</h4>
                  <div className="who">Product Designer</div>
                  <p>
                    End to end UX/UI for an AI skin‑tracking app, generative
                    AI integration in the diagnostic flow, longitudinal
                    tracking model, and a clinical‑adjacent UI system in
                    Figma.
                  </p>
                </div>
              </div>

              <div className="role reveal">
                <div className="role-when">
                  Mar 2021 to Dec 2022<span className="loc">CEO</span>
                </div>
                <div className="role-body">
                  <h4>Galora Media</h4>
                  <div className="who">CEO &amp; Product Designer</div>
                  <p>
                    Led the company end to end, client work across
                    construction, freight, finance, healthcare, skincare, and
                    sports. Won the German‑incubator‑run entrepreneurial
                    competition in Bosnia and Herzegovina.
                  </p>
                  <span className="badge-acc">Founder · Award winner</span>
                </div>
              </div>

              <div className="role reveal">
                <div className="role-when">
                  Oct 2020 to Jun 2022
                  <span className="loc">Switzerland · Remote · Contract</span>
                </div>
                <div className="role-body">
                  <h4>digital BIM academy</h4>
                  <div className="who">Product Designer &amp; Team Lead</div>
                  <p>
                    Led product design for a BIM education platform, IA,
                    curriculum UX, and a small distributed design team.
                  </p>
                </div>
              </div>

              <div className="role reveal">
                <div className="role-when">
                  Jun 2019 to Mar 2021<span className="loc">Zagreb · Full time</span>
                </div>
                <div className="role-body">
                  <h4>FOREO</h4>
                  <div className="who">Product Designer</div>
                  <p>
                    Product design across one of the largest global skincare
                    brands, D2C web, connected device companion experiences,
                    and routine builder commerce flows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI EXPERTISE */}
      <section id="ai" className="ai">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow no-rule">
              <span
                style={{
                  display: "inline-block",
                  width: 24,
                  height: 1,
                  background: "var(--accent)",
                  marginRight: 10,
                  opacity: 0.7,
                }}
              />
              § 05 · AI Expertise
            </div>
            <div />
          </div>

          <h2 className="ai-essay reveal">
            AI isn't a tool I added.
            <br />
            It's a <em>layer I design with</em>.
          </h2>

          <div className="ai-grid">
            <div className="ai-prose reveal">
              <p>
                Across four shipped products I've worked with AI either{" "}
                <em>inside the product</em> or <em>inside the process</em>,
                and often both, <strong>Store Intelligence</strong> (computer
                vision in the product, AI in the team's daily work),{" "}
                <strong>System Akvile</strong> (active skin scanning,
                prediction, treatment planning), <strong>the platform</strong>{" "}
                (designed with AI, and one whole platform shipped end to end
                through Claude), and <strong>Carea</strong> (designed with AI
                throughout the process).
              </p>
              <p>
                That means treating AI states as first class UI primitives,
                confidence, source citation, hallucination flags, intent aware
                model routing, and writing prompt scaffolds with the same
                craft as a component spec.
              </p>
              <p>
                It also means <strong>knowing when not to use it.</strong>{" "}
                Cost, latency, trust, and clinical risk all get a vote in the
                model selection conversation, and the UX is where those
                tradeoffs become visible.
              </p>
            </div>

            <div className="ai-products">
              <div className="ai-product">
                <div className="ind">Healthcare · 2026</div>
                <h5>Carea</h5>
                <p>
                  A maternal mental health app I designed end to end with the
                  help of AI. The product itself doesn't run AI in app, but
                  the entire design process was AI assisted.
                </p>
              </div>
              <div className="ai-product">
                <div className="ind">PropTech · 2025 to 2026</div>
                <h5>Real Estate Platform</h5>
                <p>
                  Designed with AI, and an entire partner platform inside it
                  was shipped end to end through Claude. From Figma to live
                  URL.
                </p>
              </div>
              <div className="ai-product">
                <div className="ind">Retail AI · 2024 to 2025</div>
                <h5>Store Intelligence</h5>
                <p>
                  The product itself actively uses AI, computer vision for
                  shelf reality, plus the team uses AI inside its own daily
                  work.
                </p>
              </div>
              <div className="ai-product">
                <div className="ind">AI Health · 2022 to 2024</div>
                <h5>System Akvile</h5>
                <p>
                  Actively uses AI for skin scanning, prediction, and the
                  creation of a personalised plan for acne management.
                </p>
              </div>
            </div>
          </div>

          <div className="ai-practice">
            <div>
              <div className="practice-num">
                2, 3
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: ".35em",
                    color: "var(--ink-3)",
                    marginLeft: 6,
                    verticalAlign: "middle",
                  }}
                >
                  hrs / day
                </span>
              </div>
              <div className="practice-lab">Daily AI &amp; design study</div>
            </div>
            <div className="practice-body reveal">
              Every working day starts with two to three hours of focused AI
              study, model releases, eval methodology, applied papers, the
              design vocabulary forming around generative UI. It's the
              practice that lets me argue model choice in a roadmap meeting
              and ship the UX that proves the argument.
            </div>
            <div className="practice-body reveal">
              I've automated significant chunks of my own design workflow with
              AI, research synthesis, component scaffolding, prompt‑driven
              prototyping, to compress production time while raising the
              floor on quality. The output is fewer hours per artifact, more
              hours per decision.
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section id="recognition" className="rule-top">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">§ 06 · Recognition</div>
            <div>
              <h2>Built &amp; led, not just contributed.</h2>
            </div>
          </div>

          <div className="award">
            <h3 className="reveal">
              Galora Media won the{" "}
              <em>German‑incubator‑run entrepreneurial competition</em> in
              Bosnia and Herzegovina.
            </h3>
            <div className="award-meta reveal">
              <p>
                As CEO and lead designer, I built and ran the studio across
                client work in construction, freight, finance, healthcare,
                skincare, and sports, and the work was selected by the
                program's jury as the standout cohort entry.
              </p>
              <p>Press &amp; partner coverage:</p>
            </div>
          </div>

          <div className="press">
            <div className="press-item reveal">
              <div className="name">Balkan Innovation</div>
              <div className="desc">Cohort feature</div>
            </div>
            <div className="press-item reveal">
              <div className="name">EU Delegation BiH</div>
              <div className="desc">Program partner</div>
            </div>
            <div className="press-item reveal">
              <div className="name">CEFE BiH</div>
              <div className="desc">Incubator partner</div>
            </div>
            <div className="press-item reveal">
              <div className="name">LEP</div>
              <div className="desc">Program partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            § 07 · Contact
          </div>
          <h2 className="reveal">
            Let's <em>build</em>
            <br />
            something that
            <br />
            moves a number.
          </h2>

          <div className="contact-grid">
            <a
              href="mailto:kanita.polimac@gmail.com"
              className="contact-item reveal"
            >
              <div className="label">Email</div>
              <div className="val">
                kanita.polimac@gmail.com
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M3 11l8-8M5 3h6v6" />
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kanitapolimac"
              target="_blank"
              rel="noopener"
              className="contact-item reveal"
            >
              <div className="label">LinkedIn</div>
              <div className="val">
                linkedin.com/in/kanitapolimac
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M3 11l8-8M5 3h6v6" />
                </svg>
              </div>
            </a>
          </div>

          <div className="contact-cta reveal">
            <a
              className="btn btn-primary"
              href="mailto:kanita.polimac@gmail.com?subject=Free%20consultation"
            >
              Book a free consultation
              <svg
                className="arr"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M3 7h8M8 3l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="wrap">
          <Footer />
        </div>
      </section>
    </>
  );
}
