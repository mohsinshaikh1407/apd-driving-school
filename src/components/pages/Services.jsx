
export default function Services() {
  return (
    <div className="my-10 pt-24 pb-20 text-[#0A2A43]">

      {/* Driving Lessons Tailored */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Driving Lessons Tailored to You
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Structured lessons designed for your skill level,
            learning style, and goals. From complete beginners to test-ready students.
          </p>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Who We Help
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whoWeHelp.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0E9F6E]">{item.title}</h3>
              <ul className="mt-3 text-sm text-gray-600 space-y-1 text-left">
                {item.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson Process */}
      <section className="bg-[#0A2A43] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-12">How a Typical Lesson Works</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {lessonProcess.map((step, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <div className="text-[#0E9F6E] text-4xl font-extrabold">{i + 1}</div>
                <h3 className="text-xl font-bold mt-4">{step.title}</h3>
                <p className="text-sm text-gray-200 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Length Options */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12">Lesson Lengths</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {lessonLengths.map((lesson, i) => (
            <div key={i} className="bg-white p-6 shadow-lg rounded-xl border">
              <h3 className="text-2xl font-bold">{lesson.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{lesson.desc}</p>
              <p className="text-4xl font-extrabold my-4">{lesson.price}</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                {lesson.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
              <button className="w-full bg-[#0E9F6E] text-white py-3 rounded-xl hover:bg-green-700 font-semibold">
                {lesson.buttonLabel}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Training Vehicle */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Our Training Vehicle</h2>
            <p className="text-gray-600 mt-3">
              Modern dual-control car with 5-star safety rating for safe, comfortable learning.
            </p>

            <h3 className="font-bold text-[#0E9F6E] mt-6">Vehicle Features:</h3>
            <ul className="text-gray-600 text-sm mt-2 space-y-1">
              {vehicleFeatures.map((f, i) => <li key={i}>• {f}</li>)}
            </ul>

            <h3 className="font-bold text-[#0E9F6E] mt-6">Safety First:</h3>
            <p className="text-gray-600 text-sm mt-2">
              Regularly serviced and fully insured. Dual controls ensure maximum safety.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/djwiqbwef/image/upload/v1765031406/carInterior_cyh2ci.jpg"
            alt="Dual Control Car"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Learning Process Timeline */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Our Learning Process
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {learningProcess.map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg border text-center">
              <span className="text-[#0E9F6E] text-3xl font-extrabold">
                {i + 1}
              </span>
              <h3 className="text-xl font-bold mt-3">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// ========== DATA ==========

const whoWeHelp = [
  {
    icon: "🎓",
    title: "Learner Drivers (L-Platers)",
    points: [
      "Complete beginner training",
      "Basic vehicle control",
      "Confidence building",
      "Gradual skill progression",
    ],
  },
  {
    icon: "📝",
    title: "VORT Candidates",
    points: [
      "Mock VORT sessions",
      "Test route familiarization",
      "Manoeuvre perfection",
      "Examiner expectations",
    ],
  },
  {
    icon: "🌎",
    title: "Overseas Licence Conversions",
    points: [
      "Australian road rules overview",
      "Local driving culture",
      "SA-specific requirements",
      "Fast-track options",
    ],
  },
  {
    icon: "🔄",
    title: "Refresher Lessons",
    points: [
      "Confidence rebuilding",
      "Parking specialisation",
      "Defensive driving",
      "Specific skill focus",
    ],
  },
];

const lessonProcess = [
  {
    title: "Pick-up & Goal Setting",
    desc: "We start the session by understanding your training goals and tracking progress.",
  },
  {
    title: "Targeted Practice",
    desc: "Hands-on driving with structured drills tailored to your skill level.",
  },
  {
    title: "Feedback & Next Steps",
    desc: "Clear notes after each lesson to improve faster and stay motivated.",
  },
];

const lessonLengths = [
  {
    title: "60 Minutes",
    desc: "Focused learning and regular practice.",
    price: "$90",
    points: [
      "Ideal for beginners",
      "Focused skill development",
      "Regular practice sessions",
      "Cost-effective option",
      "Flexible scheduling",
    ],
    buttonLabel: "Book 60min Lesson",
  },
  {
    title: "90 Minutes",
    desc: "Deeper practice for faster progress.",
    price: "$130",
    points: [
      "Comprehensive practice",
      "Test route rehearsal",
      "Manoeuvre mastery",
      "Better value per minute",
      "VORT preparation",
    ],
    buttonLabel: "Book 90min Lesson",
  },
];

const vehicleFeatures = [
  "Dual brake and clutch pedals",
  "ANCAP 5-star safety rating",
  "Fully insured for instruction",
  "Climate controlled comfort",
  "Modern safety features",
  "Clean and well-maintained",
];

const learningProcess = [
  { title: "Initial Assessment", desc: "We evaluate your current skills & create a personalised plan." },
  { title: "Skill Building", desc: "Progressive development from basics to advanced driving." },
  { title: "Real Traffic Practice", desc: "Confidence in real-world driving conditions." },
  { title: "Progress Tracking", desc: "Feedback-driven improvement and coaching." },
  { title: "Test Preparation", desc: "Mock VORT & route practice for guaranteed improvement." },
  { title: "Independent Driving", desc: "Learn skills for safe lifelong driving." },
];
