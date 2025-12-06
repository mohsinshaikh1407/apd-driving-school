import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          
          <h1 className="text-2xl font-bold text-[#0A2A43]">
            APD Driving School
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-[#0A2A43] font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
        
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="tel:+61468123456"
          className="bg-[#0E9F6E] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-700"
        >
          0468 123 456
        </a>
      </div>
    </nav>
  );
}

