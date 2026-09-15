import { useEffect, useState } from "react";
import type { Product } from "../types";
import { getProducts } from "../services/product";

const Browse = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setisLoading] = useState(true);
  
  useEffect(() => {
    getProducts().then((data) => {
      setProduct(data);
      setisLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading…</p>;
  }

  return (
    <>
      <div>
        {product.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </>
  );
};

export default Browse;
