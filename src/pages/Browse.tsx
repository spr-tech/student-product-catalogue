import { useEffect, useState } from "react";
import type { Product, SortKey } from "../types";
import { getProducts } from "../services/product";
import { CATEGORIES } from "../data/product";
import ProductCard from "../components/ProductCard";
import "../assets/styles/browse.css";

const Browse = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("featured");

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading…</p>;

  // Step 1: narrow by search text
  const searched = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Step 2: narrow by selected category
  const filtered = searched.filter(
    (p) => category === "all" || p.category === category,
  );

  // Step 3: order the result. Copy first — sort mutates in place.
  const visible = [...filtered].sort((a, b) => {
    if (sortKey === "price-asc") return a.price - b.price;
    if (sortKey === "price-desc") return b.price - a.price;
    if (sortKey === "rating") return b.rating - a.rating;
    return a.featured - b.featured;
  });

  return (
    <div className="browse">
      <div className="controls">
        <input
          className="search-input"
          placeholder="Search the shelf..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="sort-select"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as SortKey)}
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>

      <div className="chip-row">
        <button
          className={category === "all" ? "chip active" : "chip"}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={category === c ? "chip active" : "chip"}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
