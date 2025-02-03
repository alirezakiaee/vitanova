'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BeakerIcon, SparklesIcon } from '@heroicons/react/24/outline'

const cards = [
  {
    title: 'Cutting-edge Research',
    description: 'Pioneering breakthrough treatments',
    icon: BeakerIcon,
    image: '/hero-image.jpg',
  },
  {
    title: 'Innovation Hub',
    description: 'Shaping the future of medicine',
    icon: SparklesIcon,
    image: '/lab-research.jpg',
  },
]

export default function HeroImage() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#0A1628]">
      {/* Active Card - Large */}
      <motion.div
        key={cards[activeIndex].title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-full w-full"
      >
        <Image
          src={cards[activeIndex].image}
          alt={cards[activeIndex].title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/60 to-[#0A1628]/40" />
        
        {/* Content */}
        <div className="absolute inset-0 p-8">
          <div className="flex h-full flex-col justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-white sm:text-4xl"
              >
                {cards[activeIndex].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-2 text-lg text-gray-200"
              >
                {cards[activeIndex].description}
              </motion.p>
            </div>

            {/* Preview Cards */}
            <div className="mt-auto flex gap-4">
              {cards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative flex w-[240px] cursor-pointer items-center gap-3 rounded-xl p-4 transition-all ${
                    idx === activeIndex
                      ? 'bg-white/90 backdrop-blur-sm'
                      : 'bg-[#0A1628]/50 backdrop-blur-sm hover:bg-[#1E3A59]/50'
                  }`}
                >
                  <div
                    className={`rounded-lg p-2 ${
                      idx === activeIndex
                        ? 'bg-[#0284C7]/10'
                        : 'bg-[#1E3A59]/50 group-hover:bg-[#1E3A59]'
                    }`}
                  >
                    <card.icon
                      className={`h-5 w-5 ${
                        idx === activeIndex
                          ? 'text-[#0284C7]'
                          : 'text-white group-hover:text-[#0284C7]'
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        idx === activeIndex ? 'text-[#0A1628]' : 'text-white'
                      }`}
                    >
                      {card.title}
                    </p>
                    <p
                      className={`text-xs ${
                        idx === activeIndex ? 'text-[#1E3A59]' : 'text-gray-300'
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Dots */}
      <div className="absolute right-8 top-8 flex gap-2">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === activeIndex
                ? 'w-6 bg-[#0284C7]'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
