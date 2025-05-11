import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/api";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const result = await getProductsByCategory(categoryId);
      setProducts(result);
    };
    load();
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId} mahsulotlari</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
