import { workProcess, workProcessCards } from "../../data/typography";
import Article from "../Article/Article";
import Card from "../Card/Card";
import styles from "./WorkProcess.module.css";

export default function WorkProcess() {
  return (
    <section className={styles.workProcess}>
      <Article {...workProcess} additionalClass="workProcess" />
      <div className={styles.cards}>
        {workProcessCards.map((card, index) => (
          <Card card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
