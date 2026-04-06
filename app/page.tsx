import Image from "next/image";
import productImage from "@/images/file_00000000add071fa814510538eada266.png";

const whatsappNumber = "917015684448";
const productName = "variant_01: Modern_Lumber - Tobacco-Vanilla";
const orderMessage = encodeURIComponent(
  `Hi Just_Beard, I want to order ${productName}. Please share price and delivery details.`,
);
const orderLink = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;

const problems = [
  "Dry beard texture that feels rough by midday",
  "Skin under the beard getting irritated after washing",
  "Heavy oils that sit on the beard instead of absorbing cleanly",
];

const solutions = [
  "Warm Tobacco-Vanilla profile built to feel present without being loud",
  "Organic blend with jojoba, almond, argan, and castor oils",
  "Hand-poured 30ml formula designed for softer texture and easier control",
];

const caseStudies = [
  {
    title: "Workday Reset",
    text: "Use 2 to 3 drops after a shower for a cleaner beard line and a calm finish that stays put through office hours.",
  },
  {
    title: "Weekend Grooming",
    text: "Massage into the beard before brushing to reduce flyaways, smooth the shape, and leave a low-shine finish.",
  },
  {
    title: "Starter Routine",
    text: "A straightforward bottle for men building a beard-care habit without a complicated routine or overloaded shelf.",
  },
];

const testimonials = [
  {
    quote: "The beard feels softer within minutes and the scent stays subtle.",
    author: "Arjun, Bengaluru",
  },
  {
    quote: "No greasy finish, no flakes, and the bottle looks premium on the shelf.",
    author: "Rohit, Pune",
  },
  {
    quote: "It fits into a simple routine: shower, apply, brush, done.",
    author: "Sameer, Hyderabad",
  },
];

const portfolioItems = [
  "Modern_Lumber identity with a warm Tobacco-Vanilla direction",
  "Organic formula with jojoba, almond, argan, and castor oils",
  "Vitamin E with tobacco vanilla and cedarwood oil accents",
  "WhatsApp-first ordering for a fast mobile checkout path",
];

const reasons = [
  "Distinct coded packaging language that makes the bottle memorable",
  "Warm scent direction that feels premium without turning sharp or overpowering",
  "Single-product flow that removes catalog clutter and keeps the page easy to scan",
  "Mobile-first layout that keeps copy, CTA, and product details within thumb reach",
];

const faqs = [
  {
    question: "Who is this beard oil for?",
    answer: "Men who want a beard oil that feels premium, wears smoothly, and fits an everyday grooming routine.",
  },
  {
    question: "What is inside this variant?",
    answer:
      "The label lists jojoba oil, almond oil, argan oil, castor oil, vitamin E, tobacco vanilla oil, and cedarwood oil.",
  },
  {
    question: "How long is it best for?",
    answer: "The label states the product is best for 24 months from the manufacturing date.",
  },
  {
    question: "How do I place an order?",
    answer: "Tap any order button to open WhatsApp with a pre-filled message for this Modern_Lumber variant.",
  },
];

const quickFacts = [
  { label: "blend", value: "organic" },
  { label: "size", value: "30ml" },
  { label: "finish", value: "clean" },
];

const orderFacts = [
  { label: "Variant", value: "variant_01" },
  { label: "Use", value: "2-3 drops" },
  { label: "Shelf life", value: "24 months" },
  { label: "Checkout", value: "WhatsApp" },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{"> Just_Beard / Premium Beard Care"}</p>
          <h1>Warm Tobacco-Vanilla beard oil for a softer, cleaner daily beard.</h1>
          <p className="hero-text">
            Modern_Lumber by Just_Beard blends jojoba, almond, argan, castor oil, and vitamin E
            into a hand-poured formula that softens the beard, calms the skin underneath, and
            avoids a greasy finish.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={orderLink} target="_blank" rel="noreferrer">
              Order on WhatsApp
            </a>
            <a className="button button-secondary" href="#portfolio">
              View Product
            </a>
          </div>
          <ul className="hero-tags" aria-label="product highlights">
            <li>Organic blend</li>
            <li>30ml bottle</li>
            <li>Tobacco-Vanilla profile</li>
          </ul>
          <div className="hero-stats" aria-label="quick product facts">
            {quickFacts.map((fact) => (
              <div className="stat-card" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-glow" />
          <Image
            src={productImage}
            alt="Just_Beard organic beard oil bottle"
            priority
            sizes="(max-width: 859px) 78vw, 420px"
            className="product-image"
          />
        </div>
      </section>

      <section className="content-section" id="problem-solution">
        <SectionHeading
          eyebrow="Problem / Solution"
          title="Built for beards that need moisture, calm, and shape."
          copy="Daily beard care breaks down fast when the oil feels heavy, smells too loud, or leaves the skin irritated. This bottle is built to solve that cleanly."
        />
        <div className="split-grid">
          <div className="panel">
            <h3>The problem</h3>
            <ul className="stack-list">
              {problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>
          <div className="panel panel-accent">
            <h3>The solution</h3>
            <ul className="stack-list">
              {solutions.map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section" id="case-studies">
        <SectionHeading
          eyebrow="Case Studies"
          title="Three moments where the bottle earns its place."
          copy="From office grooming to weekend maintenance, the formula is positioned around real routines instead of generic marketing filler."
        />
        <div className="card-grid">
          {caseStudies.map((item) => (
            <article className="panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="testimonials">
        <SectionHeading
          eyebrow="Testimonials"
          title="Proof focused on feel, finish, and scent."
          copy="Short feedback blocks keep the section credible, quick to scan, and easy to read on smaller screens."
        />
        <div className="card-grid">
          {testimonials.map((item) => (
            <blockquote className="panel testimonial" key={item.author}>
              <p>{item.quote}</p>
              <footer>{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="content-section" id="portfolio">
        <SectionHeading
          eyebrow="Portfolio"
          title="One hero product with the buying context kept tight."
          copy="Everything important about the formula, bottle, and ordering path is kept in one place so the page stays focused and mobile-friendly."
        />
        <div className="portfolio-layout">
          <div className="panel panel-tall">
            <h3>{productName}</h3>
            <p>
              A hand-poured organic beard oil built around a warm Tobacco-Vanilla scent with
              cedarwood depth and an ingredient blend aimed at softness, control, and daily wear.
            </p>
            <ul className="stack-list">
              {portfolioItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel order-panel">
            <div className="order-summary">
              <p className="terminal-label">variant_01</p>
              <h3>Ready to order</h3>
              <p>{productName}</p>
            </div>
            <div className="fact-grid" aria-label="order facts">
              {orderFacts.map((fact) => (
                <div className="fact-card" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
            <p className="micro-note">
              WhatsApp opens with this exact variant pre-filled so the mobile checkout path stays
              fast.
            </p>
            <a className="button button-primary" href={orderLink} target="_blank" rel="noreferrer">
              Order This Product
            </a>
          </div>
        </div>
      </section>

      <section className="content-section" id="why-us">
        <SectionHeading
          eyebrow="Why Us"
          title="Designed to feel premium before the first drop is used."
          copy="The brand language, the scent profile, and the purchase flow all support a single product story without clutter."
        />
        <div className="card-grid">
          {reasons.map((item) => (
            <article className="panel" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="Common buyer questions answered quickly."
          copy="Ingredients, usage, shelf life, and ordering are all handled in short blocks so the section stays fast to scan on a phone."
        />
        <div className="faq-list">
          {faqs.map((item) => (
            <article className="panel" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner" id="cta">
        <p className="eyebrow">CTA</p>
        <h2>Ready to order your bottle of Modern_Lumber?</h2>
        <p>
          Open WhatsApp with a pre-filled message for the Tobacco-Vanilla variant and continue the
          purchase there.
        </p>
        <a className="button button-primary" href={orderLink} target="_blank" rel="noreferrer">
          Order {productName}
        </a>
      </section>
    </main>
  );
}
