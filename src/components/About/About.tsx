import React from "react";
import Article from "../Article/Article";
import Button from "../Button/Button";
import styles from "./About.module.css";
import { about } from "../../data/typography";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__info}>
        <Article {...about} />
        <Button>Read More</Button>
      </div>
    </section>
  );
};

export default About;
