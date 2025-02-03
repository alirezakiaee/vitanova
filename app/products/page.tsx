import Image from 'next/image'
import Link from 'next/link'
import { BeakerIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline'

const products = [
  {
    name: 'VitaCore Analytics',
    description: 'Advanced healthcare analytics platform powered by AI for better patient outcomes.',
    icon: ChartBarIcon,
    features: [
      'Real-time patient monitoring',
      'Predictive health analytics',
      'Treatment optimization',
      'Resource management',
    ],
  },
  {
    name: 'BioTech Solutions',
    description: 'Cutting-edge biotechnology products for medical research and treatment.',
    icon: BeakerIcon,
    features: [
      'Gene therapy tools',
      'Precision medicine',
      'Clinical trial solutions',
      'Research equipment',
    ],
  },
  {
    name: 'HealthTech Innovation',
    description: 'Digital health solutions that transform patient care and medical practice.',
    icon: SparklesIcon,
    features: [
      'Telemedicine platform',
      'Patient engagement tools',
      'Healthcare IoT devices',
      'Medical data security',
    ],
  },
]

export default function Products() {
  return (
    <main className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-40 sm:pt-48 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transforming Healthcare Through Innovation
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                Our comprehensive suite of healthcare products combines cutting-edge technology with medical expertise
                to deliver superior patient outcomes and streamline healthcare operations.
              </p>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image
                    src="/images/products/lab-1.jpg"
                    alt="Lab research"
                    width={528}
                    height={720}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image
                    src="/images/products/lab-2.jpg"
                    alt="Medical research"
                    width={528}
                    height={720}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <Image
                    src="/images/products/lab-3.jpg"
                    alt="Healthcare technology"
                    width={528}
                    height={720}
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">Advanced Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to advance healthcare
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our products are designed to meet the evolving needs of modern healthcare,
            from advanced analytics to breakthrough biotechnology solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <product.icon className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                  {product.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{product.description}</p>
                  <ul role="list" className="mt-4 space-y-2 text-sm">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1d4240dd-898f-445f-932d-e2872fd12de3"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
        </svg>
        <div className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to transform your healthcare practice?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Get in touch with our team to learn more about how our products can help you improve patient outcomes
              and streamline your operations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Contact Sales
              </Link>
              <Link href="/demo" className="text-sm font-semibold leading-6 text-gray-900">
                Request Demo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
