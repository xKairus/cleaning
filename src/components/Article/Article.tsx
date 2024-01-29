import React from "react";
import styles from "./Article.module.css";

interface ArticleProps {
  tag: string;
  title: string;
  text: string[];
}

const Article: React.FC<ArticleProps> = ({ tag, title, text }) => {
  return (
    <article className={styles.article}>
      <span className={styles.tag}>{tag}</span>
      <h2 className={styles.title}>{title}</h2>
      {text.map((item: string, index: number) => (
        <p key={index} className={styles.text}>
          {item}
        </p>
      ))}
    </article>
  );
};

export default Article;
