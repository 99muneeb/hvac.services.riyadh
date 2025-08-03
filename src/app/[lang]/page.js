"use client";
import { useEffect } from "react";
import "../../app/globals.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import Welcome from "@/components/Welcome";
import ServiceSelection from "@/components/serviceSection";

export default function HomePage({ params }) {
  const { lang } = params;
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <Welcome />
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="lg:w-[25%] h-[25%] lg:h-full bg-blue-200">
          <ServiceSelection />
        </div>
        <div className="lg:w-[75%] h-[75%] lg:h-full bg-green-200">Part 2</div>
      </div>
    </>
  );
}
