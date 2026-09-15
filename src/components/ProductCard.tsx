import { Link } from "react-router-dom";
import type { Product } from "../types";
import "../assets/styles/productCard.css";

const categoryEmoji: Record<string, string> = {
  tech: "⚡",
  study: "📖",
  dorm: "🏠",
  wellness: "🤍",
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/products/${product.id}`} className="card">
      <div className={`card-art ${product.category}`}>
        <span className="card-badge">
          {categoryEmoji[product.category]} {product.category}
        </span>
        <span className="card-wordmark">{product.wordmark}</span>
      </div>
      <div className="card-title-row">
        <h3>{product.name}</h3>
        <span className="card-price"> ₦{product.price.toFixed(2)}</span>
      </div>
      <p className="card-rating">
        ⭐ {product.rating} ({product.reviewCount})
      </p>
      <div className="card-tags">
        {product.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProductCard;
