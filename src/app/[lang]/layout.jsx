import "../../app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ✅ This is only allowed in server components
export const metadata = {
  title: "Multilingual App",
  description: "Next.js with i18n",
};

export default function RootLayout({ children, params }) {
  const { lang } = params; // ✅ this is safe in server components
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-24`}
      >
        <LanguageSwitcher lang={lang} />
        {children}
      </body>
    </html>
  );
}
