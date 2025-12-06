export default function Hero() {
  return (
    <section className="bg-[#0A2A43] text-white pt-28 pb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left Content */}
        <div className="flex-1">
          <ul className="text-4xl md:text-5xl font-extrabold leading-tight">
            <li className="text-5xl">Learn Smarter</li> 
            <li className="text-4xl">Drive Safer</li> 
            <li className="text-3xl">Pass Sooner</li> 
          </ul>

          <p className="mt-4 text-lg text-gray-200"> 
            Patient, professional driving lessons across Adelaide with VORT-ready training
            
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="tel:+61468123456"
              className="bg-[#0E9F6E] px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-green-700"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/djwiqbwef/image/upload/v1765031407/blueBmw_mh08pq.jpg"
            alt="Driving Lesson"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
