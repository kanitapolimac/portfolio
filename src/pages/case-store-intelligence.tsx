import CaseLayout from "../components/CaseLayout";
import { NextCaseGrid } from "../components/NextCase";

export default function CaseStoreIntelligence() {
  return (
    <CaseLayout
      caseId="store-intelligence"
      footMeta="Store Intelligence · 2024 to 2025"
      next={
        <NextCaseGrid
          items={[
            {
              to: "/case-airdomo",
              label: "Next case · 04",
              title: (
                <span>
                  Real Estate Platform, <em>AI native PropTech</em>
                </span>
              ),
            },
            {
              to: "/case-carea",
              label: "Also explore · 02",
              title: (
                <span>
                  Carea, <em>maternal mental health</em>
                </span>
              ),
            },
          ]}
        />
      }
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-brand">
          <div className="hero-brand-mark">S</div>
          <div>Store Intelligence</div>
        </div>
        <div className="eyebrow">Case Study · 03</div>
        <h1 className="h1">
          A leading AI vision product that drives <em>5% more sales</em> for
          retailers.
        </h1>
        <p className="hero-lede">
          Turning a live feed of shelf reality into operator decisions. One
          data model, two surfaces. One on the aisle, one in the back office.
        </p>

        <div className="meta">
          <div>
            <div className="meta-key">Services</div>
            <div className="meta-val">
              <ul>
                <li>Product strategy</li>
                <li>UX research</li>
                <li>UX / UI design</li>
                <li>Design systems</li>
                <li>Data visualisation</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="meta-key">Industry</div>
            <div className="meta-val">
              Enterprise Retail
              <br />
              Grocery · CPG · Pharmacy
            </div>
          </div>
          <div>
            <div className="meta-key">Platforms</div>
            <div className="meta-val">
              Tablet (in store)
              <br />
              Web dashboard
              <br />
              iOS · Android
            </div>
          </div>
          <div>
            <div className="meta-key">Deliverables</div>
            <div className="meta-val">
              <ul>
                <li>Native mobile app</li>
                <li>Web dashboard</li>
                <li>Retail design system</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="meta-key">Role</div>
            <div className="meta-val">
              Product Designer
              <br />
              Jan 2024 to Jul 2025
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ paddingBlock: 0 }}>
        <figure className="si-figure">
          <img
            src="/cases/assets/si-hero.png"
            alt="Store Intelligence tablet view on a grocery shelf, showing POG compliance 92.4% and on-shelf availability 94.7%"
          />
        </figure>
      </section>

      {/* PROBLEM */}
      <section>
        <div className="s-head">
          <div className="eyebrow">The problem</div>
          <h2 className="h2">
            The future of retail,
            <br />
            <em>in leaps, not increments.</em>
          </h2>
        </div>
        <div className="two-col prose">
          <div>
            <p>
              Empty shelves and shelf chaos are a real problem for retailers.
              Paper planograms and manual lists make it worse. Hours of
              store-employee time on the audit, frequent errors in product
              placement, and lost sales sitting between the gaps.
            </p>
            <p>
              I joined the team to redesign the operator surface that sits on
              top of the company's computer vision models. The question was
              simple: how do you turn what the camera sees into a five minute
              task an associate will actually finish?
            </p>
          </div>
          <div>
            <p>
              The product had to work for two audiences at once. A back office
              merchandiser planning category strategy across regions, and a
              22 year old associate restocking cereal at 7am.
            </p>
            <p>
              Same data model, two very different reading levels. Same
              component system, two very different surfaces.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section>
        <div className="s-head">
          <div className="eyebrow">The product</div>
          <h2 className="h2">
            The all-seeing eye of <em>retail</em>.
          </h2>
          <p
            className="hero-lede"
            style={{
              marginTop: 16,
              fontStyle: "normal",
              fontFamily: "var(--sans)",
              fontSize: 17,
              color: "var(--case-ink-2)",
              maxWidth: "60ch",
            }}
          >
            Picture a store where every shelf tells a story. Not just to the
            customer, but to the operation behind the floor. Store
            Intelligence reads more from a single second of camera feed than a
            human auditor could in a shift.
          </p>
        </div>
        <figure className="si-figure">
          <img
            src="/cases/assets/si-vision-vs.png"
            alt="Two store maps side by side. Left, gray with 'No visibility'. Right, colored fixtures with department, supplier and stock labels, marked 'Store AI'."
          />
          <figcaption
            className="si-cap"
            style={{ padding: "0 22px 18px" }}
          >
            <span className="n">01</span> No visibility versus Store AI · the
            same store, two operating realities
          </figcaption>
        </figure>
      </section>

      {/* CAPABILITIES */}
      <section>
        <div className="s-head">
          <div className="eyebrow">Capabilities</div>
          <h2 className="h2">
            One platform. <em>Five jobs done.</em>
          </h2>
          <p
            className="hero-lede"
            style={{
              marginTop: 16,
              fontStyle: "normal",
              fontFamily: "var(--sans)",
              fontSize: 17,
              color: "var(--case-ink-2)",
              maxWidth: "60ch",
            }}
          >
            Price tags, backroom stock, fixture availability, retail
            operations, and shelf monetisation. The same camera feed answers
            every one.
          </p>
        </div>
        <figure className="si-figure" style={{ background: "var(--case-bg)" }}>
          <img
            src="/cases/assets/si-capabilities.png"
            alt="Five capability cards on a faded aisle background. Price tag identification, Backroom and stock information, Fixture insights and availability, Efficient retail operations, Monetized shelf insights."
          />
        </figure>
      </section>

      {/* SET SHELF */}
      <section>
        <div className="s-head">
          <div className="eyebrow">Set Shelf</div>
          <h2 className="h2">
            Advanced AI and vision, <em>a perfect match.</em>
          </h2>
        </div>
        <div className="si-row-text">
          <div className="prose">
            <p>
              Associates used to spend the first twelve minutes of every shift
              figuring out where to start. The tablet now answers that for
              them. Capture the fixture, read a ranked list of what costs the
              most to leave alone.
            </p>
            <p>
              Set Shelf turns one ambiguous chore into four named steps.
              Identify, remove, set bay, set shelf. AI confidence sits in the
              UI, not behind it. A wrong item loop pipes back into the
              labeling pipeline so the model gets sharper with every shift.
            </p>
          </div>
          <figure className="si-figure">
            <img
              src="/cases/assets/si-planogram.png"
              alt="iPad showing the Set Shelf workflow for 007 Shelf Stable Cereal P2W3 PRC, with planogram on the left, realogram on the right, and a 'Place here, Bay 4 shelf (4:1)' callout."
            />
          </figure>
        </div>
      </section>

      {/* OOS */}
      <section>
        <div className="si-row-text">
          <div className="prose">
            <h3
              className="h2"
              style={{
                fontSize: "clamp(28px, 3vw, 40px)",
                marginBottom: 24,
              }}
            >
              Restock <em>without lookup.</em>
            </h3>
            <p>
              Every out of stock item carries its destination on its face.
              Planogram on one side, realogram on the other, and a green
              callout that names the bay and shelf coordinate where the box
              has to go.
            </p>
            <p>
              Swipe to the next item, same pattern, same confidence. The
              lookup that used to take twelve minutes per fixture is folded
              into the capture.
            </p>
          </div>
          <figure className="si-figure">
            <img
              src="/cases/assets/si-oos.png"
              alt="iPad Out of stock view with Planogram on the left and Realogram on the right, a Wheaties bay 1 shelf 5:1 row highlighted, and a 'Restock at Bay 1 shelf (5:1)' callout."
            />
          </figure>
        </div>
      </section>

      {/* APPROACH */}
      <section>
        <div className="s-head">
          <div className="eyebrow">Approach</div>
          <h2 className="h2">
            Two surfaces, <em>one data model.</em>
          </h2>
        </div>
        <div className="pillars">
          <div className="pillar">
            <div className="num">I.</div>
            <h5>Tablet, in store</h5>
            <p>
              Camera capture, realogram detection, a ranked task queue. Built
              for one handed use on the aisle, with restock locations mapped
              to physical shelf coordinates.
            </p>
          </div>
          <div className="pillar">
            <div className="num">II.</div>
            <h5>Web dashboard</h5>
            <p>
              A POG compliance and on-shelf availability cockpit for store,
              region, and chain. Surfaces the categories costing you the most
              this week.
            </p>
          </div>
          <div className="pillar">
            <div className="num">III.</div>
            <h5>Vision as UI</h5>
            <p>
              Confidence states, low light flags, and a wrong item loop that
              pipes back into the labeling pipeline. The UI is part of how the
              model learns.
            </p>
          </div>
          <div className="pillar">
            <div className="num">IV.</div>
            <h5>Design system</h5>
            <p>
              A retail AI component library. Planograms, realograms, segmented
              controls, restock badges. Adopted across the wider retail suite.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section>
        <div className="s-head">
          <div className="eyebrow">The Results</div>
          <h2 className="h2">Impact, made.</h2>
          <p
            className="hero-lede"
            style={{
              marginTop: 16,
              fontStyle: "normal",
              fontFamily: "var(--sans)",
              fontSize: 17,
              color: "var(--case-ink-2)",
              maxWidth: "60ch",
            }}
          >
            Better shelf management is not just good housekeeping. It is good
            business. In retail, results reign supreme.
          </p>
        </div>
        <div className="impact-list">
          <div className="impact-row">
            <div className="impact-num">1.</div>
            <div>
              <h4>+11% on-shelf availability across pilot stores</h4>
              <p>
                The ranked task queue, plus a restock-location callout on
                every fixture, removed the twelve-minute lookup that opened
                every restock cycle.
              </p>
            </div>
          </div>
          <div className="impact-row">
            <div className="impact-num">2.</div>
            <div>
              <h4>+23% jump in planogram compliance</h4>
              <p>
                POG drift is a slow leak. Once we surfaced it as a weekly
                score with named accountable categories, regional ops started
                running it as a KPI in Monday standups.
              </p>
            </div>
          </div>
          <div className="impact-row">
            <div className="impact-num">3.</div>
            <div>
              <h4>+5% increase in sales for retailers using the surface</h4>
              <p>
                The downstream of fewer empty facings and faster restock
                cycles. The number the C suite buys against.
              </p>
            </div>
          </div>
          <div className="impact-row">
            <div className="impact-num">4.</div>
            <div>
              <h4>Design system adopted across the retail AI suite</h4>
              <p>
                Planogram and realogram primitives, segmented controls, the
                AI confidence pattern. The substrate the rest of the retail
                suite renders on now.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="metric-strip">
          <div className="metric">
            <div className="num">
              <span className="acc">11%</span>
            </div>
            <div className="lab">On-shelf availability</div>
          </div>
          <div className="metric">
            <div className="num">
              <span className="acc">23%</span>
            </div>
            <div className="lab">Planogram compliance</div>
          </div>
          <div className="metric">
            <div className="num">
              <span className="acc">5%</span>
            </div>
            <div className="lab">Increase in sales</div>
          </div>
        </div>
      </section>
    </CaseLayout>
  );
}
