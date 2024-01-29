import Article from "../Article/Article";
import styles from "./Services.module.css";
import { services, serviceCards } from "../../data/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faSoap } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className={styles.services}>
      <Article {...services} />
      {serviceCards.map((card) => (
        <div className={styles.card}>
          <div className={styles.card__icon}>
            <FontAwesomeIcon icon={faSoap} />
          </div>
          <h3 className={styles.card__title}>{card.title}</h3>
          <p className={styles.card__text}>{card.text}</p>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </div>
      ))}
    </section>
  );
}
