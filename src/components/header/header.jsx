import Button from "./button/button";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>Fake Store Ltd.</div>

      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <Button />
      </nav>
    </header>
  );
}
