import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Brain, Heart, Users, Briefcase, Activity, Sparkles, Baby, MessageCircle } from "lucide-react";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { Button } from "@/components/ui/button";

export default function Services() {
  const allServices = [
    { 
      icon: Brain, 
      title: "Individual Counselling", 
      description: "Personalized one-on-one sessions addressing anxiety, depression, trauma, and personal growth. We create a safe space for you to explore your inner world." 
    },
    { 
      icon: Heart, 
      title: "Couple & Marriage Therapy", 
      description: "Navigate relationship challenges, improve communication, and rebuild intimacy. Suitable for couples at any stage of their relationship." 
    },
    { 
      icon: Baby, 
      title: "Child & Adolescent Therapy", 
      description: "Specialized support for children facing behavioral issues, academic stress, bullying, or family transitions. We use play therapy and other age-appropriate methods." 
    },
    { 
      icon: Briefcase, 
      title: "Career & Educational Guidance", 
      description: "Expert career assessment and counseling to help students and professionals find their true calling and navigate career transitions." 
    },
    { 
      icon: Users, 
      title: "Family Therapy", 
      description: "Healing family dynamics by addressing conflicts, improving understanding, and fostering healthier patterns of interaction among family members." 
    },
    { 
      icon: Activity, 
      title: "Addiction Recovery", 
      description: "Compassionate support for overcoming substance abuse and behavioral addictions. We focus on relapse prevention and holistic recovery." 
    },
    { 
      icon: Sparkles, 
      title: "Mindfulness & Stress Management", 
      description: "Learn practical techniques to manage daily stress, enhance focus, and achieve emotional balance through mindfulness-based interventions." 
    },
    { 
      icon: MessageCircle, 
      title: "Group Therapy", 
      description: "Connect with others facing similar challenges in a guided group setting. Build social skills and receive peer support." 
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Holistic psychological care tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => (
              <ServiceCard 
                key={idx}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={idx * 50}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Not sure which service is right for you?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Book a consultation call and our experts will help assess your needs and recommend the best path forward.
          </p>
          <AppointmentDialog>
            <Button className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl">
              Schedule Consultation
            </Button>
          </AppointmentDialog>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
