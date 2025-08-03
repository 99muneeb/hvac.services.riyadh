"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import gbFlag from "@/assets/united-kingdom.png";
import saFlag from "@/assets/flag.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const languages = [
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
    dir: "ltr",
  },
];

const LengDropdown = () => {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  const changeLanguage = (code) => {
    cookies.set("i18next", code);
    const pathSegments = pathname.split("/");
    pathSegments[1] = code;
    const newPath = pathSegments.join("/") || "/";
    router.push(newPath);
    i18next.changeLanguage(code);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdown.current &&
        !dropdown.current.contains(e.target) &&
        !trigger.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2"
      >
        <div title="Language" className="flex gap-1 items-center">
          {currentLanguage?.country_code === "gb" ? (
            <Image src={gbFlag} className="h-7 w-7 object-cover" alt="EN" />
          ) : (
            <Image src={saFlag} className="h-7 w-7 object-cover" alt="AR" />
          )}
        </div>
        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
        >
          <path
            d="M0.41 0.91C0.736 0.585 1.264 0.585 1.589 0.91L6 5.32 10.411 0.91C10.736 0.585 11.264 0.585 11.589 0.91C11.915 1.236 11.915 1.764 11.589 2.089L6.589 7.089C6.264 7.415 5.736 7.415 5.411 7.089L0.411 2.089C0.085 1.764 0.085 1.236 0.41 0.91Z"
            fill=""
          />
        </svg>
      </button>

      <div
        ref={dropdown}
        className={`absolute right-0 mt-2 w-32 rounded border bg-white shadow z-50 ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col px-3 py-2">
          {languages.map(({ code, name, country_code }) => (
            <li key={code}>
              <button
                className="flex items-center gap-3 py-2 text-sm w-full hover:text-[#F2931D]"
                onClick={() => changeLanguage(code)}
                disabled={code === currentLanguageCode}
              >
                <Image
                  src={country_code === "gb" ? gbFlag : saFlag}
                  className="h-5 w-5 object-cover"
                  alt={code}
                />
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LengDropdown;
