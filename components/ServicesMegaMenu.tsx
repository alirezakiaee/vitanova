'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {
  BeakerIcon,
  HeartIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Research & Development',
    description: 'Pioneering breakthrough medicines through innovative research.',
    href: '/services/research',
    icon: BeakerIcon,
  },
  {
    name: 'Patient Care',
    description: 'Personalized healthcare solutions focused on patient needs.',
    href: '/services/patient-care',
    icon: HeartIcon,
  },
  {
    name: 'Global Impact',
    description: 'Expanding healthcare access across continents.',
    href: '/services/global-impact',
    icon: GlobeAltIcon,
  },
  {
    name: 'Advanced Analytics',
    description: 'Data-driven insights for better healthcare outcomes.',
    href: '/services/analytics',
    icon: ChartBarIcon,
  },
  {
    name: 'Innovation Hub',
    description: 'Cutting-edge pharmaceutical technology development.',
    href: '/services/innovation',
    icon: SparklesIcon,
  },
]

export default function ServicesMegaMenu() {
  return (
    <Popover className="relative">
      <Popover.Button className="group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none hover:text-sky-600">
        <span>Services</span>
        <ChevronDownIcon
          className="h-4 w-4 text-gray-600 group-hover:text-sky-600"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-4 w-screen max-w-7xl -translate-x-1/2 transform px-4 origin-top-right">
          <div className="mx-auto overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 translate-x-16">
            <div className="p-4 sm:p-8">
              <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                  {services.map((item) => (
                    <div key={item.name} className="group relative flex gap-x-6 rounded-xl p-4 hover:bg-gray-50">
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-sky-600 group-hover:text-sky-700" aria-hidden="true" />
                      </div>
                      <div>
                        <Link href={item.href} className="font-semibold text-gray-900 hover:text-sky-600">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-span-1">
                  <div className="rounded-xl bg-gray-50 p-6 h-full">
                    <div className="flex items-center gap-x-3">
                      <h3 className="text-sm font-semibold leading-6 text-gray-900">Enterprise</h3>
                      <span className="rounded-full bg-sky-600/10 px-2.5 py-1.5 text-xs font-semibold text-sky-600">New</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      Discover our comprehensive enterprise solutions designed for healthcare organizations.
                      Scale your operations with our advanced tools and support.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="#"
                        className="rounded-md bg-sky-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 text-center sm:text-left"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900 hover:text-sky-600 text-center sm:text-left"
                      >
                        Contact Sales <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
