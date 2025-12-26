import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">About Bhameshwari</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A sanctuary for mental healing and personal growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-secondary">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Bhameshwari Counselling Centre was founded with a singular vision: to make high-quality mental health care accessible to families in Dehradun and beyond. Led by Dr. Devinder Dhalla, our center has grown into a trusted institution for psychological support.
                </p>
                <p>
                  We believe that mental health is as important as physical health. Our approach combines traditional psychological techniques with modern therapeutic practices to provide holistic care.
                </p>
                <p>
                  Whether you are struggling with personal issues, relationship conflicts, or career confusion, our team is here to guide you towards clarity and peace.
                </p>
              </div>

              <h3 className="text-xl font-heading font-bold text-secondary pt-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Experienced & Licensed Professionals",
                  "Scientific & Evidence-Based Treatments",
                  "Compassionate, Client-Centered Approach",
                  "Strict Confidentiality & Ethics",
                  "Comfortable & Safe Environment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6">
              <img 
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80" 
                alt="Clinic Interior" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80" 
                alt="Therapy Session" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
