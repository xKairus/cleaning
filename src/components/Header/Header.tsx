import logo from "./../../assets/Logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <img src="" alt="call us" />
        <span>Call us now</span>
        <span>+1(243)421 4121</span>
      </div>
    </header>
  );
}
