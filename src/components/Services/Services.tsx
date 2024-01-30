import Article from "../Article/Article";
import styles from "./Services.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { services, serviceCards } from "../../data/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faSoap } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className={styles.services}>
      <Article {...services} additionalClass="article_center" />
      <div className={styles.cards}>
        {serviceCards.map((card, index) => (
          <Card card={card} index={index} showArrow={true} />
        ))}
      </div>
      <Button>All Services</Button>
    </section>
  );
}
