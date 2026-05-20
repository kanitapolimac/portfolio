import CaseLayout from "../components/CaseLayout";
import { NextCase } from "../components/NextCase";

export default function CaseAirdomo() {
  return (
    <CaseLayout
      caseId="airdomo"
      role="Product Designer · AI Engineer"
      footMeta="Real Estate Platform · 2025 to 2026"
      next={
        <NextCase
          to="/case-system-akvile"
          label="Next case · 05"
          title={
            <>
              System Akvile, <em>AI skin diagnostics</em>
            </>
          }
        />
      }
    >
      {/* HERO */}
      <section className="hero">
        <div className="hero-brand">
          <div className="hero-brand-mark">A</div>
          <div>Real Estate Platform</div>
        </div>
        <div className="eyebrow">Case Study · 04</div>
        <h1 className="h1">
          A whole real estate platform, <em>built from scratch.</em> Plus a
          partner program shipped solo with Claude in three days.
        </h1>
        <p className="hero-lede">
          Discover and own a destination home. Marketing site, buyer side,
          seller side, listing flow, search, admin, and an entire partner
          program shipped solo on top. End to end, with minimal input.
        </p>

        <div className="meta">
          <div>
            <div className="meta-key">Services</div>
            <div className="meta-val">
              <ul>
                <li>Product strategy</li>
                <li>UX research</li>
                <li>UX / UI design</li>
                <li>Design system</li>
                <li>Prompt engineering</li>
                <li>Front end (Claude assisted)</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="meta-key">Industry</div>
            <div className="meta-val">
              PropTech
              <br />
              Luxury real estate
            </div>
          </div>
          <div>
            <div className="meta-key">Platforms</div>
            <div className="meta-val">Web (public + portal)</div>
          </div>
          <div>
            <div className="meta-key">Deliverables</div>
            <div className="meta-val">
              <ul>
                <li>Public website</li>
                <li>Buyer experience</li>
                <li>Seller dashboard</li>
                <li>Listing flow + admin</li>
                <li>Search system</li>
                <li>Partnership platform partner portal</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="meta-key">Role</div>
            <div className="meta-val">
              PD → Product AI Engineer
              <br />
              Sep 2025 to May 2026
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ paddingBlock: 0 }}>
        <figure className="ad-figure">
          <img
            src="/cases/assets/ad-hero.png"
            alt="Marketing site hero, a luxury house with Discover And Own Your Perfect Destination Home centered, search bar below, Turks and Caicos / Aqua Blu Beach Villas tagged bottom right"
          />
        </figure>
      </section>

      {/* PROBLEM */}
      <section>
        <div className="s-head">
          <div className="eyebrow">The problem</div>
          <h2 className="h2">
            A new platform, <em>no playbook</em>, a small team, and a luxury
            audience.
          </h2>
        </div>
        <div className="two-col prose">
          <div>
            <p>
              The brief was a whole real estate platform in market. Buyers,
              sellers, listings, search, admin. The brief was a paragraph.
              The deadline was tight. The audience was used to brands that
              take themselves seriously.
            </p>
            <p>
              The work spanned six surfaces and only one designer. I joined as
              Product Designer, then moved into a Product AI Engineer role so
              I could keep shipping past the Figma file.
            </p>
          </div>
          <div>
            <p>
              It started with a research week. Competitor teardown, agent
              interviews, three rounds of brand calibration, then a small
              design system. Tokens, primitives, components, voice. The kind
              of thing that pays itself back twenty times over once five
              teams are building against it.
            </p>
            <p>
              From there, the platform: marketing, buyer side, seller side,
              the listing creation flow, search, and the partnership
              platform. The partner program I shipped end to end in three
              days.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 01 · The whole platform</div>
          <h2 className="h2">
            One brief. One designer. <em>Six surfaces shipped.</em>
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
            A design system underneath, a public face, a buyer side, a seller
            side, and admin panels behind all of it. Same tokens, same voice,
            same component library.
          </p>
        </div>

        <div className="ad-quad">
          <figure className="ad-figure">
            <img
              src="/cases/assets/ad-hero.png"
              alt="Public marketing site, homepage with destination home headline and search"
            />
            <figcaption className="ad-cap">
              <span className="n">01</span> Public · marketing &amp; discovery
            </figcaption>
          </figure>
          <figure className="ad-figure">
            <img
              src="/cases/assets/ad-guests.png"
              alt="Buyer profile with Recommended For You and Recently Viewed listings, profile dropdown showing Saved Listings and Saved Searches"
            />
            <figcaption className="ad-cap">
              <span className="n">02</span> Buyer side · recommendations &amp; saved
            </figcaption>
          </figure>
          <figure className="ad-figure">
            <img
              src="/cases/assets/ad-dashboard.png"
              alt="Seller dashboard with My Listings table, statuses, prices, and source tags (Feed / Manual)"
            />
            <figcaption className="ad-cap">
              <span className="n">03</span> Seller side · listings, inbox, marketing
            </figcaption>
          </figure>
          <figure className="ad-figure">
            <img
              src="/cases/assets/ad-property-overview.png"
              alt="Create New Listing flow, Location step with address autocomplete and map pin placement"
            />
            <figcaption className="ad-cap">
              <span className="n">04</span> Listing flow · the manual upload, eleven steps
            </figcaption>
          </figure>
        </div>
      </section>

      {/* LISTING MODES */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 02 · Listing creation</div>
          <h2 className="h2">
            Three ways to <em>get a property listed</em>. Plus the admin that
            runs them all.
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
            Not every seller has the same starting point. Some have a polished
            portfolio. Some have a Dropbox folder. Some have a phone number.
            The product respects all three.
          </p>
        </div>

        <div className="ad-modes">
          <div className="ad-mode">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v14H4z" />
                <path d="M8 8h8M8 12h6M8 16h5" />
              </svg>
            </div>
            <h5>Manual upload</h5>
            <p>
              Eleven focused steps. Property overview, location, price, basic
              details, features, photos, floor plan, video, 3D tour, primary
              contact, and publish. Saveable as a draft at any point.
            </p>
          </div>
          <div className="ad-mode">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M3 12h6l3-7 3 14 3-7h3" />
              </svg>
            </div>
            <h5>Feed Connect</h5>
            <p>
              The seller pastes a link to their existing website or portfolio.
              The platform reads the property data, normalises it, and creates
              the listings on the seller's behalf. They review, edit, and
              approve.
            </p>
          </div>
          <div className="ad-mode">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M3 21h18" />
                <path d="M5 21V8l7-5 7 5v13" />
                <path d="M10 21v-6h4v6" />
              </svg>
            </div>
            <h5>Valet</h5>
            <p>
              The seller has nothing put together. They share whatever they
              have, by phone, email, or in person. The team builds the listing
              for them. The product gives that handoff its own shape.
            </p>
          </div>
          <div className="ad-mode">
            <div className="ic">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18M9 4v16" />
              </svg>
            </div>
            <h5>Admin panels</h5>
            <p>
              Approval queues, status routing, source tagging, and audit
              trails. The internal team sees every listing across all three
              modes in one console.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 03 · Search system</div>
          <h2 className="h2">
            A search bar that <em>does the thinking</em>. Twelve states, one
            component.
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
            Inactive, typing, expanded, loading, ranking, no result, keyboard
            nav, recent searches, trending cities. Every search state mapped,
            designed, and built as one component the rest of the product
            reuses.
          </p>
        </div>

        <figure
          className="ad-figure"
          style={{ border: 0, background: "transparent" }}
        >
          <img
            src="/cases/assets/ad-search-active.png"
            alt="Homepage with the search bar engaged, showing Cities, States / Province, and Homes / Listings results with example properties in Dubai"
          />
          <figcaption className="ad-cap" style={{ padding: "14px 0 0" }}>
            <span className="n">09</span> The engaged state · cities, regions,
            and listings ranked into one column
          </figcaption>
        </figure>

        <figure
          className="ad-figure"
          style={{
            marginTop: 28,
            background: "transparent",
            border: 0,
            padding: 0,
          }}
        >
          <img
            src="/cases/assets/ad-search-airdome.png"
            alt="A grid of every search state in the system: inactive, with input text, expanded with fixated categories, no result, keyboard nav, loading, ranking and highlights, view-more of one category, and recent / trending"
            style={{ background: "transparent", boxShadow: "none" }}
          />
          <figcaption className="ad-cap" style={{ padding: "14px 0 0" }}>
            <span className="n">10</span> Full state matrix · the design
            artefact engineering builds against
          </figcaption>
        </figure>
      </section>

      {/* PARTNERSHIP */}
      <section>
        <div className="s-head">
          <div className="eyebrow">§ 04 · Designer who ships</div>
          <h2 className="h2">
            The partnership platform. <em>Three days, alone</em>, with Claude.
          </h2>
        </div>

        <div className="dx-intro">
          <p>
            The partnership platform is the affiliate program, three
            connected products, one designer. A partner landing site, a Zoho
            CRM approval pipeline, and an onboarding builder that turns an
            approved partner into a published site.
          </p>
          <div className="count">
            3<small>days · Figma to live</small>
          </div>
        </div>

        <div className="dx-stages">
          <div className="dx-stage">
            <div className="num">01</div>
            <div className="tag">Partner landing</div>
            <h4>
              The site that <em>turns visitors into applicants.</em>
            </h4>
            <p>
              A focused marketing surface for prospective partners with a
              single <strong>Sell with us</strong> CTA. The form on the other
              side captures everything I need to evaluate them.
            </p>
            <ul>
              <li>Marketing site</li>
              <li>Application form</li>
              <li>Validation &amp; draft save</li>
            </ul>
          </div>
          <div className="dx-stage">
            <div className="num">02</div>
            <div className="tag">Zoho CRM pipeline</div>
            <h4>
              Form to CRM. Approve in Zoho, <em>email goes out automatically.</em>
            </h4>
            <p>
              Submissions land as contacts in the partner pipeline. When I
              mark a partner approved in Zoho, it fires an email I configured
              with a CTA to the next product.
            </p>
            <ul>
              <li>Form &rarr; Zoho</li>
              <li>Approval workflow</li>
              <li>Email + CTA</li>
            </ul>
          </div>
          <div className="dx-stage">
            <div className="num">03</div>
            <div className="tag">Onboarding builder</div>
            <h4>
              Sign, configure, preview, <em>publish.</em>
            </h4>
            <p>
              The CTA lands the partner inside a second Claude&#8209;built
              platform. Four screens, end to end. Contract and payment, domain
              and style, live preview with swappable imagery, then publish.
            </p>
            <ul>
              <li>Contract &amp; payment</li>
              <li>Domain &amp; style</li>
              <li>Preview &amp; publish</li>
            </ul>
          </div>
        </div>

        <div className="dx-stack">
          <span className="lab">Stack</span>
          {["Claude", "Figma", "Next.js", "Zoho CRM", "Stripe", "Resend", "Vercel"].map(
            (s) => (
              <span key={s} className="chip">
                {s}
              </span>
            )
          )}
        </div>
      </section>

      {/* APPROACH */}
      <section>
        <div className="s-head">
          <div className="eyebrow">Approach</div>
          <h2 className="h2">
            Generative <em>UI</em>, not generative text.
          </h2>
        </div>
        <div className="pillars">
          <div className="pillar">
            <div className="num">I.</div>
            <h5>Platform from scratch</h5>
            <p>
              Research, brand calibration, design system, components, then
              the platform on top. Same tokens render every surface, marketing
              through admin.
            </p>
          </div>
          <div className="pillar">
            <div className="num">II.</div>
            <h5>Three ways in</h5>
            <p>
              Manual upload, Feed Connect, and Valet. The product meets
              sellers wherever they start, and admin sees all three sources in
              one table.
            </p>
          </div>
          <div className="pillar">
            <div className="num">III.</div>
            <h5>Search as a component</h5>
            <p>
              Twelve documented states. Recent searches, trending cities,
              no-result, keyboard nav, loading. The state matrix is the spec.
            </p>
          </div>
          <div className="pillar">
            <div className="num">IV.</div>
            <h5>Designer who ships</h5>
            <p>
              Built in three days, alone. Figma to React to live URL. The
              fastest way to validate a flow is to run it past a real partner.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section>
        <div className="s-head">
          <div className="eyebrow">The Results</div>
          <h2 className="h2">Impact, made.</h2>
        </div>
        <div className="impact-list">
          <div className="impact-row">
            <div className="impact-num">1.</div>
            <div>
              <h4>−43% time on the listing process for sellers</h4>
              <p>
                Three ways in instead of one. Sellers who had a portfolio used
                Feed Connect, sellers who had nothing got Valet, and the rest
                had a clear, eleven-step path.
              </p>
            </div>
          </div>
          <div className="impact-row">
            <div className="impact-num">2.</div>
            <div>
              <h4>2.1× seller retention against the pre-redesign baseline</h4>
              <p>
                Sellers stayed in the product week to week. The listing
                process stopped being the part they dreaded.
              </p>
            </div>
          </div>
          <div className="impact-row">
            <div className="impact-num">3.</div>
            <div>
              <h4>
                The partnership platform shipped in three days, solo, with
                Claude
              </h4>
              <p>
                Application form, Zoho CRM, approval emails, site builder,
                publish-or-revoke. End to end, on a live URL, in seventy-two
                hours.
              </p>
            </div>
          </div>
          <div className="impact-row">
            <div className="impact-num">4.</div>
            <div>
              <h4>One component system across public, portal, and partner</h4>
              <p>
                The public site, the client portal, and the partnership
                platform render on the same primitives. New surfaces inherit
                the system on day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="metric-strip">
          <div className="metric">
            <div className="num">
              <span className="acc">43%</span>
            </div>
            <div className="lab">Listing time saved</div>
          </div>
          <div className="metric">
            <div className="num">
              <span className="acc">2.1×</span>
            </div>
            <div className="lab">Seller retention</div>
          </div>
          <div className="metric">
            <div className="num">
              <span className="acc">3</span>
            </div>
            <div className="lab">
              Days to ship the partnership platform, solo
            </div>
          </div>
        </div>
      </section>
    </CaseLayout>
  );
}
