import Article from "../Article/Article";
import styles from "./Services.module.css";
import { services, serviceCards } from "../../data/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faSoap } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

export default function Services() {
  return (
    <section className={styles.services}>
      <Article {...services} additionalClass="article_center" />
      <div className={styles.cards}>
        {serviceCards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div>
              <FontAwesomeIcon
                className={styles.card__icon}
                icon={faSoap}
                style={{
                  color: `${card.color}`,
                  backgroundColor: `${card.bgcolor}`,
                }}
              />
            </div>
            <h3 className={styles.card__title}>{card.title}</h3>
            <p className={styles.card__text}>{card.text}</p>
            <FontAwesomeIcon
              style={{ color: `${card.color}` }}
              className={styles.card__arrow}
              icon={faArrowRightLong}
            />
          </div>
        ))}
      </div>
      <Button>All Services</Button>
    </section>
  );
}
