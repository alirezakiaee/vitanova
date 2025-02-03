'use client'

import { motion } from 'framer-motion'
import { BeakerIcon, HeartIcon, ChartBarIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { ResearchPattern, PatientCarePattern, GlobalPattern, AnalyticsPattern, InnovationPattern } from './patterns/CardPatterns'
import Link from 'next/link'

const services = [
  {
    title: 'Research & Development',
    description: 'Pioneering breakthrough medicines through innovative research and clinical trials.',
    icon: BeakerIcon,
    pattern: ResearchPattern,
    gradient: 'from-[#E0F2FE]/40 via-[#BAE6FD]/40 to-[#7DD3FC]/40',
    hoverGradient: 'from-[#E0F2FE]/60 via-[#BAE6FD]/60 to-[#7DD3FC]/60',
    className: 'md:col-span-2 md:row-span-2',
    href: '/services/research'
  },
  {
    title: 'Patient Care',
    description: 'Personalized healthcare solutions focused on individual patient needs.',
    icon: HeartIcon,
    pattern: PatientCarePattern,
    gradient: 'from-[#F0F9FF]/40 via-[#E0F2FE]/40 to-[#BAE6FD]/40',
    hoverGradient: 'from-[#F0F9FF]/60 via-[#E0F2FE]/60 to-[#BAE6FD]/60',
    className: 'md:col-span-1',
    href: '/services/patient-care'
  },
  {
    title: 'Global Impact',
    description: 'Expanding healthcare access across continents.',
    icon: GlobeAltIcon,
    pattern: GlobalPattern,
    gradient: 'from-[#ECFEFF]/40 via-[#CFFAFE]/40 to-[#A5F3FC]/40',
    hoverGradient: 'from-[#ECFEFF]/60 via-[#CFFAFE]/60 to-[#A5F3FC]/60',
    className: 'md:col-span-1',
    href: '/services/global-impact'
  },
  {
    title: 'Advanced Analytics',
    description: 'Data-driven insights for better healthcare outcomes.',
    icon: ChartBarIcon,
    pattern: AnalyticsPattern,
    gradient: 'from-[#F0FDFF]/40 via-[#CAF0F8]/40 to-[#90E0EF]/40',
    hoverGradient: 'from-[#F0FDFF]/60 via-[#CAF0F8]/60 to-[#90E0EF]/60',
    className: 'md:col-span-1',
    href: '/services/analytics'
  },
  {
    title: 'Innovation Hub',
    description: 'Cutting-edge pharmaceutical technology development.',
    icon: SparklesIcon,
    pattern: InnovationPattern,
    gradient: 'from-[#EFF6FF]/40 via-[#DBEAFE]/40 to-[#BFDBFE]/40',
    hoverGradient: 'from-[#EFF6FF]/60 via-[#DBEAFE]/60 to-[#BFDBFE]/60',
    className: 'md:col-span-1',
    href: '/services/innovation'
  }
]

export default function BentoGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-sky-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-cyan-500">
              Comprehensive Healthcare Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our range of innovative pharmaceutical services designed to transform global healthcare.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4 md:grid-rows-2">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              href={service.href}
              className={service.className}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative h-full overflow-hidden rounded-[2.5rem] bg-white p-8 cursor-pointer"
              >
                {/* Gradient background with animated transition */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br transition-all duration-300
                    ${service.gradient} group-hover:${service.hoverGradient}`}
                />
                
                {/* Animated glass effect overlay */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xl transition-all duration-300 group-hover:bg-white/20" />
                
                {/* Animated border */}
                <div className="absolute inset-px rounded-[2.5rem] bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-xl" />

                {/* SVG Pattern */}
                <div className="text-sky-600/40">
                  <service.pattern />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50/80 shadow-lg backdrop-blur-lg"
                  >
                    <service.icon className="h-6 w-6 text-sky-600" />
                  </motion.div>
                  <motion.h3 
                    className="mt-6 text-xl font-semibold leading-7 text-gray-900"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
                    {service.description}
                  </p>
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-sky-100/60 to-white/0 blur-2xl transition-all duration-300 group-hover:scale-150" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-sky-200/30 to-sky-100/0 blur-2xl transition-all duration-300 group-hover:scale-150" />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute h-2 w-2 rounded-full bg-sky-100/80 blur-sm animate-float1" style={{ top: '20%', left: '30%' }} />
                  <div className="absolute h-2 w-2 rounded-full bg-sky-100/80 blur-sm animate-float2" style={{ top: '60%', left: '40%' }} />
                  <div className="absolute h-2 w-2 rounded-full bg-sky-100/80 blur-sm animate-float3" style={{ top: '40%', left: '80%' }} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
