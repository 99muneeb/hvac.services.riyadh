"use client";
import { usePathname, useRouter } from "next/navigation";
import Header from "./common/Header";

export default function LanguageSwitcher({ lang }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (lng) => {
    let newPath = pathname;

    // Replace language segment if present
    if (pathname.startsWith("/ar") || pathname.startsWith("/en")) {
      newPath = pathname.replace(/^\/(ar|en)/, `/${lng}`);
    } else {
      newPath = `/${lng}${pathname}`;
    }

    router.push(newPath);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Header />
          <div className="flex items-center gap-2">
            <button
              onClick={() => switchLanguage("ar")}
              className={`px-3 py-1 rounded-md text-sm ${
                lang === "ar"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`px-3 py-1 rounded-md text-sm ${
                lang === "en"
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
