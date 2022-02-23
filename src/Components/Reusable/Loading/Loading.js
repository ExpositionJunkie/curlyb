import React from "react";
import { useTranslation } from "react-i18next";

//TODO add animation

export default function Loading(props) {
  const { t } = useTranslation();
  return <>{t("loading")}</>;
}
