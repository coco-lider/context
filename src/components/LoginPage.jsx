import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogin = () => {
    navigate("/category");
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("uz")}>UZ</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>

      <h2>{t("login")}</h2>
      <button onClick={handleLogin}>{t("login")}</button>
    </div>
  );
};

export default LoginPage;
