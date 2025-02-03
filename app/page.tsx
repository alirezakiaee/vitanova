import Image from 'next/image'
import Link from 'next/link'
import { BeakerIcon, UserGroupIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import HeroImage from '@/components/HeroImage'
import ModernFrame from '@/components/ModernFrame'
import BentoGrid from '@/components/BentoGrid'
import BackgroundShape from '@/components/BackgroundShape'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      <BackgroundShape />
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center lg:flex-row lg:justify-between lg:gap-x-16">
          {/* Left content */}
          <div className="relative max-w-2xl flex-1 pt-8 lg:pt-0">
            <div className="relative">
              <div className="absolute -left-8 -top-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/10">
                  <BeakerIcon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Beyond
                <span className="relative whitespace-nowrap">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary-500/60"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                  </svg>
                  <span className="relative"> Traditional </span>
                </span>
                <span className="mt-4 block bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  Healthcare
                </span>
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pioneering the future of healthcare through innovative pharmaceutical solutions. Our commitment drives breakthrough medicines that transform lives.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/products"
                className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-500/30"
              >
                Discover Our Solutions
              </Link>
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
              >
                Learn more 
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-3 gap-x-6">
              <div>
                <dt className="text-sm font-medium text-gray-500">Research Programs</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">50+</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Global Reach</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">100+</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Lives Improved</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-gray-900">1M+</dd>
              </div>
            </dl>
          </div>

          {/* Right image */}
          <div className="relative mt-16 flex-1 lg:mt-0">
            <ModernFrame>
              <HeroImage />
            </ModernFrame>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-24 sm:mt-32">
          <BentoGrid />
        </div>

        {/* Innovation & Impact Section */}
        <section className="mt-24 sm:mt-32">
          <div className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
                  {/* Left Content */}
                  <div>
                    <div className="relative">
                      <div className="absolute -left-8 -top-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/10">
                          <UserGroupIcon className="h-6 w-6 text-sky-600" />
                        </div>
                      </div>
                      <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Patient-First Innovation
                      </h2>
                      <div className="mt-6 text-lg leading-8 text-gray-600">
                        <p>
                          Our commitment to healthcare excellence goes beyond traditional boundaries. Through cutting-edge research and personalized care solutions, we're transforming patient outcomes globally.
                        </p>
                      </div>
                      <div className="mt-8">
                        <Link
                          href="/impact"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-500"
                        >
                          Learn about our impact
                          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-200 pt-12">
                      <div>
                        <h3 className="font-semibold text-gray-900">Global Research Network</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Connected research facilities across continents, accelerating breakthrough discoveries.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Advanced Analytics</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          AI-powered insights driving personalized treatment strategies.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Patient Care Excellence</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Comprehensive support systems ensuring optimal patient outcomes.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Sustainable Healthcare</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Eco-friendly practices in research and development processes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Stats & Recognition */}
                  <div className="relative">
                    <div className="relative rounded-3xl bg-gray-900 px-8 py-12 shadow-2xl lg:px-12">
                      <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 opacity-90" />
                      </div>
                      <div className="relative">
                        <h3 className="text-2xl font-bold tracking-tight text-white">
                          Recognition & Impact
                        </h3>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                          Our innovative approaches and commitment to excellence have earned us recognition from leading healthcare institutions worldwide.
                        </p>

                        {/* Stats Grid */}
                        <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
                          <div>
                            <dt className="text-sm font-medium text-gray-300">Clinical Trials Success Rate</dt>
                            <dd className="mt-2 text-3xl font-bold tracking-tight text-white">94%</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-300">Patient Satisfaction</dt>
                            <dd className="mt-2 text-3xl font-bold tracking-tight text-white">98%</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-300">Research Publications</dt>
                            <dd className="mt-2 text-3xl font-bold tracking-tight text-white">500+</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-300">Industry Awards</dt>
                            <dd className="mt-2 text-3xl font-bold tracking-tight text-white">75+</dd>
                          </div>
                        </dl>

                        <div className="mt-12">
                          <Link
                            href="/recognition"
                            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-600 shadow-sm hover:bg-gray-100"
                          >
                            View Our Achievements
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
