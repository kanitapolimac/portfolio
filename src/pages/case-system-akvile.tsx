import CaseLayout from "../components/CaseLayout";
import { NextCase } from "../components/NextCase";

export default function CaseSystemAkvile() {
  return (
    <CaseLayout
      caseId="system-akvile"
      footMeta="System Akvile · 2022 to 2024"
      next={
        <NextCase
          to="/case-telemeet"
          label="Next case · 05"
          title={
            <>
              TeleMeet · <em>AI meeting platform</em>
            </>
          }
        />
      }
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-brand">
          <div className="hero-brand-mark">A</div>
          <div>System Akvile</div>
        </div>
        <div className="eyebrow">Case Study · 04</div>
        <h1 className="h1">
          Taking an AI skin app for teens and{" "}
          <em>making it sticky</em>.
        </h1>
        <p className="hero-lede">
          System Akvile is an AI&#8209;powered skin and mental health app. It
          collects user data, builds a personalised plan for diet, skincare
          and a holistic wellbeing routine, and runs a skin scanner that
          tracks her weak and strong points over time. I joined to make the
          product feel like the teen apps her friends use.
        </p>

        <div className="meta">
          <div>
            <div className="meta-key">Role</div>
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
                <li>Onboarding redesign</li>
                <li>Gamification system</li>
                <li>Payment &amp; subscription</li>
                <li>UX / UI</li>
                <li>UX writing</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="meta-key">Audience</div>
            <div className="meta-val">
              Teens
              <br />
              Acne, skin &amp; mood
            </div>
          </div>
          <div>
            <div className="meta-key">Tech</div>
            <div className="meta-val">
              Figma
              <br />
              iOS &amp; Android
            </div>
          </div>
          <div>
            <div className="meta-key">Tenure</div>
            <div className="meta-val">Dec 2022 to Jan 2024</div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ paddingBlock: 0 }}>
        <figure className="ak-figure peach">
          <img
            src="/cases/assets/ak-hero.png"
            alt="Three System Akvile phones side by side. Left, your progress page with face scan scores. Middle, today's home with face scan card and daily tasks. Right, monthly progress with insights and skin feeling charts."
          />
        </figure>
      </section>

      {/* STATEMENT */}
      <section style={{ paddingTop: 0 }}>
        <div className="ak-statement">
          <p>
            &ldquo;Built for teenagers, so colour, motion, and rewards are
            part of the medicine, not just decoration.&rdquo;
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="s-head">
          <div className="eyebrow">What I joined into</div>
          <h2 className="h2">
            A working app, with the <em>retention problem</em> every teen
            product has.
          </h2>
        </div>
        <div className="two-col prose">
          <div>
            <p>
              When I came in, System Akvile already had the engine, an AI skin
              scanner that read your face, a recommendation system that
              paired you with products, and a personalised plan for skincare,
              diet and mental health. The product worked. Teens just didn't
              come back for the second week.
            </p>
            <p>That was the thing to fix. Not the AI, the experience around it.</p>
          </div>
          <div>
            <p>
              I owned three areas across my fourteen months on the project,
              the onboarding (where most users dropped off), the gamification
              (where I gave them a reason to scan every day), and the payment
              system (where the business met the user).
            </p>
            <p>
              By the time I left, the long onboarding was something teens
              actually finished, scanning was a daily ritual, and subscription
              conversion was twelve percent higher than what I inherited.
            </p>
          </div>
        </div>

        <div className="ak-mine">
          <div className="col">
            <div className="lab">CONTRIBUTION 01</div>
            <h5>Onboarding, redesigned</h5>
            <p>
              Researched dating app onboarding (especially Hinge) and rebuilt
              Akvile's long data collection flow as something fun and
              interactive.
            </p>
          </div>
          <div className="col">
            <div className="lab">CONTRIBUTION 02</div>
            <h5>Gamification system</h5>
            <p>
              Daily scan rewards, real product discounts, badges, and benefits
              that pulled users back into the app the next morning.
            </p>
          </div>
          <div className="col">
            <div className="lab">CONTRIBUTION 03</div>
            <h5>Payment, rethought</h5>
            <p>
              Re&#8209;sequenced the paywall, rewrote the plan UI, and shipped
              a checkout that fits inside a teen's attention span.
            </p>
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 01 · Onboarding, redesigned</div>
          <h2 className="h2">
            A long data&#8209;collection flow that <em>feels like a quiz</em>,
            not a survey.
          </h2>
        </div>

        <div className="ak-feature">
          <div className="body">
            <span className="tag">RESEARCH SOURCE · HINGE</span>
            <h3>
              I studied Hinge's onboarding, <em>long, but people finish it</em>.
            </h3>
            <p>
              Akvile's clinical value depends on data, body type, sleep,
              hormones, mood patterns, skincare history. The old onboarding
              asked all of it as a survey, and most users bailed by question
              six.
            </p>
            <p>
              I researched dating app onboarding, especially Hinge, which asks
              more of its users than almost any consumer product, and still
              keeps them through the whole flow. The pattern was clear:{" "}
              <strong>
                one question per screen, motion between every step, prompts
                that feel personal, and a sense of self&#8209;reveal
              </strong>{" "}
              as you go.
            </p>
            <p>
              I applied the same principles to Akvile's long onboarding. Same
              questions asked. Different relationship with the user.
            </p>
            <ul>
              <li>One question per screen, paced like a card stack</li>
              <li>Motion between every step</li>
              <li>Prompt copy rewritten in a teen register</li>
              <li>Progress bar reframed as a reveal, not a chore</li>
            </ul>
          </div>
          <div className="phone-frame">
            <img
              src="/cases/assets/ak-routine.png"
              alt="System Akvile Daily Routines screen. Scan your skincare products with three numbered steps for Cleanser, Moisturizer, and Treatment. A 10% progress card encourages adding the first scan. Today's Plan list and a Skin School card sit below."
            />
          </div>
        </div>
      </section>

      {/* GAMIFICATION */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 02 · Gamification</div>
          <h2 className="h2">
            A reason to <em>scan again tomorrow</em>.
          </h2>
        </div>

        <div className="ak-feature flip">
          <div className="body">
            <span className="tag">SYSTEM · REWARDS &amp; STREAKS</span>
            <h3>
              Daily scans unlock real discounts, badges,{" "}
              <em>and the next step in the plan</em>.
            </h3>
            <p>
              Coming back is the entire game. The AI gets better the more data
              it has, the plan gets sharper, and the user starts to see her
              own trend line. So I built a reward system that makes the return
              trip worth it.
            </p>
            <p>
              Every daily scan adds to a streak. Streaks unlock real discounts
              on the products Akvile recommends her, plus badges for
              milestones and visible benefits inside the app. The whole thing
              is designed in the same colour language as a teen rewards app,
              because it is one.
            </p>
            <ul>
              <li>Daily face scan streaks</li>
              <li>Real product discounts as rewards</li>
              <li>Badges for milestones</li>
              <li>Unlockable plan steps and Skin School content</li>
            </ul>
          </div>
          <div className="phone-frame">
            <img
              src="/cases/assets/ak-scan.png"
              alt="Your progress screen with the headline Awesome, we can see some progress. Six face scan score rings: Acne 97, Hydration 90, Pigmentation 98, Pores 98, Redness 62, Uniformness 91. Below a Recommendation of the day card with a redness tip and a See more recommendations button."
            />
          </div>
        </div>
      </section>

      {/* PAYMENT */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 03 · Payment, rethought</div>
          <h2 className="h2">Where the business meets the user.</h2>
        </div>

        <div className="ak-feature">
          <div className="body">
            <span className="tag">CHECKOUT · PAYWALL · PLAN UI</span>
            <h3>
              I re&#8209;sequenced the paywall and <em>rewrote the plan</em>.
            </h3>
            <p>
              The original payment flow was a single page with three plans,
              prices, and a wall of feature bullets. Teens scrolled it once,
              closed the tab, and didn't come back.
            </p>
            <p>
              I rebuilt the surface around what they actually want to know
              first, what's in the plan, what's locked, what's free, what's
              worth paying for. I added{" "}
              <strong>
                social proof, a clearer one&#8209;tap CTA, and a transparent
                price reveal
              </strong>{" "}
              instead of marketing language.
            </p>
          </div>
          <div className="phone-frame">
            <img
              src="/cases/assets/ak-recommendations.png"
              alt="Monthly progress screen showing 2023, May highlighted. We're preparing your final results with a card showing Achieve accurate results, take 10 daily questionnaires (3 of 10) and take 3 face scans (6 of 3). Below a Your insights card with skin feeling mostly normal at 100% and Your feeling mostly well at 87%."
            />
          </div>
        </div>

        <div className="ak-conversion">
          <div className="num">+12%</div>
          <div className="body">
            <h4>
              Subscription conversion, <em>up twelve percent</em> against the
              previous flow.
            </h4>
            <p>
              Measured on a like for like cohort after the payment surface
              relaunched. The screens look softer than the old ones, the
              numbers are sharper.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ paddingTop: 0 }}>
        <div className="ak-close">
          <div className="lab">In one line</div>
          <p>
            A clinical product, dressed in the language teens{" "}
            <em>actually open every day</em>.
          </p>
        </div>
      </section>
    </CaseLayout>
  );
}
