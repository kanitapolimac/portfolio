import CaseLayout from "../components/CaseLayout";
import { NextCase } from "../components/NextCase";

export default function CaseTelemeet() {
  return (
    <CaseLayout
      caseId="telemeet"
      role="Product Designer"
      footMeta="TeleMeet · 1 year on the project"
      next={
        <NextCase
          to="/case-store-intelligence"
          label="Back to top · 03"
          title={
            <>
              Store Intelligence · <em>AI vision for retail</em>
            </>
          }
        />
      }
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-brand">
          <div className="hero-brand-mark">T</div>
          <div>TeleMeet</div>
        </div>
        <div className="eyebrow">Case Study · 05</div>
        <h1 className="h1">
          An AI meeting platform for industries that{" "}
          <em>can't lose a word</em>.
        </h1>
        <p className="hero-lede">
          I joined TeleMeet mid build and spent a year shaping the AI
          engagement engine, the activity stream, and the coaching surface
          that lives around the call.
        </p>

        <div className="meta">
          <div>
            <div className="meta-key">Role</div>
            <div className="meta-val">
              Product Designer
              <br />
              (mid project, 1 year)
            </div>
          </div>
          <div>
            <div className="meta-key">My focus</div>
            <div className="meta-val">
              <ul>
                <li>AI engagement engine</li>
                <li>Face &amp; voice analysis UI</li>
                <li>Activity &amp; tasks</li>
                <li>Coaching surface</li>
                <li>Productivity features</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="meta-key">Industry</div>
            <div className="meta-val">
              FinTech
              <br />
              Healthcare
              <br />
              Legal &amp; Edu
              <br />
              SaaS
            </div>
          </div>
          <div>
            <div className="meta-key">Tech</div>
            <div className="meta-val">Figma</div>
          </div>
          <div>
            <div className="meta-key">Stage</div>
            <div className="meta-val">In progress when I joined</div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ paddingBlock: 0 }}>
        <figure className="tm-hero-band">
          <img
            src="/cases/assets/tm-hero.jpg"
            alt="TeleMeet hero composition. A participant on the left with an AI face scan frame, in the middle Face expression and transcript analysis showing Engaged / Professional / Distracted bars, a From voice to transcript section, and on the right a Productivity enhancing features list with 21% communication, 34% retention, 28% sales, and 100% data driven suggestions."
          />
        </figure>
      </section>

      {/* CONTEXT */}
      <section>
        <div className="s-head">
          <div className="eyebrow">Coming in mid project</div>
          <h2 className="h2">
            A live product. A roadmap with gaps.{" "}
            <em>One year to ship the parts that mattered.</em>
          </h2>
        </div>
        <div className="two-col prose">
          <div>
            <p>
              TeleMeet was already in motion when I joined. Brand existed,
              design system existed, the call surface was live. What was
              missing was the{" "}
              <strong>
                layer that turns a meeting into a usable record
              </strong>
              , the AI engagement signal, the coaching that comes out of it,
              and the activity stream that ties every action back to a person
              and a moment in time.
            </p>
            <p>
              The product was aimed at finance, healthcare, legal, education
              and government, industries where a missed task is a compliance
              issue, not a follow up email.
            </p>
          </div>
          <div>
            <p>
              My job for the year was to design those layers without breaking
              the file. I picked up where the previous designer left off,
              audited the components I'd inherit, and shipped against a
              working roadmap.
            </p>
            <p>
              Below is the process I ran, and the three feature areas I owned
              end to end inside it.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 01 · My process on the project</div>
          <h2 className="h2">
            Inherit, audit, design, <em>review with the team</em>.
          </h2>
          <p
            className="hero-lede"
            style={{
              marginTop: 16,
              fontStyle: "normal",
              fontFamily: "var(--sans)",
              fontSize: 17,
              color: "var(--case-ink-2)",
              maxWidth: "64ch",
            }}
          >
            A small loop, run weekly. Each feature I owned went through the
            same four steps, because joining mid project meant I couldn't
            afford to start anything from a blank page.
          </p>
        </div>

        <div className="tm-process">
          <div className="tm-step">
            <div className="lab">STEP 01</div>
            <h5>Inherit the file</h5>
            <p>
              Read every existing screen, pull every existing component, and
              write down what could be reused before drawing anything new.
              Two days, every time.
            </p>
          </div>
          <div className="tm-step">
            <div className="lab">STEP 02</div>
            <h5>Audit the gap</h5>
            <p>
              Where the AI feature had no UI yet. Where the activity stream
              had to absorb a new event type. Where a component had to stretch
              to a state nobody had drawn.
            </p>
          </div>
          <div className="tm-step">
            <div className="lab">STEP 03</div>
            <h5>Design in the system</h5>
            <p>
              Always inside the existing tokens, components, and grids first.
              New primitives only when the existing ones broke, with a written
              reason for each.
            </p>
          </div>
          <div className="tm-step">
            <div className="lab">STEP 04</div>
            <h5>Review &amp; ship</h5>
            <p>
              Walk the file with PM, eng and the founder. Capture comments
              inline, redline against the system, hand off with notes
              engineering could quote.
            </p>
          </div>
        </div>

        <div className="tm-pull" style={{ marginTop: "clamp(36px, 5vw, 56px)" }}>
          <p>
            &ldquo;Joining mid project means your first job is to{" "}
            <em>respect what's already there</em>. The fastest way to lose a
            team is to show up and redraw the file.&rdquo;
          </p>
          <div className="by">Kanita · on inheriting TeleMeet</div>
        </div>
      </section>

      {/* FEATURE 1: Activity */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 02 · Feature 01 · Activity &amp; tasks</div>
          <h2 className="h2">
            The call as a <em>working surface</em>, not just a video.
          </h2>
          <p
            className="hero-lede"
            style={{
              marginTop: 16,
              fontStyle: "normal",
              fontFamily: "var(--sans)",
              fontSize: 17,
              color: "var(--case-ink-2)",
              maxWidth: "64ch",
            }}
          >
            I designed the activity sidebar that turns every moment of the
            call into a structured event, pinned, tasked, noted, or flagged.
            The compose UI lets anyone in the call assign work without leaving
            the meeting. Below the call, a participant graph reads who's
            working with who, what they've signed, and what they still owe.
          </p>
        </div>

        <figure className="tm-figure plain">
          <img
            src="/cases/assets/tm-workspace.png"
            alt="TeleMeet workspace. Main meeting video of a participant, picture in picture of two more, a conference pin modal capturing a task with assignee Jenny Oswald and due date 2/26/2021, the Activity sidebar on the right with Pace, Gestures, Task and Pin event cards, and a participant interaction graph below the call showing tasks and signature requests routed between attendees."
          />
          <figcaption className="tm-cap plain">
            <span className="n">01</span> Workspace · call, activity sidebar,
            and the interaction graph below
          </figcaption>
        </figure>
      </section>

      {/* FEATURE 2: Engagement */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 03 · Feature 02 · AI engagement engine</div>
          <h2 className="h2">
            An engagement signal you <em>can act on</em>, not just read.
          </h2>
          <p
            className="hero-lede"
            style={{
              marginTop: 16,
              fontStyle: "normal",
              fontFamily: "var(--sans)",
              fontSize: 17,
              color: "var(--case-ink-2)",
              maxWidth: "64ch",
            }}
          >
            The engine scores each participant on facial engagement and
            overall sentiment, flags concern in real time, and produces a post
            meeting summary. I designed the UI for both the live scoring table
            and the tips panel that follows. The table reads at a glance, two
            emojis tell a manager more than a percentage does, and the tips
            are the bridge into actionable change for the next meeting.
          </p>
        </div>

        <figure
          className="tm-figure plain"
          style={{ maxWidth: "80%", marginInline: "auto" }}
        >
          <img
            src="/cases/assets/tm-engagement.jpg"
            alt="Engagement Score panel showing two participants. Jenny Oswald has Neutral facial engagement, Bad sentiment, and a red concern flag. John Doe has Good engagement, Great sentiment, no concern detected. Below, a Tips panel with two numbered AI suggestions for keeping attention and avoiding Death by PowerPoint."
          />
          <figcaption className="tm-cap plain">
            <span className="n">02</span> Engagement score · per participant
            scoring with AI generated tips
          </figcaption>
        </figure>
      </section>

      {/* FEATURE 3: Coaching */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 04 · Feature 03 · Coaching surface</div>
          <h2 className="h2">
            The coaching that comes out of <em>three months of meetings</em>.
          </h2>
          <p
            className="hero-lede"
            style={{
              marginTop: 16,
              fontStyle: "normal",
              fontFamily: "var(--sans)",
              fontSize: 17,
              color: "var(--case-ink-2)",
              maxWidth: "64ch",
            }}
          >
            The AI accumulates engagement data per user. The coaching surface
            is where that data becomes a behaviour change, a tagged card on
            Pace, Gestures, or Tone, with a clear instruction and a one
            sentence reason. I shipped the card primitive across the live
            activity stream, the post call summary, and a longitudinal
            coaching view. Same shape, three contexts.
          </p>
        </div>

        <figure
          className="tm-figure plain"
          style={{ maxWidth: "80%", marginInline: "auto" }}
        >
          <img
            src="/cases/assets/tm-coaching.png"
            alt="Four coaching cards. Pace, Try talking a little bit slower. Gestures, Improve eye contact. Gestures, Use open body language. Tone, Vary tone for emphasis. Each has a category chip, a clear title, and a one sentence rationale."
          />
          <figcaption className="tm-cap plain">
            <span className="n">03</span> Coaching cards · tagged, sortable,
            directly actionable
          </figcaption>
        </figure>
      </section>

      {/* TAKEAWAYS */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 05 · What I took from it</div>
          <h2 className="h2">
            A year on one product <em>changes how you design</em>.
          </h2>
        </div>
        <div className="pillars">
          <div className="pillar">
            <div className="num">I.</div>
            <h5>Inherit before you design</h5>
            <p>
              Joining mid project, the first deliverable is a clear read of
              what's already there. I now treat the audit as the first sprint
              on any new engagement.
            </p>
          </div>
          <div className="pillar">
            <div className="num">II.</div>
            <h5>AI lives around the call</h5>
            <p>
              The high value AI surfaces sit beside the call, scoring,
              summary, coaching, not inside it. The live frame stays light.
            </p>
          </div>
          <div className="pillar">
            <div className="num">III.</div>
            <h5>A primitive across contexts</h5>
            <p>
              The coaching card primitive shipped in three places. Same shape,
              different reading levels. The system carried the load.
            </p>
          </div>
          <div className="pillar">
            <div className="num">IV.</div>
            <h5>Compliance is a layout</h5>
            <p>
              For data sensitive industries, audit and consent had to be
              visible at the point of action, not on a settings page. That
              shaped every event card.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ paddingTop: 0 }}>
        <div className="metric-strip">
          <div className="metric">
            <div className="num">
              <span className="acc">+21%</span>
            </div>
            <div className="lab">Internal communication lift</div>
          </div>
          <div className="metric">
            <div className="num">
              <span className="acc">+34%</span>
            </div>
            <div className="lab">Client retention</div>
          </div>
          <div className="metric">
            <div className="num">
              <span className="acc">+28%</span>
            </div>
            <div className="lab">Sales success</div>
          </div>
        </div>
      </section>
    </CaseLayout>
  );
}
