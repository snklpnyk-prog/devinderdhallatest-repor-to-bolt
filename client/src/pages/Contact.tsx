import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AppointmentDialog } from "@/components/AppointmentDialog";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are here to help. Reach out to us for appointments or queries.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-heading font-bold text-secondary mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Visit Us</h4>
                      <p className="text-gray-600 mt-1">
                        Yamuna Vihar 102, Near THDC Colony,<br/>
                        Dehrakhas, Patel Nagar, Dehradun
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Call Us</h4>
                      <p className="text-gray-600 mt-1">+91 89233 01425</p>
                      <p className="text-gray-500 text-sm mt-1">Available 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email Us</h4>
                      <p className="text-gray-600 mt-1">helpdesk.drdhalla@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Opening Hours</h4>
                      <p className="text-gray-600 mt-1">Mon - Sat: 10:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <AppointmentDialog>
                <Button className="w-full h-14 text-lg rounded-xl bg-secondary hover:bg-secondary/90 shadow-xl">
                  Book Appointment Online
                </Button>
              </AppointmentDialog>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] shadow-inner relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.6409587424685!2d78.0264173150821!3d30.30467898178816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909299498229b47%3A0x8e5f8f8f8f8f8f8f!2sDehradun!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office Location"
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
