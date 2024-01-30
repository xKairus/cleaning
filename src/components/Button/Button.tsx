import { ReactNode } from "react";
import styles from "./Button.module.css";

interface buttonProps {
  children: ReactNode;
}

export default function Button({ children }: buttonProps) {
  return <button className={styles.btn}>{children}</button>;
}
