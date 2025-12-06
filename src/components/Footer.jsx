import React from "react";
import Testimonials from "./Testimonials";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A2A43] text-white pt-12 pb-6">
      <Testimonials />

      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">APD Driving School</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Professional driving lessons to help you become a safe and confident
            driver in Adelaide.
          </p>
        </div>

        {/* Service Area */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Service Areas</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Adelaide</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect with us</h3>

          <div className="flex gap-5 text-xl text-white">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-sm mt-10 pt-6 border-t border-gray-700">
        © {new Date().getFullYear()} APD Driving School. All rights reserved.
      </div>
    </footer>
  );
}
