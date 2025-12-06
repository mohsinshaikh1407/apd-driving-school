import PriceCard from "../PriceCard";

export default function Pricing() {
  return (
    <>
    
    <div className="my-20 pt-24 pb-24 bg-gray-100 px-4">
      <div className="text-center mb-12">
        
        <h1 className="my-5 text-4xl font-extrabold text-[#0A2A43]">    
          Ready to Start Your Driving Journey?
        </h1>
        <h3 className="text-2xl font-extrabold text-[#0A2A43]">    
          Book your first lesson today and take the first step towards driving independence
      </h3>
      </div>

            
      <h2 className="text-2xl font-bold text-center text-[#0A2A43] mb-6">
        Standard Lessons (Pay on the Day)
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 container mx-auto">
        <PriceCard
          title="60-Minute Lesson"
          type="Cash"
          price="$90"
          features={[
            "Perfect for beginners",
            "Flexible scheduling",
            "Pick-up & drop-off included",
            "Progress feedback",
          ]}
        />
        <PriceCard
          title="60-Minute Lesson"
          type="Bank Transfer"
          price="$100"
          features={[
            "Same benefits as cash",
            "Electronic payment",
            "Receipt provided",
            "Must clear before session",
          ]}
        />
        <PriceCard
          title="90-Minute Lesson"
          type="Cash"
          price="$130"
          features={[
            "Better value per minute",
            "Test route rehearsal",
            "Manoeuvre mastery",
            "Comprehensive feedback",
          ]}
        />
        <PriceCard
          title="90-Minute Lesson"
          type="Bank Transfer"
          price="$150"
          features={[
            "Same benefits as cash",
            "Electronic payment",
            "Receipt provided",
            "Must clear before session",
          ]}
        />
      </div>

      {/* Bundles Section */}
      <h2 className="text-2xl font-bold text-center text-[#0A2A43] mt-16 mb-6">
        VORT & Bundles (Including GST)
      </h2>

      <div className="grid md:grid-cols-3 gap-8 container mx-auto">
        <PriceCard
          title="VORT Test Only"
          price="$273.90"
          oldPrice="$249 + GST"
          features={[
            "Use of car for VORT",
            "Test-day warm-up",
            "Instructor guidance",
          ]}
        />
        <PriceCard
          title="4 Hours + VORT"
          price="$946.00"
          oldPrice="$860 + GST"
          highlight
          features={[
            "4 hours coaching",
            "Complete skill coverage",
            "Multiple practice tests",
          ]}
        />
        <PriceCard
          title="One-Day Course"
          price="$1,263.90"
          oldPrice="$1,149 + GST"
          features={[
            "Full-day intensive",
            "Mock VORT with feedback",
            "Perfect for fast prep",
          ]}
        />
      </div>
      <h3 className="text-lg font-extrabold text-[#0A2A43]">    
          *Transparent Pricing & Packages
        </h3>
        <h3 className="text-lg font-extrabold text-[#0A2A43]">
          *All prices in AUD. Includes GST where applicable.
        </h3>
    </div>
    </>
  );
}
