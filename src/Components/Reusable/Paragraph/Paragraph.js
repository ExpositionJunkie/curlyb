import React from "react";
import { useTranslation } from "react-i18next";

export default function Paragraph() {
  const { t } = useTranslation();

  return <h1>{t("text")}</h1>;
}
