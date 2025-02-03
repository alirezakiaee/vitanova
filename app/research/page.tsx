import Image from 'next/image'
import Link from 'next/link'
import { BeakerIcon, ChartBarIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const researchAreas = [
  {
    name: 'Drug Discovery',
    description: 'Pioneering new therapeutic approaches through innovative molecular research.',
    icon: BeakerIcon,
    stats: '50+ Active Programs',
  },
  {
    name: 'Clinical Research',
    description: 'Conducting groundbreaking clinical trials with global reach and impact.',
    icon: UserGroupIcon,
    stats: '100+ Clinical Trials',
  },
  {
    name: 'Data Science',
    description: 'Leveraging AI and machine learning to accelerate medical discoveries.',
    icon: ChartBarIcon,
    stats: '1M+ Data Points',
  },
  {
    name: 'Innovation Labs',
    description: 'Creating next-generation healthcare solutions through technological advancement.',
    icon: LightBulbIcon,
    stats: '25+ Patents',
  },
]

const publications = [
  {
    title: 'Breakthrough in Targeted Therapy',
    journal: 'Nature Medicine',
    date: 'January 2025',
    impact: 'Revolutionary approach to cancer treatment',
    link: '#',
  },
  {
    title: 'AI in Drug Discovery',
    journal: 'Science',
    date: 'December 2024',
    impact: 'Accelerating pharmaceutical research',
    link: '#',
  },
  {
    title: 'Next-Gen Clinical Trials',
    journal: 'The Lancet',
    date: 'November 2024',
    impact: 'Improving trial efficiency and outcomes',
    link: '#',
  },
]

export default function Research() {
  return (
    <main className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-40 sm:pt-48 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Research & Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pushing the boundaries of medical science through innovative research and development.
              Our commitment to excellence drives breakthrough discoveries that transform patient care.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/research/publications"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                View Publications
              </Link>
              <Link href="/research/partnerships" className="text-sm font-semibold leading-6 text-gray-900">
                Research Partnerships <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Research Areas section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">Research Excellence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Areas of Focus
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our research spans multiple disciplines, combining cutting-edge technology with medical expertise
            to develop innovative healthcare solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {researchAreas.map((area) => (
              <div key={area.name} className="flex flex-col rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <area.icon className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                  {area.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{area.description}</p>
                  <p className="mt-6 font-semibold text-sky-600">{area.stats}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Latest Publications */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Publications</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our research teams regularly publish groundbreaking findings in leading scientific journals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="flex flex-col items-start rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={publication.date} className="text-gray-500">
                  {publication.date}
                </time>
                <span className="relative z-10 rounded-full bg-sky-50 px-3 py-1.5 font-medium text-sky-600">
                  {publication.journal}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-sky-600">
                  <Link href={publication.link}>
                    <span className="absolute inset-0" />
                    {publication.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{publication.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Research Network
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Collaborate with our research teams and be part of groundbreaking discoveries
            that shape the future of healthcare.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/research/collaborate"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Partner With Us
            </Link>
            <Link href="/research/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Research Team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
