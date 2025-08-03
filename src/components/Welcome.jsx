"use client";
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();
  return <h1 className="text-2xl font-bold  text-center ">{t("welcome")}</h1>;
}
