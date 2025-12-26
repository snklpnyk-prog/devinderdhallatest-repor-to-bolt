import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { 
  Brain, Heart, Users, Briefcase, Activity, Sparkles, 
  CheckCircle2, Star, ShieldCheck, Clock, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent -z-10 rounded-bl-[200px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 -z-10 rounded-tr-[200px]" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm tracking-wide">
                Bhameshwari Counselling Centre®
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-[1.15]">
                Expert Counselling for <span className="text-secondary relative">
                  Your Family
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.3" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Professional psychological support tailored to your unique needs. We help you navigate life's challenges with compassion and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <AppointmentDialog>
                  <Button className="h-14 px-8 text-lg rounded-full bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/25 transition-transform hover:-translate-y-1">
                    Book Appointment
                  </Button>
                </AppointmentDialog>
                <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-secondary text-secondary hover:bg-secondary/5 font-semibold">
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-secondary/20 border-8 border-white">
                {/* Family therapy generic image */}
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" 
                  alt="Counseling Session" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">4.8/5.0</p>
                  <p className="text-sm text-gray-500">From 60+ Reviews</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Our Vision", text: "To create a mentally healthy society through accessible care.", icon: Sparkles },
              { title: "Our Mission", text: "Empowering individuals to overcome psychological barriers.", icon: Activity },
              { title: "Ethical Practice", text: "100% confidential and professional standards guaranteed.", icon: ShieldCheck },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg text-secondary">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-secondary/10 rounded-[40px] rotate-3 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" 
                alt="Dr. Devinder Dhalla" 
                className="rounded-[32px] shadow-xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/40 shadow-lg">
                <h4 className="text-xl font-bold text-secondary">Dr. Devinder Dhalla</h4>
                <p className="text-primary font-medium">Founder & Director</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
                <Users className="w-4 h-4" /> 12+ Years Experience
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                A Decade of Healing & <br/><span className="text-primary">Transformation</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Dr. Devinder Dhalla is a renowned psychologist dedicated to improving mental health outcomes. With over 12 years of clinical experience, he has helped thousands of individuals and families navigate complex psychological challenges.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Specialized in Cognitive Behavioral Therapy (CBT)",
                  "Expert in Family & Marital Counselling",
                  "Certified in Addiction Recovery Management",
                  "Compassionate, non-judgmental approach"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="text-secondary font-semibold hover:text-primary pl-0 hover:bg-transparent text-lg">
                Read Full Profile <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive psychological care designed to support you at every stage of your journey.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Brain} 
              title="Individual Counselling" 
              description="One-on-one sessions to help you understand your thoughts, feelings, and behaviors in a safe environment."
              delay={0}
            />
            <ServiceCard 
              icon={Activity} 
              title="Anxiety & Depression" 
              description="Evidence-based treatments like CBT to manage stress, panic attacks, and persistent sadness."
              delay={100}
            />
            <ServiceCard 
              icon={Heart} 
              title="Couple & Relationship" 
              description="Resolve conflicts, improve communication, and rebuild trust with professional relationship guidance."
              delay={200}
            />
            <ServiceCard 
              icon={Briefcase} 
              title="Career Counselling" 
              description="Psychometric testing and guidance to help students and professionals make informed career choices."
              delay={300}
            />
            <ServiceCard 
              icon={Users} 
              title="Addiction Counselling" 
              description="Supportive recovery programs for substance abuse, gaming addiction, and other dependencies."
              delay={400}
            />
            <ServiceCard 
              icon={Sparkles} 
              title="Specialized Therapies" 
              description="Advanced modalities including Mindfulness (MBCT), Acceptance Commitment Therapy (ACT), and NLP."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Book an appointment today and take the first step towards a healthier, happier life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Users, text: "Online & Offline" },
              { icon: ShieldCheck, text: "100% Confidential" },
              { icon: Star, text: "Trusted Experts" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <AppointmentDialog>
            <Button className="h-16 px-10 text-xl rounded-full bg-white text-secondary hover:bg-gray-100 font-bold shadow-xl transition-transform hover:scale-105">
              Book Appointment Now
            </Button>
          </AppointmentDialog>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Meet Our Experts</h2>
            <p className="text-gray-600">A dedicated team of professionals committed to your well-being.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Devinder Dhalla", role: "Chief Psychologist", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
              { name: "Dr. Sarah Khan", role: "Child Psychologist", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80" },
              { name: "Mr. Raj Mehta", role: "Career Counsellor", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
              { name: "Ms. Priya Singh", role: "Clinical Psychologist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-center pb-6 group">
                <div className="overflow-hidden mb-4">
                  <img src={member.img} alt={member.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
