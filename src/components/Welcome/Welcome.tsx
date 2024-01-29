import Button from "../Button/Button";
import cleaner from "./../../assets/cleaner.png";
import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcome__info}>
        <div className={styles.welcome__about}>
          <h1 className={styles.welcome__title}>
            Cleaning Service From World Class Agency.
          </h1>
          <p className={styles.welcome__text}>
          Elevate your living space with our professional cleaning services. Our dedicated team ensures a spotlessly clean and healthy home.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className={styles.welcome__stats}>
          <ul className={styles.welcome__list}>
            <li className={styles.welcome__stat}>
              <span>345</span>
              <br /> Projects Done
            </li>
            <li className={styles.welcome__stat}>
              <span>1450+</span>
              <br /> Satisfied Clients
            </li>
            <li className={styles.welcome__stat}>
              <span>100+</span>
              <br /> Award Winner
            </li>
            <li className={styles.welcome__stat}>
              <span>40+</span>
              <br /> Team Members
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.welcome__imgs}>
        <img src={cleaner} alt="cleaner" />
      </div>
    </section>
  );
}
