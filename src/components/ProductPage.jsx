import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/api";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";

const ProductPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { t, i18n } = useTranslation();
  
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };

  useEffect(() => {
    const load = async () => {
      const result = await getProductsByCategory(categoryId);
      setProducts(result);
    };
    load();
  }, [categoryId]);

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("uz")}>UZ</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
      <h2>{t("products", { category: categoryId })}</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
