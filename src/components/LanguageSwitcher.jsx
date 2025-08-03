"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ lang }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (lng) => {
    const newPath = pathname.replace(`/${lang}`, `/${lng}`);
    router.push(newPath);
  };

  return (
    <div className="mb-5 space-x-3">
      <button onClick={() => switchLanguage("ar")}>العربية</button>
      <button onClick={() => switchLanguage("en")}>English</button>
    </div>
  );
}
