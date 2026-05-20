import CaseLayout from "../components/CaseLayout";
import { NextCase } from "../components/NextCase";

export default function CaseCarea() {
  return (
    <CaseLayout
      caseId="carea"
      footMeta="Carea · 2026"
      next={
        <NextCase
          to="/case-airdomo"
          label="Next case · 04"
          title={
            <>
              Real Estate Platform · <em>AI native PropTech</em>
            </>
          }
        />
      }
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-brand">
          <div className="hero-brand-mark">C</div>
          <div>Carea</div>
        </div>
        <div className="eyebrow">Case Study · 02</div>
        <h1 className="h1">
          Designing for women in the <em>hardest moments</em> of their lives.
        </h1>
        <p className="hero-lede">
          Carea supports women through fertility, pregnancy, postpartum and
          loss. This case is less about the product and more about{" "}
          <strong>how I worked</strong>, and the design choices behind a
          surface that has to feel calm before it can be useful.
        </p>

        <div className="meta">
          <div>
            <div className="meta-key">My role</div>
            <div className="meta-val">
              Product Designer
              <br />
              End to end
            </div>
          </div>
          <div>
            <div className="meta-key">What I owned</div>
            <div className="meta-val">
              <ul>
                <li>Product strategy</li>
                <li>UX / UI</li>
                <li>Design system &amp; voice</li>
                <li>Animation</li>
                <li>Deployment</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="meta-key">Industry</div>
            <div className="meta-val">
              Femtech
              <br />
              Maternal health
            </div>
          </div>
          <div>
            <div className="meta-key">Tech</div>
            <div className="meta-val">
              Figma
              <br />
              AI assisted build
            </div>
          </div>
          <div>
            <div className="meta-key">Users</div>
            <div className="meta-val">
              Women at the most vulnerable moments of their lives
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ paddingBlock: 0 }}>
        <figure className="ca-figure plain">
          <img
            src="/cases/assets/ca-hero.png"
            alt="Carea hero composition. A phone showing the home screen for week 3 trimester 1, alongside a portrait of a woman half hidden behind a tropical leaf."
          />
        </figure>
      </section>

      {/* STATEMENT */}
      <section style={{ paddingTop: 0 }}>
        <div className="ca-statement">
          <p>
            &ldquo;Women using this app are vulnerable. Every design decision
            had to make the room a little quieter.&rdquo;
          </p>
        </div>
      </section>

      {/* BRIEF */}
      <section>
        <div className="s-head">
          <div className="eyebrow">The brief I set myself</div>
          <h2 className="h2">
            Build something a woman can open <em>on her worst day</em> and
            feel held by.
          </h2>
        </div>
        <div className="two-col prose">
          <div>
            <p>
              The women using Carea are not in marketing personas. They are
              trying to conceive after a third round of IVF. They are bleeding
              lightly at fourteen weeks and don't know what it means. They
              are six weeks postpartum and have slept twelve hours in five
              days. They have just lost a pregnancy.
            </p>
            <p>
              Any one of those women can open the app at three in the morning.
              So my brief became simple, even if the execution wasn't,{" "}
              <strong>
                nothing on screen should add to what she's carrying
              </strong>
              .
            </p>
          </div>
          <div>
            <p>
              That's the lens every design choice ran through. Type weight,
              motion timing, copy register, the colour of a button, where a
              tab sits, what happens when she taps the wrong thing.
            </p>
            <p>
              The screens below are the visible part. The principles after are
              the work behind them.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section>
        <div className="s-head">
          <div className="eyebrow">
            § 01 · The calm-by-design principles I worked to
          </div>
          <h2 className="h2">
            A product that <em>respects the room</em> it walks into.
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
            Four principles I committed to in the first week and held to in
            every component I drew after. None of them are visible on their
            own, all of them are visible together.
          </p>
        </div>

        <div className="ca-principles">
          <div className="ca-principle">
            <div className="num">PRINCIPLE 01</div>
            <h5>Soft type, slow motion</h5>
            <p>
              A serif display set in light weights, generous line height, and
              a 200&#8209;300 ms motion baseline. Nothing snaps, nothing
              flashes, nothing earns attention it didn't ask for.
            </p>
          </div>
          <div className="ca-principle">
            <div className="num">PRINCIPLE 02</div>
            <h5>Quiet colour, low contrast</h5>
            <p>
              A muted sage palette, a warm cream as base, deep green for
              emphasis. No reds, no urgency yellows. Status reads through
              shape and copy, not chromatic alarm.
            </p>
          </div>
          <div className="ca-principle">
            <div className="num">PRINCIPLE 03</div>
            <h5>Generous space, fewer choices</h5>
            <p>
              One primary action per screen. No streaks, no badges, no nag
              patterns. Empty space is part of the design, the screen breathes
              the way she's trying to.
            </p>
          </div>
          <div className="ca-principle">
            <div className="num">PRINCIPLE 04</div>
            <h5>Copy that doesn't perform</h5>
            <p>
              Plainspoken, written at a sixth grade reading level, no
              "should", no emoji, no false brightness. The Healing After Loss
              screen never says &ldquo;keep going&rdquo;.
            </p>
          </div>
        </div>
      </section>

      {/* SCREENS */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 02 · Four chapters, one calm surface</div>
          <h2 className="h2">
            The principles, <em>made visible</em>.
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
            The whole product reshapes around the chapter she's in. Same
            components, different density, different language, different
            weight.
          </p>
        </div>

        <div className="ca-screens">
          <div className="ca-screen">
            <div className="ph">
              <img
                src="/cases/assets/ca-pregnancy.png"
                alt="Carea pregnancy home, Hi Amazing You, week 3 trimester 1 hero, baby size card, and weekly trimester update articles. White background, soft sage cards."
              />
            </div>
            <div className="num">01 · PREGNANCY</div>
            <h5>Track every trimester</h5>
            <p>
              Personalised insights about her body and the baby, week by
              week.
            </p>
          </div>
          <div className="ca-screen">
            <div className="ph">
              <img
                src="/cases/assets/ca-postpartum.png"
                alt="Bumpkin tracker dashboard, last 7 days, sleep duration 9h 42min and 4 naps a day, feeding distribution. White background."
              />
            </div>
            <div className="num">02 · POSTPARTUM</div>
            <h5>Recovery, gently tracked</h5>
            <p>
              Sleep, feeding, changing, growth, and mental health check-ins
              for both baby and mum.
            </p>
          </div>
          <div className="ca-screen">
            <div className="ph">
              <img
                src="/cases/assets/ca-iui.png"
                alt="Carea fertility view, Today April 2, week strip, Cycle Overview, My Medication Journey 5%, two medications today. White background."
              />
            </div>
            <div className="num">03 · IVF / IUI</div>
            <h5>Through every step of treatment</h5>
            <p>
              Cycle overview, medication journey, and the calendar that holds
              it all without panic.
            </p>
          </div>
          <div className="ca-screen">
            <div className="ph">
              <img
                src="/cases/assets/ca-loss.png"
                alt="Healing After Loss mode, We're so deeply sorry for your loss headline, illustration of two women embracing, supportive copy and the Enter Healing After Loss Mode button. White background."
              />
            </div>
            <div className="num">04 · HEALING AFTER LOSS</div>
            <h5>A compassionate space</h5>
            <p>
              The whole interface slows down. Bigger type, softer language,
              one option at a time.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS PHASES */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 03 · How I worked</div>
          <h2 className="h2">
            Manual first. <em>Then AI accelerated.</em>
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
            I built the foundation by hand so the calm aesthetic stayed mine.
            Once it was solid, I brought AI in to speed up the parts that
            don't need a human touch.
          </p>
        </div>

        <div className="ca-process">
          <div className="ca-phase">
            <div className="lab">PHASE 01 · MANUAL</div>
            <h4>
              Every component, every word, <em>by hand.</em>
            </h4>
            <p>
              I started with the four chapters, hand drew the IA, built the
              design system from the ground up, and reviewed every screen
              against the calm-by-design principles before moving on. Type,
              colour, components, motion, voice, all set before a line of
              production code was written.
            </p>
          </div>
          <div className="ca-phase accent">
            <div className="lab">PHASE 02 · AI ACCELERATED</div>
            <h4>
              Speed on top of the system, <em>not in place of it.</em>
            </h4>
            <p>
              Once the foundation was solid, I used AI to iterate on the UX,
              generate animations, tweak copy at scale, scaffold production
              code, and ship the deployment. The system stayed mine. The speed
              multiplied.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ paddingTop: 0 }}>
        <div className="ca-close">
          <div className="lab">What women say</div>
          <p>
            Women using Carea say they feel <em>calmer</em> since I've been
            working on it.
          </p>
        </div>
      </section>
    </CaseLayout>
  );
}
