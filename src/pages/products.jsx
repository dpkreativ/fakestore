import ProductCard from "../components/cards/product-card";

export default function Products() {
  return (
    <main>
      <h2>All products</h2>

      <section className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
