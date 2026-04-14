import Image from "next/image";
import labelImage from "@/images/label_final.png";

const brandName = "JUST_BEARD";
const productName = "Modern Lumber Beard Oil";
const scentProfile = "Tobacco Vanilla";
const volume = "30ML";
const price = "₹899";
const whatsappNumber = "917015684448";
const orderMessage = encodeURIComponent(
  `Hi ${brandName}, I want to order ${productName} in ${scentProfile} (${volume}) at ${price}. Please share the next step.`,
);
const orderLink = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;

const heroFacts = [
  { label: "Format", value: "Daily beard oil" },
  { label: "Scent", value: scentProfile },
  { label: "Volume", value: volume },
  { label: "MRP", value: price },
];

const productPrinciples = [
  {
    title: "Softer texture",
    text: "Jojoba, almond, argan, and castor work together to make coarse beard hair feel more supple and easier to shape.",
  },
  {
    title: "Calmer underneath",
    text: "The blend is meant to be massaged into the skin below the beard, helping the routine feel conditioning rather than heavy.",
  },
  {
    title: "A composed finish",
    text: "Tobacco vanilla and cedarwood give the oil warmth and depth without pushing the scent into something loud or sugary.",
  },
];

const ingredients = [
  { name: "Jojoba oil", amount: "13.2ML" },
  { name: "Sweet almond oil", amount: "9ML" },
  { name: "Argan oil", amount: "6ML" },
  { name: "Castor oil", amount: "1ML" },
  { name: "Vitamin E", amount: "0.1ML" },
  { name: "Tobacco vanilla oil", amount: "0.5ML" },
  { name: "Cedarwood oil", amount: "0.2ML" },
];

const ritualSteps = [
  "Warm 2 to 4 drops between your palms after showering or before heading out.",
  "Work the oil from the skin underneath through the beard so the texture softens evenly.",
  "Finish with a comb or your hands for a beard that looks maintained, not overloaded.",
];

const routineNotes = [
  "Organic oils. Hand poured.",
  "Designed for short, medium, and full beards that need more control.",
  "Best before 24 months from manufacturing.",
  "For external use only. Avoid contact with eyes.",
];

const faqs = [
  {
    question: "What does Modern Lumber smell like?",
    answer:
      "It opens warm and dry, with tobacco and vanilla rounded out by cedarwood. The result is refined and grounded rather than overly sweet.",
  },
  {
    question: "Will it suit a shorter beard?",
    answer:
      "Yes. It works for early growth through fuller beards because the routine is about conditioning the hair and the skin underneath, not just adding shine.",
  },
  {
    question: "How long does one bottle last?",
    answer:
      "That depends on beard length and how many drops you use, but the 30ML bottle is sized for regular daily use rather than occasional application.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Use the WhatsApp button on the page. The message is pre-filled with the product details so the checkout conversation starts immediately.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-intro">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="site-shell">
        <header className="site-header">
          <a className="brand-lockup" href="#top">
            <span>{brandName}</span>
            <strong>Modern Lumber</strong>
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#benefits">Benefits</a>
            <a href="#formula">Formula</a>
            <a href="#faq">FAQ</a>
            <a className="nav-cta" href={orderLink} target="_blank" rel="noreferrer">
              Order
            </a>
          </nav>
        </header>

        <section className="hero-section" id="top">
          <div className="hero-copy">
            <p className="hero-eyebrow">Luxury beard care, reduced to what matters.</p>
            <h1>The daily beard oil for men who prefer their grooming understated.</h1>
            <p className="hero-text">
              {productName} is a 30ML hand-poured blend made with jojoba, sweet almond, argan,
              castor, vitamin E, tobacco vanilla, and cedarwood. It is built to soften texture,
              condition the skin underneath, and leave a cleaner, more composed finish than heavy
              oils that sit on top of the beard.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={orderLink} target="_blank" rel="noreferrer">
                Order on WhatsApp
              </a>
              <a className="button button-secondary" href="#formula">
                Review the Formula
              </a>
            </div>
            <ul className="hero-pills" aria-label="Product highlights">
              <li>Organic oils</li>
              <li>Hand poured</li>
              <li>{scentProfile}</li>
            </ul>
            <div className="hero-facts" aria-label="Product facts">
              {heroFacts.map((fact) => (
                <article className="fact-tile" key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <figure className="hero-visual">
            <div className="visual-frame">
              <div className="visual-accent" aria-hidden="true" />
              <Image
                src={labelImage}
                alt="Front and back label artwork for Just Beard Modern Lumber beard oil"
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
                className="hero-image"
              />
            </div>
            <figcaption>
              30ML of daily beard oil with a tobacco vanilla signature and a clean, understated
              grooming profile.
            </figcaption>
          </figure>
        </section>

        <section className="content-section" id="benefits">
          <SectionIntro
            eyebrow="Why This Bottle"
            title="A cleaner answer to rough texture, dry skin, and overdone shine."
            copy="Modern Lumber is positioned for daily use: enough richness to improve feel and control, enough restraint to stay elegant on skin, beard, and scent."
          />
          <div className="benefit-grid">
            {productPrinciples.map((principle) => (
              <article className="card" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section formula-section" id="formula">
          <SectionIntro
            eyebrow="Formula"
            title="A 30ML blend with a clear job to do."
            copy="Jojoba leads the formula for everyday conditioning, sweet almond and argan bring softness and glide, castor adds body, and the tobacco vanilla with cedarwood gives the oil its quiet signature."
          />
          <div className="formula-layout">
            <article className="card card-emphasis">
              <p className="detail-label">Signature profile</p>
              <h3>{scentProfile}</h3>
              <p>
                Warm tobacco, soft vanilla, and dry cedarwood bring structure to the bottle. The
                profile is designed to feel polished from close range, not overpowering across the
                room.
              </p>
            </article>

            <article className="card">
              <p className="detail-label">Ingredients by volume</p>
              <dl className="ingredient-list">
                {ingredients.map((ingredient) => (
                  <div className="ingredient-row" key={ingredient.name}>
                    <dt>{ingredient.name}</dt>
                    <dd>{ingredient.amount}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </section>

        <section className="content-section ritual-section" id="ritual">
          <SectionIntro
            eyebrow="Routine"
            title="Built to fit a simple morning ritual."
            copy="A good beard oil should be easy to use, easy to repeat, and easy to live with. Modern Lumber keeps the routine short while upgrading how the beard feels through the day."
          />
          <div className="ritual-layout">
            <article className="card">
              <p className="detail-label">How to use</p>
              <ol className="ritual-list">
                {ritualSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
            <article className="card">
              <p className="detail-label">Bottle notes</p>
              <ul className="note-list">
                {routineNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section faq-section" id="faq">
          <SectionIntro
            eyebrow="FAQ"
            title="Everything important, without the clutter."
            copy="The page keeps the buying path fast, especially on mobile, so these are the only questions worth stopping for before checkout."
          />
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="final-cta" id="order">
          <div>
            <p className="detail-label">Ready to order</p>
            <h2>One bottle. A sharper daily standard.</h2>
            <p>
              If your beard feels dry, rough, or unfinished by midday, Modern Lumber gives you a
              more considered option than heavy oils and loud fragrance profiles. Order directly on
              WhatsApp and keep the routine simple.
            </p>
          </div>
          <div className="cta-side">
            <div className="cta-price">
              <span>MRP</span>
              <strong>{price}</strong>
              <small>{volume} | Quick WhatsApp checkout</small>
            </div>
            <a className="button button-primary" href={orderLink} target="_blank" rel="noreferrer">
              Buy {productName}
            </a>
          </div>
        </section>
      </main>

      <div className="mobile-order-bar">
        <div>
          <span>{productName}</span>
          <strong>
            {price} | {volume}
          </strong>
        </div>
        <a href={orderLink} target="_blank" rel="noreferrer">
          Order
        </a>
      </div>
    </>
  );
}
