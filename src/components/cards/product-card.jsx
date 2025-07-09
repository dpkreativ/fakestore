import Button from "../button/button";
import styles from "./product-card.module.css";

export default function ProductCard({
  category = "mens clothing",
  img = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  title = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price = 109.95,
}) {
  return (
    <div className={styles.ProductCardContainer}>
      <div className={styles.productCategory}>{category}</div>

      <img src={img} alt={title} className={styles.productImg} />
      <h3 className={styles.productTitle}>{title}</h3>

      <div className={styles.productCardFooter}>
        <p className={styles.productPrice}>${price}</p>

        <Button>Shop Now</Button>
      </div>
    </div>
  );
}
