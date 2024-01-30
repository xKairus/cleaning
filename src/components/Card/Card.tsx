import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faSoap } from "@fortawesome/free-solid-svg-icons";

interface cardProps {
  showArrow: boolean;
  index: number;
  card: {
    color: string;
    bgcolor: string;
    title: string;
    text: string;
  };
}

export default function Card({ card, index, showArrow = false }: cardProps) {
  return (
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
      {showArrow && (
        <FontAwesomeIcon
          style={{ color: `${card.color}` }}
          className={styles.card__arrow}
          icon={faArrowRightLong}
        />
      )}
    </div>
  );
}
