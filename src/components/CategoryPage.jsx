import React, { useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { getCategories } from "../api/api";

const CategoryPage = () => {
  const { state, dispatch } = useProductContext();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        dispatch({ type: "SET_LOADING" });
        const data = await getCategories();
        const formatted = data.map((name, index) => ({ id: index + 1, name }));
        dispatch({ type: "SET_CATEGORIES", payload: formatted });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    };

    fetchCategories();
  }, [dispatch]);

  if (state.loading) return <div>Yuklanmoqda...</div>;
  if (state.error) return <div>Xatolik: {state.error}</div>;

  return (
    <div>
      <h2>Kategoriyalar</h2>
      <ul>
        {state.categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`/products/${cat.name}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
