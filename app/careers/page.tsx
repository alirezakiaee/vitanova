import Image from 'next/image'
import Link from 'next/link'
import { BeakerIcon, HeartIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline'

const departments = [
  {
    name: 'Research & Development',
    description: 'Drive innovation in pharmaceutical research and drug development.',
    icon: BeakerIcon,
    openings: 12,
  },
  {
    name: 'Clinical Operations',
    description: 'Lead and manage clinical trials and patient care initiatives.',
    icon: HeartIcon,
    openings: 8,
  },
  {
    name: 'Global Operations',
    description: 'Coordinate our worldwide healthcare delivery network.',
    icon: GlobeAltIcon,
    openings: 15,
  },
  {
    name: 'Innovation & Technology',
    description: 'Develop cutting-edge healthcare technology solutions.',
    icon: SparklesIcon,
    openings: 10,
  },
]

const benefits = [
  {
    name: 'Competitive Compensation',
    description: 'Industry-leading salary and equity packages',
  },
  {
    name: 'Health & Wellness',
    description: 'Comprehensive healthcare coverage and wellness programs',
  },
  {
    name: 'Professional Development',
    description: 'Continuous learning and career growth opportunities',
  },
  {
    name: 'Work-Life Balance',
    description: 'Flexible work arrangements and generous time off',
  },
  {
    name: 'Global Impact',
    description: 'Opportunity to make a difference in global healthcare',
  },
  {
    name: 'Innovation Culture',
    description: 'Be part of groundbreaking medical advances',
  },
]

const featuredJobs = [
  {
    title: 'Senior Research Scientist',
    department: 'Research & Development',
    location: 'Boston, MA',
    type: 'Full-time',
    link: '#',
  },
  {
    title: 'Clinical Trial Manager',
    department: 'Clinical Operations',
    location: 'San Francisco, CA',
    type: 'Full-time',
    link: '#',
  },
  {
    title: 'AI/ML Engineer',
    department: 'Innovation & Technology',
    location: 'Remote',
    type: 'Full-time',
    link: '#',
  },
]

export default function Careers() {
  return (
    <main className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-40 sm:pt-48 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Join Our Mission
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Be part of a team that's transforming healthcare through innovation.
              We're looking for passionate individuals to help us make a difference.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/careers/jobs"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                View Open Positions
              </Link>
              <Link href="/careers/culture" className="text-sm font-semibold leading-6 text-gray-900">
                Our Culture <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Departments section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">Join Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find Your Perfect Role
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore opportunities across our diverse departments and make an impact in global healthcare.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {departments.map((department) => (
              <div key={department.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <department.icon className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                  {department.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{department.description}</p>
                  <p className="mt-6">
                    <Link
                      href={`/careers/departments/${department.name.toLowerCase()}`}
                      className="text-sm font-semibold leading-6 text-sky-600"
                    >
                      {department.openings} Open Positions <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Positions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our current job openings and find your next career opportunity.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <article
              key={job.title}
              className="flex flex-col items-start justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <span className="relative z-10 rounded-full bg-sky-50 px-3 py-1.5 font-medium text-sky-600">
                  {job.department}
                </span>
                <span className="text-gray-500">{job.type}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-sky-600">
                  <Link href={job.link}>
                    <span className="absolute inset-0" />
                    {job.title}
                  </Link>
                </h3>
                <p className="mt-5 text-sm text-gray-500">{job.location}</p>
              </div>
              <div className="mt-8">
                <Link
                  href={job.link}
                  className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Apply Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Benefits section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Join VitaNova?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer comprehensive benefits and a culture that supports your growth and well-being.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">{benefit.name}</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{benefit.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Make an Impact?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join our team and be part of transforming healthcare through innovation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/careers/apply"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Apply Now
            </Link>
            <Link href="/careers/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Recruiting <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
