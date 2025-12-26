import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <div 
      className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/10 relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
      
      <div className="w-14 h-14 bg-secondary/5 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 relative z-10">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-xl font-heading font-semibold text-gray-800 mb-3 group-hover:text-secondary transition-colors relative z-10">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6 text-sm relative z-10">
        {description}
      </p>
      
      <Link href="/services" className="inline-flex items-center text-sm font-semibold text-secondary group-hover:text-primary transition-colors relative z-10">
        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
