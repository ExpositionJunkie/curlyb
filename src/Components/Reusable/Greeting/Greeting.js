import React from "react";
import { useTranslation } from "react-i18next";

export default function Greeting() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("greeting")}</h1>
      <h2>{t("soon")}</h2>
    </div>
  );
}
