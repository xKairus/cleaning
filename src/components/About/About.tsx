import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__info}>
        <span>About Us</span>
        <h2>Why will you choose our Services?</h2>
        <p>
          Our services go beyond the basic services and provide you with a clean
          the that will Cleaning services of the reenergize your home and
          enhance your life.
        </p>
        <p>
          Our services go beyond the basic services and provide you with
          reenergize your home and enhance your life.
        </p>
        <button>Read More</button>
      </div>
    </section>
  );
}
