"use client";

import { motion } from "framer-motion";
import { ArrowRight, Handshake, TrendingUp, Users, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    icon: TrendingUp,
    title: "Croissance Assurée",
    description: "Développez votre activité avec un partenaire de confiance"
  },
  {
    icon: Users,
    title: "Réseau Étendu",
    description: "Accédez à notre réseau international de partenaires"
  },
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Transactions sécurisées et assurance professionnelle"
  }
];

const PartnershipSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Handshake size={18} className="text-white" />
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                Partenariat
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Devenez notre
              <span className="block text-accent"> partenaire logistique</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 leading-relaxed">
              Rejoignez notre réseau de partenaires et développez votre activité avec GTA Transit. 
              Solutions point relais, distribution du dernier kilomètre et bien plus encore.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <benefit.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-white/80 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/partenaires"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Devenir partenaire <ArrowRight size={20} />
              </Link>
              
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>

          {/* Visual Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Partenariat logistique"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Partenaires actifs</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-6 -right-6 bg-accent rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 size={20} />
                <span className="font-semibold text-sm">Certifié</span>
              </div>
            </motion.div>
          </motion.div>

          </div>
      </div>
    </section>
  )
};


export default PartnershipSection;