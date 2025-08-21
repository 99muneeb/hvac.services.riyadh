import { Check } from "lucide-react";

export default function UCPromiseCard() {
  return (
    <div className="w-full">
      <div className="border border-gray-300 rounded shadow-md p-4 bg-white flex">
        <ul className="space-y-2 text-gray-700">
          <h2 className="text-lg font-semibold mb-3">UC Promise</h2>

          <li className="flex items-center gap-2">
            <Check className=" text-green-600" />
            <span className=" text-sm"> Verified Professionals</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className=" text-green-600 text-sm" />
            <span className=" text-sm">Hassle Free Booking</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className=" text-green-600" />
            <span className=" text-sm">Transparent Pricing</span>
          </li>
        </ul>
        <div className="mt-4 flex justify-center">
          <img
            src="/assets/Services_Images/quality.jpeg" // 👉 replace with your "Quality Assured" image path
            alt="Quality Assured"
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
