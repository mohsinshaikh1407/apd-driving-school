 function About() {
  return (
    <div className="my-20 pt-28 pb-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-[#0A2A43] mb-6">
          About Adelaide Pro Driving School
        </h1>

        {/* Mission Statement */}
        <p className="text-gray-700 leading-relaxed mb-6">
          At Adelaide Pro Driving School, our mission is simple — to help learners
          become confident, safe, and responsible drivers ready for the roads of
          South Australia. We take a modern, coaching-focused approach to driving
          lessons, ensuring every student feels supported right from their first
          day behind the wheel.
        </p>

        {/* Values Section */}
        <h2 className="text-2xl font-bold text-[#0E9F6E] mt-10 mb-3">
          Why We’re Different
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Clear learning structure tailored to each student's needs</li>
          <li>Patient, calm, and highly experienced instructors</li>
          <li>Dual-control, modern training vehicle for maximum safety</li>
          <li>Mock VORTs and real test-route practice for higher pass rates</li>
          <li>Door-to-door service — home, school, uni or work</li>
          <li>Transparent pricing with no hidden fees</li>
        </ul>

        {/* Experience */}
        <h2 className="text-2xl font-bold text-[#0A2A43] mt-10 mb-3">
          Professional Experience You Can Trust
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our certified instructor brings years of experience helping new drivers,
          nervous learners, and overseas license holders successfully adjust to Adelaide
          road conditions. We understand the Vehicle On Road Test (VORT) inside and out,
          and we know what testing officers look for on test day — giving you a real
          advantage.
        </p>

        {/* Student Focus */}
        <h2 className="text-2xl font-bold text-[#0E9F6E] mt-10 mb-3">
          Focused on Your Success
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you're preparing for your VORT, converting your international licence,
          or driving for the first time, we ensure every lesson builds your skill,
          confidence, and safety awareness. Our supportive approach empowers you to grow
          at your pace — with clear feedback every step of the way.
        </p>

        {/* CTA Section */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-md border border-gray-100 text-center">
          <h3 className="text-xl font-bold text-[#0A2A43] mb-3">
            Ready to start driving with confidence?
          </h3>
          <p className="text-gray-700 mb-5">
            Book your first lesson today and take the first step toward passing your
            VORT on your very first attempt!
          </p>
          <a
            href="/contact"
            className="bg-[#0E9F6E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Book a Lesson
          </a>
        </div>
      </div>
    </div>
  );
}

export default About