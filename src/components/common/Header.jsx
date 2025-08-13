// components/Header.jsx
export default function Header() {
  return (
    <>
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center">
          <img
            className="w-40"
            src="../../assets/Logo/LOGO_cropped.png"
            alt=""
          />
        </div>
      </div>

      {/* Middle: Location + Search */}
      <div className="flex items-center gap-2 w-full max-w-md">
        {/* Search */}
        <div className="flex items-center border rounded-md px-3 py-2 gap-2 text-gray-600 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17.65 17.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.15 14.65z"
            />
          </svg>
          <input
            type="text"
            placeholder="ابحث في تنظيف وإصلاح المكيفات"
            className="outline-none bg-transparent w-full text-sm"
          />
        </div>
      </div>

      {/* Right: Phone */}
      <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700">
        📞 +966 57 803 5338
      </div>
    </>
  );
}
