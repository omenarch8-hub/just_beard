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
  "Overpowering oils that smell loud and feel greasy",
];

const solutions = [
  "Warm, smoky, smooth Tobacco-Vanilla profile built for daily wear",
  "Organic blend with jojoba, almond, argan, and castor oils",
  "Hand-poured 30ml formula designed for a softer, cleaner finish",
];

const caseStudies = [
  {
    title: "Workday Reset",
    text: "Use 2 to 3 drops after a shower for a clean, polished beard that stays calm through long office hours.",
  },
  {
    title: "Weekend Grooming",
    text: "Massage into the beard before brushing to reduce flyaways and add a healthy low-shine finish.",
  },
  {
    title: "Starter Routine",
    text: "A simple 30ml bottle designed for men building a grooming habit without a complicated routine.",
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
  "Modern_Lumber identity with Tobacco-Vanilla scent",
  "Organic formula with jojoba, almond, argan, and castor oils",
  "Vitamin E with tobacco vanilla and cedarwood oil accents",
  "WhatsApp-first ordering for quick checkout",
];

const reasons = [
  "Distinct coded packaging language that makes the product memorable",
  "Warm, masculine scent direction without an overly sharp finish",
  "Mobile-first layout tuned for thumb reach and quick scanning",
  "Clear single-product conversion flow instead of cluttered catalog friction",
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
          <p className="eyebrow">Premium Beard Care. Coded Differently.</p>
          <h1>
            Modern_
            <wbr />
            Lumber brings a warm Tobacco-
            <wbr />
            Vanilla beard ritual into one bottle.
          </h1>
          <p className="hero-text">
            A premium organic beard oil from Just_Beard with a warm, smoky, smooth profile built
            for the modern man.
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
        </div>

        <div className="hero-visual">
          <div className="image-glow" />
          <Image
            src={productImage}
            alt="Just_Beard organic beard oil bottle"
            priority
            className="product-image"
          />
        </div>
      </section>

      <section className="content-section" id="problem-solution">
        <SectionHeading
          eyebrow="Problem / Solution"
          title="Built for beards that need moisture, calm, and shape."
          copy="The page follows your requested structure, but the message stays product-first and conversion-focused."
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
          title="A product story shown through daily use."
          copy="Instead of agency case studies, this section frames where the oil fits into a real grooming routine."
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
          title="Social proof without visual clutter."
          copy="Short quotes keep the section credible and easy to scan on smaller screens."
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
          title="One hero product, presented with clear buying context."
          copy="This section acts as a compact product portfolio focused on formula, bottle, identity, and ordering."
        />
        <div className="portfolio-layout">
          <div className="panel panel-tall">
            <h3>{productName}</h3>
            <p>
              A hand-poured organic beard oil built around a warm Tobacco-Vanilla scent with
              cedarwood depth and an ingredient blend aimed at softness and control.
            </p>
            <ul className="stack-list">
              {portfolioItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel order-panel">
            <p className="price-label">$ ls</p>
            <h3>Selected product</h3>
            <p>{productName}</p>
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
          copy="The brand language, page speed, and purchase path all support a simple premium product story."
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
          copy="The accordion is replaced with simple stacked cards to keep the first version fast and predictable."
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
