import Image from 'next/image'
import Link from 'next/link'
import { BeakerIcon, HeartIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Innovation',
    description: 'Pushing boundaries in medical science and healthcare technology.',
    icon: BeakerIcon,
  },
  {
    name: 'Patient-First',
    description: 'Every decision centered around improving patient outcomes.',
    icon: HeartIcon,
  },
  {
    name: 'Global Impact',
    description: 'Making healthcare accessible across all communities.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Collaboration',
    description: "Working together to solve healthcare's biggest challenges.",
    icon: UserGroupIcon,
  },
]

const timeline = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'VitaNova established with a mission to transform healthcare through innovation.',
  },
  {
    year: '2017',
    title: 'First Major Breakthrough',
    description: 'Developed revolutionary treatment approach for chronic conditions.',
  },
  {
    year: '2019',
    title: 'Global Expansion',
    description: 'Expanded operations to 25+ countries, reaching millions of patients.',
  },
  {
    year: '2021',
    title: 'Innovation Center Launch',
    description: 'Opened state-of-the-art research and innovation center.',
  },
  {
    year: '2023',
    title: 'Healthcare Tech Integration',
    description: 'Launched AI-powered healthcare solutions platform.',
  },
  {
    year: '2025',
    title: 'Sustainable Healthcare Initiative',
    description: 'Launched major initiatives for sustainable healthcare practices.',
  },
]

const stats = [
  { name: 'Team Members', value: '2,500+' },
  { name: 'Research Centers', value: '15' },
  { name: 'Countries', value: '50+' },
  { name: 'Patents', value: '1,000+' },
]

const leadership = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    image: '/images/team/sarah-chen.jpg',
    bio: "Leading VitaNova's mission to transform global healthcare through innovation.",
  },
  {
    name: 'Dr. Michael Rodriguez',
    role: 'Chief Research Officer',
    image: '/images/team/michael-rodriguez.jpg',
    bio: 'Driving breakthrough discoveries in medical research and development.',
  },
  {
    name: 'Emma Thompson',
    role: 'Chief Operating Officer',
    image: '/images/team/emma-thompson.jpg',
    bio: 'Orchestrating global operations and strategic initiatives.',
  },
]

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-40 sm:pt-48 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              VitaNova was founded with a singular mission: to transform healthcare through innovation.
              Today, we're a global leader in healthcare technology and research.
            </p>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These core values guide every decision we make and every action we take.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                  <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {value.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{value.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Timeline section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Journey</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A decade of innovation and impact in global healthcare.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {timeline.map((item) => (
            <article key={item.year} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img src={`/images/timeline/${item.year}.jpg`} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={item.year} className="mr-8">{item.year}</time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">By the Numbers</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our global impact in healthcare innovation and research.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
              <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Leadership */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the team driving innovation in healthcare.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {leadership.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.image} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-sky-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Mission
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Be part of our journey to transform healthcare through innovation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/careers"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Join Our Team
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
