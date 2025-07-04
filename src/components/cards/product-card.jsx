import Button from "../button/button";
import styles from "./product-card.module.css";

export default function ProductCard() {
  return (
    <div className={styles.ProductCardContainer}>
      <div className={styles.productCategory}>men's clothing</div>

      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="Alexander Wang Shoes"
        className={styles.productImg}
      />
      <h3 className={styles.productTitle}>
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </h3>

      <div className={styles.productCardFooter}>
        <p className={styles.productPrice}>$109.95</p>

        <Button>Shop Now</Button>
      </div>
    </div>
  );
}
