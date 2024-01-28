import logo from "./../../assets/Logo.svg";
import callIcon from "./../../assets/call_icon.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.active}>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={styles.call}>
        <img src={callIcon} alt="call us" />
        <div className={styles.call__info}>
          <span>Call us now</span>
          <span>+1(243)421 4121</span>
        </div>
      </div>
    </header>
  );
}
