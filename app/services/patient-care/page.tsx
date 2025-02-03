import { HeartIcon, UserGroupIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Personalized Care',
    description: 'Tailored treatment plans designed for individual patient needs and circumstances.',
    icon: HeartIcon,
  },
  {
    name: 'Support Programs',
    description: 'Comprehensive patient support programs and resources for better healthcare outcomes.',
    icon: UserGroupIcon,
  },
  {
    name: '24/7 Assistance',
    description: 'Round-the-clock medical support and guidance from our healthcare professionals.',
    icon: ClockIcon,
  },
  {
    name: 'Privacy & Security',
    description: 'Strict adherence to patient privacy and data protection protocols.',
    icon: ShieldCheckIcon,
  },
]

export default function PatientCarePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-sky-600">Patient Care</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compassionate Healthcare Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We prioritize patient well-being through personalized care plans, comprehensive support 
            programs, and continuous medical assistance.
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
              Need Medical Assistance?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-sky-100">
              Our healthcare professionals are available 24/7 to provide support and guidance.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-sky-600 shadow-sm hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Our Care Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
