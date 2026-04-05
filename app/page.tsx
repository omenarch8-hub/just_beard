import Image from "next/image";
import productImage from "@/images/file_00000000add071fa814510538eada266.png";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const productName = "Just_Beard Organic Beard Oil 30ml";
const orderMessage = encodeURIComponent(
  `Hi Just_Beard, I want to order ${productName}. Please share price and delivery details.`,
);
const orderLink = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;

const problems = [
  "Patchy growth that looks dry by midday",
  "Itchy skin under the beard after washing",
  "Heavy oils that sit on top instead of soaking in",
];

const solutions = [
  "Jojoba and argan oils help soften rough beard hair",
  "Castor oil supports a fuller, groomed appearance",
  "Hand-poured organic blend made for everyday use",
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
  "Organic ingredient-first formula",
  "Compact 30ml amber glass bottle",
  "Label language inspired by code and craft",
  "WhatsApp-first ordering for quick checkout",
];

const reasons = [
  "Catppuccin-inspired identity that feels modern and distinct",
  "Lightweight page structure with static content and optimized local image loading",
  "Mobile-first layout tuned for thumb reach and quick scanning",
  "Clear single-product conversion flow instead of cluttered catalog friction",
];

const faqs = [
  {
    question: "Who is this beard oil for?",
    answer: "Men with short, medium, or fuller beards who want softness, control, and a cleaner finish.",
  },
  {
    question: "How do I use it?",
    answer: "Warm 2 to 4 drops in your palms, massage into the beard and skin, then comb through.",
  },
  {
    question: "How do I place an order?",
    answer: "Tap any order button to open WhatsApp with a pre-filled message for the 30ml bottle.",
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
          <h1>Just_Beard builds a sharper beard routine in a single bottle.</h1>
          <p className="hero-text">
            Organic beard oil, hand-poured in small batches, designed for men who want softness,
            control, and a clean daily ritual.
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
            <li>30ml amber bottle</li>
            <li>Mobile-first ordering</li>
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
              A lightweight beard oil blend featuring jojoba oil, argan oil, and castor oil in a
              shelf-ready amber glass bottle.
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
        <h2>Ready to order your first bottle of Just_Beard?</h2>
        <p>
          Open WhatsApp Business with a pre-filled order message and continue the purchase there.
        </p>
        <a className="button button-primary" href={orderLink} target="_blank" rel="noreferrer">
          Order {productName}
        </a>
      </section>
    </main>
  );
}
