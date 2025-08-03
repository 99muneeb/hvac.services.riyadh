export default function ServiceSelection() {
  return (
    <>
      {/* Left Side (25%) */}
      <div className="bg-white rounded-lg border p-4 shadow">
        <h2 className="text-lg font-semibold mb-4">اختر خدمة</h2>
        <hr className="border-gray-300 mb-4" />

        {/* Service Cards */}
        <div className="flex flex-row gap-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-3 hover:shadow-md cursor-pointer">
            <img
              src="/images/foam-cleaning.jpg"
              alt="تنظيف عميق"
              className="w-20 h-20 object-cover rounded"
            />
            <p className="mt-2 text-center text-sm font-medium">تنظيف عميق</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-3 hover:shadow-md cursor-pointer">
            <img
              src="/images/repair.jpg"
              alt="إصلاح"
              className="w-20 h-20 object-cover rounded"
            />
            <p className="mt-2 text-center text-sm font-medium">إصلاح</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-3 hover:shadow-md cursor-pointer">
            <img
              src="/images/install-uninstall.jpg"
              alt="تركيب وفك"
              className="w-20 h-20 object-cover rounded"
            />
            <p className="mt-2 text-center text-sm font-medium">تركيب وفك</p>
          </div>
        </div>
      </div>
    </>
  );
}
