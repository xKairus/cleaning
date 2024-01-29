import Button from "../Button/Button";
import cleaner from "./../../assets/cleaner.png";
import styles from "./Welcome.module.css";
import { welcome, stats } from "./../../data/typography.tsx";

export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome__info}>
        <div className={styles.welcome__about}>
          <h1 className={styles.welcome__title}>{welcome.title}</h1>
          <p className={styles.welcome__text}>{welcome.text}</p>
          <Button>{welcome.btn}</Button>
        </div>
        <div className={styles.welcome__stats}>
          <ul className={styles.welcome__list}>
            {stats.map((stat) => (
              <li className={styles.welcome__stat}>
                <span>{stat.number}</span>
                <br /> {stat.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.welcome__imgs}>
        <img src={cleaner} alt="cleaner" />
      </div>
    </section>
  );
}
