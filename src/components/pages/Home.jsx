import React from 'react'
import Hero from '../Hero'


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#0A2A43] mb-8">
            Why Choose Adelaide Pro Driving School?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#0E9F6E]">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#0A2A43] mb-8">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {learnItems.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#0E9F6E]">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}

// Data Lists
const whyChoose = [
  {
    title: "VORT Experts",
    desc: "Step-by-step coaching aligned to SA's Vehicle On Road Test. We know exactly what examiners look for."
  },
  {
    title: "Patient Instructors",
    desc: "Calm, friendly guidance for beginners, nervous drivers & overseas licence conversions."
  },
  {
    title: "Modern Dual-Control Car",
    desc: "Clean, well-maintained vehicle with dual controls to keep every lesson safe & comfortable."
  },
  {
    title: "Flexible Scheduling",
    desc: "Weekdays, after-hours & weekends. Lessons that suit your lifestyle."
  },
  {
    title: "Pick-up & Drop-off",
    desc: "Home, school, uni or work — anywhere in Adelaide metro area."
  },
  {
    title: "Transparent Pricing",
    desc: "Clear pricing. No hidden fees. What you see is what you pay."
  },
];

const learnItems = [
  {
    title: "Vehicle Setup & Controls",
    desc: "Master seat position, mirrors & controls for safety."
  },
  {
    title: "Road Rules for SA",
    desc: "Lane discipline, traffic signs, & SA road rule knowledge."
  },
  {
    title: "Parking Manoeuvres",
    desc: "Nail reverse, angle & parallel parking with confidence."
  },
  {
    title: "Advanced Techniques",
    desc: "Roundabouts, merging, gap selection & more."
  },
  {
    title: "Test Preparation",
    desc: "Mock VORT tests with real-time expert feedback."
  },
  {
    title: "Speed Management",
    desc: "Safe speed selection, smooth stops & hazard awareness."
  },
];
