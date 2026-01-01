"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Directeur Logistique, ImportExport SA",
    content: "GTA Transit a transformé notre gestion logistique. Leur réactivité et leur expertise sur l'axe Afrique-Asie sont incomparables. Nos marchandises arrivent toujours à temps.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Gérante, AutoDeal",
    content: "Pour le transport de nos véhicules, nous ne faisons confiance qu'à GTA. Le service est impeccable, de la prise en charge au port jusqu'à la livraison finale.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Marc Weber",
    role: "Responsable Achats, BuildCorp",
    content: "Une équipe professionnelle qui maîtrise parfaitement les rouages de la douane. Nous avons réduit nos délais de dédouanement de moitié grâce à leurs conseils.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1976&auto=format&fit=crop",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Témoignages de nos clients</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-shadow duration-300 relative border border-slate-100"
            >
              <Quote className="absolute top-8 right-8 text-accent/20 h-10 w-10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-8 leading-relaxed italic relative z-10 font-medium">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
