import Image from 'next/image'
import Link from 'next/link'
import { ArrowTrendingUpIcon, BanknotesIcon, ChartBarIcon, DocumentTextIcon, BeakerIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const financialHighlights = [
  {
    name: 'Revenue Growth',
    value: '32%',
    description: 'Year-over-year increase in revenue',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'R&D Investment',
    value: '$2.8B',
    description: 'Annual research and development spending',
    icon: BeakerIcon,
  },
  {
    name: 'Market Cap',
    value: '$45B',
    description: 'Current market capitalization',
    icon: BanknotesIcon,
  },
  {
    name: 'Global Presence',
    value: '50+',
    description: 'Countries with active operations',
    icon: GlobeAltIcon,
  },
]

const reports = [
  {
    title: 'Q4 2024 Earnings Report',
    date: 'January 15, 2025',
    type: 'Quarterly Report',
    link: '#',
  },
  {
    title: 'Annual Report 2024',
    date: 'December 31, 2024',
    type: 'Annual Report',
    link: '#',
  },
  {
    title: 'ESG Report 2024',
    date: 'December 1, 2024',
    type: 'Sustainability',
    link: '#',
  },
]

const upcomingEvents = [
  {
    title: 'Q1 2025 Earnings Call',
    date: 'April 15, 2025',
    time: '11:00 AM EST',
    description: 'Quarterly earnings presentation and analyst Q&A',
    link: '#',
  },
  {
    title: 'Healthcare Innovation Summit',
    date: 'May 1, 2025',
    time: '9:00 AM EST',
    description: 'Presentation of new research initiatives and product pipeline',
    link: '#',
  },
  {
    title: 'Annual Shareholder Meeting',
    date: 'June 15, 2025',
    time: '10:00 AM EST',
    description: 'Annual meeting for shareholders with voting on key initiatives',
    link: '#',
  },
]

export default function Investors() {
  return (
    <main className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-40 sm:pt-48 lg:px-8 lg:pt-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Investor Relations
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Delivering sustainable growth and value through innovation in healthcare.
              Explore our financial performance, corporate governance, and future outlook.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/investors/reports"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Financial Reports
              </Link>
              <Link href="/investors/events" className="text-sm font-semibold leading-6 text-gray-900">
                Upcoming Events <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Highlights */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Financial Highlights</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Strong financial performance driven by innovation and operational excellence.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {financialHighlights.map((stat) => (
            <div key={stat.name} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
              <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              <dd className="text-sm leading-6 text-gray-500">{stat.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Latest Reports */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Reports</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access our latest financial reports and corporate documents.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reports.map((report) => (
            <article
              key={report.title}
              className="flex flex-col items-start justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={report.date} className="text-gray-500">
                  {report.date}
                </time>
                <span className="relative z-10 rounded-full bg-sky-50 px-3 py-1.5 font-medium text-sky-600">
                  {report.type}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-sky-600">
                  <Link href={report.link}>
                    <span className="absolute inset-0" />
                    {report.title}
                  </Link>
                </h3>
                <div className="mt-5 flex items-center gap-x-3">
                  <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">View PDF</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay informed about our upcoming investor events and presentations.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <article
              key={event.title}
              className="flex flex-col items-start justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={event.date} className="text-gray-500">
                  {event.date}
                </time>
                <span className="text-gray-500">{event.time}</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-sky-600">
                  <Link href={event.link}>
                    <span className="absolute inset-0" />
                    {event.title}
                  </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{event.description}</p>
              </div>
              <div className="mt-8 flex items-center gap-x-3">
                <Link
                  href={event.link}
                  className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Register Now
                </Link>
                <Link href={`${event.link}/details`} className="text-sm font-semibold leading-6 text-gray-900">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Sign up for investor alerts to receive the latest updates and financial news directly in your inbox.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/investors/subscribe"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Subscribe to Updates
            </Link>
            <Link href="/investors/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact IR Team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
