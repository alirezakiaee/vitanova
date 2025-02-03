'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ServicesMegaMenu from './ServicesMegaMenu'

const navigation = [
  { id: '01', name: 'Products', href: '/products' },
  { id: '02', name: 'R&D', href: '/research' },
  { id: '03', name: 'Investors', href: '/investors' },
  { id: '04', name: 'Careers', href: '/careers' },
  { id: '05', name: 'About', href: '/about' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="relative flex justify-center">
          {/* Main Navigation */}
          <div className="inline-flex items-center rounded-full bg-gray-50/70 px-8 py-3 backdrop-blur-sm">
            {/* Logo */}
            <Link href="/" className="mr-10">
              <span className="font-display text-xl font-bold tracking-tight text-primary-600 dark:text-primary-400">
                VitaNova
              </span>
            </Link>

            <div className="hidden space-x-12 lg:flex">
              <ServicesMegaMenu />
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-light text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/80 px-6 py-6 backdrop-blur-lg sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-display text-xl font-bold tracking-tight text-primary-600 dark:text-primary-400">
                VitaNova
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <ServicesMegaMenu />
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-light text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
