import { GlobeAltIcon, BuildingOfficeIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Global Presence',
    description: 'Operating in over 100 countries with localized healthcare solutions.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Distribution Centers',
    description: 'Strategic distribution network ensuring timely delivery of medical supplies.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Supply Chain',
    description: 'Robust supply chain management for consistent medication availability.',
    icon: TruckIcon,
  },
  {
    name: 'Local Partnerships',
    description: 'Collaborations with local healthcare providers and organizations.',
    icon: UserGroupIcon,
  },
]

export default function GlobalImpactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-sky-600">Global Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Healthcare Without Borders
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're committed to expanding healthcare access globally through strategic partnerships,
            efficient distribution networks, and localized solutions.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 sm:mt-24 lg:mt-32"
        >
          <div className="relative isolate overflow-hidden bg-sky-500 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-sky-100">
              Join our mission to make healthcare accessible worldwide.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-sky-600 shadow-sm hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Partnership Opportunities
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
