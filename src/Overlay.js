import React, { forwardRef } from "react";

const sections = [
  {
    height: "400vh",
    title: "Futuristic",
    description:
      "Discover the essence of advanced exploration with the Futuristic Visor Helmet, featuring a clear visor and interactive display. It's the pioneer's choice for a seamless blend of visibility and virtuality, designed for the intrepid adventurer."
  },
  {
    height: "200vh",
    title: "Side View",
    description:
      "The side view of the Futuristic Visor Helmet highlights its aerodynamic design and integrated communication systems. Built for endurance and adaptability, this helmet is for the trailblazers on the cutting edge of discovery."
  },
  {
    height: "200vh",
    title: "Rear View",
    description:
      "The rear view of the Futuristic Visor Helmet reveals the support structure that underpins its advanced capabilities. This angle showcases the helmet's robust design, ready to connect you to the vast expanse of uncharted territories."
  },
  {
    height: "200vh",
    title: "Quarter View",
    description:
      "Glimpse the future through the quarter view of the Futuristic Visor Helmet, where design meets function in a dance of modern aesthetics. It's the armor of choice for those who dare to venture beyond the known horizon."
  },
  {
    height: "200vh",
    title: "Three-Quarter View",
    description:
      "The three-quarter view of the Futuristic Visor Helmet captures its essence of resilience and technological prowess. Each scar tells a story of challenges faced and overcome, a true companion in the odyssey of exploration."
  },
  {
    height: "200vh",
    title: "Partial Side View",
    description:
      "The partial side view of the Futuristic Visor Helmet illustrates the fusion of safety and style. It’s a testament to the daring deeds of those who wear it, a silent ally in the narrative of discovery."
  },
  {
    height: "200vh",
    title: "Close-Up",
    description:
      "Up close, the Futuristic Visor Helmet is a detailed map of adventures yet to come, a symbol of the journey into the unknown. It stands ready to guide the next generation of explorers, the vanguard of virtual frontiers."
  }
];

const Section = ({ title, description, alignRight }) => (
  <div className={`productDescription ${alignRight ? 'right' : ''}`}>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current.toFixed(2);
    }}
    className="scroll"
  >
    {sections.map((section, index) => (
      <div key={index} className={`scrollSection ${index % 2 === 0 ? '' : 'right'}`}>
        <Section
          title={section.title}
          description={section.description}
          alignRight={index % 2 !== 0}
        />
      </div>
    ))}
    <div className="footer">
      <span>The Future is Here: Futuristic Visor Helmet</span><br />
      <span className="caption" ref={caption}>0.00</span>
    </div>
  </div>
));

export default Overlay;