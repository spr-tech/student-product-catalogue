import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { Product } from "../types";
import { getProductById } from "../services/product";
import "../assets/styles/productDetails.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getProductById(Number(id)).then((data) => {
      setProduct(data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <p>Loading…</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="detail">
      <Link to="/" className="back-link">
        ← Back to shelf
      </Link>

      <div className={`detail-art ${product.category}`}>
        <span className="detail-wordmark">{product.wordmark}</span>
      </div>

      <h1>{product.name}</h1>
      <p className="detail-price">${product.price.toFixed(2)}</p>
      <p className="detail-rating">
        ⭐ {product.rating} ({product.reviewCount} reviews)
      </p>
      <p className="detail-description">{product.description}</p>

      <div className="detail-tags">
        {product.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
