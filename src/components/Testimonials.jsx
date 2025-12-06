import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah W.",
    text: "Amazing instructor! Helped me gain confidence and pass my test on the first try!",
    rating: 5,
  },
  {
    name: "James L.",
    text: "Very patient and professional. Lessons were always helpful and enjoyable.",
    rating: 5,
  },
  {
    name: "Priya R.",
    text: "Best driving school in Adelaide! Highly recommend for nervous beginners!",
    rating: 5,
  },
  {
    name: "Tom B.",
    text: "Great car, great lessons, and great results. Couldn’t ask for more!",
    rating: 5,
  },
  {
    name: "Linda Z.",
    text: "Flexible scheduling and very friendly. Passed VORT confidently!",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef();

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 2;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#0A2A43] text-white overflow-hidden">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        What Our Students Say
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide px-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
          >
            <p className="text-sm italic opacity-90 mb-3">"{t.text}"</p>

            <div className="flex text-yellow-400 mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>

            <h4 className="font-bold text-white">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
