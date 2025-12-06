import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/djwiqbwef/image/upload/v1765038600/Generate_a_high_202512070327-removebg-preview_yzbtsu.png"
            className="h-25 w-25"
            alt="APD Driving School"
          />
        </div>

        {/*Uni Menu */}
        <ul className="hidden md:flex gap-8 text-[#0A2A43] font-semibold">
          <li>
            <Link className="hover:text-[#0E9F6E] transition duration-200" to="/">Home</Link>
          </li>

          <li>
            <Link className="hover:text-[#0E9F6E] transition duration-200" to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link className="hover:text-[#0E9F6E] transition duration-200" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="hover:text-[#0E9F6E] transition duration-200" to="/Services">Services</Link>
          </li>
          <li>
            <Link className="hover:text-[#0E9F6E] transition duration-200" to="/About">About us</Link>
          </li>
          <li>
            <Link
              className="bg-[#0E9F6E] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-700"
              to="tel:61449955552"
            >
              0449 955 552
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#0A2A43]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </nav>
      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-6 px-6 space-y-4 text-[#0A2A43] font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Services
          </Link>
          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Contact
          </Link>

           <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            About us
          </Link>

          <Link
            className="bg-[#0E9F6E] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-700"
            to="tel:61449955552"
          >
            0449 955 552
          </Link>
        </div>
      )}
      ;
    </header>
  );
}


