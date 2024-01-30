import React from "react";
import styles from "./Article.module.css";

interface ArticleProps {
  tag: string;
  title: string;
  text?: string[];
  additionalClass?: string;
}

const Article: React.FC<ArticleProps> = ({
  tag,
  title,
  text,
  additionalClass = "",
}) => {
  console.log("additionalClass:", additionalClass);
  return (
    <article className={`${styles.article} ${styles[additionalClass]}`}>
      <span className={styles.tag}>{tag}</span>
      <h2 className={styles.title}>{title}</h2>
      {text?.map((item: string, index: number) => (
        <p key={index} className={styles.text}>
          {item}
        </p>
      ))}
    </article>
  );
};

export default Article;
