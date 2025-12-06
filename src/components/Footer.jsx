import React from 'react'
import Testimonials from './Testimonials';

export default function Footer() {
  return (
    <footer className="bg-[#0A2A43] text-white pt-12 pb-6">

      <Testimonials/>
    
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-6">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">APD Driving School</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Professional driving lessons to help you become a safe and confident
            driver in Melbourne.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-[#0E9F6E]">Home</a></li>
            <li><a href="/pricing" className="hover:text-[#0E9F6E]">Pricing & Packages</a></li>
            <li><a href="/services" className="hover:text-[#0E9F6E]">Driving Lessons</a></li>
            <li><a href="/contact" className="hover:text-[#0E9F6E]">Contact Us</a></li>
          </ul>
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
          <h3 className="font-semibold text-lg mb-3">Connect with Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" target="_blank" className="hover:text-[#0E9F6E] text-2xl">📞</a>
            <a href="https://wa.me/61468123456" target="_blank" className="hover:text-[#0E9F6E] text-2xl">🟢</a>
            <a href="#" target="_blank" className="hover:text-[#0E9F6E] text-2xl">📘</a>
            <a href="#" target="_blank" className="hover:text-[#0E9F6E] text-2xl">📸</a>
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
