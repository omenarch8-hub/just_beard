import Image, { type StaticImageData } from "next/image";
import heroShot from "@/images/2e80661a-981a-49b5-bbfc-b0b13610ce06.jpg";
import detailShot from "@/images/5127da6d-d02b-46bb-b70e-d8411841d468.jpg";
import angleShot from "@/images/f177ee2d-bec0-436b-8e5f-244b598bb425.jpg";

const brandName = "JUST_BEARD";
const productName = "Modern Lumber Beard Oil";
const scentProfile = "Tobacco Vanilla";
const volume = "30ML";
const price = "399";
const displayPrice = `₹${price}`;
const whatsappNumber = "917015684448";
const orderMessage = encodeURIComponent(
  `Hi ${brandName}, I want to order ${productName} in ${scentProfile} (${volume}) at ${displayPrice}. Please share the next step.`,
);
const orderLink = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;

const galleryShots: Array<{
  src: StaticImageData;
  alt: string;
}> = [
  {
    src: heroShot,
    alt: "Just Beard Modern Lumber beard oil product photo, primary view",
  },
  {
    src: detailShot,
    alt: "Just Beard Modern Lumber beard oil product photo, detail view",
  },
  {
    src: angleShot,
    alt: "Just Beard Modern Lumber beard oil product photo, alternate view",
  },
];

const productPrinciples = [
  {
    title: "Softer texture",
    text: "Jojoba, almond, argan, and castor help coarse beard hair feel softer, easier to shape, and less dry through the day.",
  },
  {
    title: "Calmer skin underneath",
    text: "Massage it below the beard to condition the skin where dryness and itch usually start.",
  },
  {
    title: "Clean, low-shine finish",
    text: "The lightweight feel keeps your beard looking maintained, not oily or overdone.",
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

        <section className="quick-order-section" id="top" aria-labelledby="quick-order-title">
          <div className="quick-order-copy">
            <p className="detail-label">Softens rough beards without the greasy finish.</p>
            <h2 id="quick-order-title">
              A lightweight beard oil for softer texture, calmer skin, and a cleaner finish.
            </h2>
            <p>
              Modern Lumber is a {volume} hand-poured beard oil made to soften coarse hair,
              condition the skin underneath, and leave your beard looking maintained instead of
              oily. Finished with warm tobacco vanilla and cedarwood.
            </p>
            <div className="quick-order-actions">
              <a className="button button-primary" href={orderLink} target="_blank" rel="noreferrer">
                Order for {displayPrice} on WhatsApp
              </a>
              <a className="button button-secondary" href="#formula">
                Review the Formula
              </a>
            </div>
            <div className="quick-order-meta" aria-label="Order summary">
              <span>{displayPrice}</span>
              <span>{volume}</span>
              <span>{scentProfile}</span>
            </div>
          </div>

          <div className="product-auto-carousel" aria-label="Self-changing product image carousel">
            {galleryShots.map((shot, index) => (
              <figure className="product-auto-slide" key={shot.alt}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="product-auto-image"
                  priority={index === 0}
                />
              </figure>
            ))}
            <div className="product-carousel-dots" aria-hidden="true">
              {galleryShots.map((shot) => (
                <span key={shot.alt} />
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="benefits">
          <SectionIntro
            eyebrow="Why This Bottle"
            title="Softens the beard. Calms the skin. Keeps the finish clean."
            copy="Modern Lumber is made for daily use: enough conditioning to improve feel and control, without the heavy shine or loud fragrance."
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
            title="Questions before you order."
            copy="The essentials on scent, beard length, bottle life, and checkout."
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
            <h2>Start with one {volume} bottle.</h2>
            <p>
              If your beard feels dry, rough, or unfinished by midday, Modern Lumber gives you a
              simple daily fix: softer texture, cleaner finish, and quick WhatsApp checkout.
            </p>
          </div>
          <div className="cta-side">
            <div className="cta-price">
              <span>Price</span>
              <strong>{displayPrice}</strong>
              <small>
                {volume} | Quick WhatsApp checkout
              </small>
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
            {displayPrice} | {volume}
          </strong>
        </div>
        <a href={orderLink} target="_blank" rel="noreferrer">
          Order
        </a>
      </div>
    </>
  );
}
