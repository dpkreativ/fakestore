import Button from "../components/button/button";
import heroImg from "../assets/image.png";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div>
          <h1 className="hero-title">Welcome to Fake Store</h1>
          <p>We have a wide range of 20 different products you can buy!</p>

          <Button>Shop Now</Button>
        </div>

        <div className="hero-img-box">
          <img src={heroImg} alt="fake store hero" />
        </div>
      </section>
    </main>
  );
}
