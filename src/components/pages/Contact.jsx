import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(event.target);
    const response = await fetch("https://formspree.io/f/mwpeayek", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Your message has been sent successfully!");
      event.target.reset();
    } else {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-[#0A2A43] mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-6">
          Have questions? Need a booking? Send us a message and we’ll reply ASAP.
        </p>

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-lg">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E9F6E]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E9F6E]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E9F6E]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E9F6E]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#0E9F6E] w-full py-3 text-white rounded-xl font-semibold hover:bg-green-700"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm font-semibold mt-2 text-[#0A2A43]">
              {status}
            </p>
          )}
        </form>

        {/* CONTACT DETAILS */}
        <div className="mt-10 text-gray-700">
          <p><strong>Phone:</strong> <a href="tel:+61468123456" className="text-[#0E9F6E]">+61 468123456</a></p>
          <p><strong>Service Area:</strong> Adelaide & nearby suburbs</p>
          <p><strong>Hours:</strong> Mon–Sat | 8AM – 8PM</p>
        </div>

      </div>
    </div>
  );
}
