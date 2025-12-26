import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Team() {
  const team = [
    { 
      name: "Dr. Devinder Dhalla", 
      role: "Founder & Chief Psychologist", 
      bio: "With over 12 years of experience, Dr. Dhalla specializes in CBT and Family Therapy. He is dedicated to creating a supportive environment for all clients.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" 
    },
    { 
      name: "Dr. Sarah Khan", 
      role: "Child Psychologist", 
      bio: "Expert in child development and behavioral issues. She uses play therapy to help children express themselves.",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80" 
    },
    { 
      name: "Mr. Raj Mehta", 
      role: "Career Counsellor", 
      bio: "Specializes in psychometric testing and career guidance for students and working professionals.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" 
    },
    { 
      name: "Ms. Priya Singh", 
      role: "Clinical Psychologist", 
      bio: "Focuses on anxiety disorders and stress management techniques including mindfulness and relaxation.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compassionate professionals dedicated to your mental health journey.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-72 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
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
