import { whyUs, whyUsCards } from "../../data/typography";
import Article from "../Article/Article";
import Button from "../Button/Button";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  return (
    <section className={styles.WhyUs}>
      <div className={styles.whyUsInfo}>
        <Article {...whyUs} />

        <ul>
          {whyUsCards.map((card, index) => (
            <li>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </li>
          ))}
        </ul>

        <Button>Contact Us</Button>
      </div>
    </section>
  );
}
