'use client'

import { ReactNode } from 'react'

interface ModernFrameProps {
  children: ReactNode
}

export default function ModernFrame({ children }: ModernFrameProps) {
  return (
    <div className="relative">
      {/* Outer frame with subtle gradient border */}
      <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-r from-blue-100 to-blue-50 opacity-50" />
      
      {/* Inner frame with glass effect */}
      <div className="relative rounded-[2.4rem] bg-white/95 p-0.5 backdrop-blur-sm">
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-blue-100/50 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-blue-50/50 blur-2xl" />
    </div>
  )
}
