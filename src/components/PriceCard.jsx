import { CheckIcon } from "@heroicons/react/24/solid";

export default function PriceCard({
  title,
  type,
  price,
  oldPrice,
  features,
  highlight,
  buttonLabel = "Book Now",
  onClick
}) {
  return (
    <div
      className={`rounded-2xl shadow-2xl p-6 transition-transform duration-300 hover:-translate-y-2 ${
        highlight ? "bg-[#0E9F6E] text-white scale-105" : "bg-white text-[#0A2A43]"
      }`}
    >
      {/* Highlight badge */}
      {highlight && (
        <span className="bg-white text-[#0E9F6E] px-3 py-1 rounded-full text-xs font-bold absolute -mt-8">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold">{title}</h3>
      <p className={`text-sm mt-1 ${highlight ? "text-white/90" : "text-gray-500"}`}>{type}</p>

      <div className="mt-4 mb-6">
        {oldPrice && (
          <p className="text-sm line-through opacity-70">{oldPrice}</p>
        )}
        <p className="text-4xl font-extrabold">{price}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <CheckIcon className="w-5 h-5 text-[#0E9F6E]" />
            <span className={highlight ? "text-white" : "text-[#0A2A43]"}>{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className={`w-full py-3 rounded-xl font-semibold shadow-lg ${
          highlight
            ? "bg-white text-[#0E9F6E] hover:bg-gray-200"
            : "bg-[#0E9F6E] text-white hover:bg-green-700"
        }`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
