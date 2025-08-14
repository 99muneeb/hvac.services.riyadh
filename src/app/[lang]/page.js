"use client";
import { useEffect } from "react";
import "../../app/globals.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import Welcome from "@/components/Welcome";
import ServiceSelection from "@/components/serviceSection";
import Header from "@/components/common/Header";
import HeroSection from "@/components/HeroSection";

export default function HomePage({ params }) {
  const { lang } = params;
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      {/* <Welcome /> */}
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="lg:w-[30%] h-[30%] lg:h-full ">
          <ServiceSelection />
        </div>
        <div className="lg:w-[70%] h-[70%] lg:h-full">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
