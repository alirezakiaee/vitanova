import { SparklesIcon, LightBulbIcon, RocketLaunchIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Innovation Labs',
    description: 'State-of-the-art facilities for pharmaceutical research and development.',
    icon: LightBulbIcon,
  },
  {
    name: 'Emerging Technologies',
    description: 'Integration of AI, ML, and biotechnology in drug development.',
    icon: CpuChipIcon,
  },
  {
    name: 'Rapid Prototyping',
    description: 'Accelerated development and testing of new pharmaceutical solutions.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Future Healthcare',
    description: 'Pioneering next-generation healthcare technologies and treatments.',
    icon: SparklesIcon,
  },
]

export default function InnovationPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-sky-600">Innovation Hub</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shaping the Future of Healthcare
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our innovation hub is dedicated to developing cutting-edge pharmaceutical technologies 
            and solutions that will define the future of healthcare.
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
              Join Our Innovation Journey
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-sky-100">
              Be part of the next breakthrough in healthcare technology.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-sky-600 shadow-sm hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Innovation Opportunities
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
