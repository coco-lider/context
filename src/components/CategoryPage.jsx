import React, { useEffect } from "react";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { getCategories } from "../api/api";
import { useTranslation } from "react-i18next";

const CategoryPage = () => {
  const { state, dispatch } = useProductContext();
  const { t ,i18n} = useTranslation();


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

  if (state.loading) return <div>{t("loading")}</div>;
  if (state.error)
    return (
      <div>
        {t("error")}: {state.error}
      </div>
    );


  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("uz")}>UZ</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>

      <h2>{t("categories")}</h2>
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
