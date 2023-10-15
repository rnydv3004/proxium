import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { pricingList, seoIncludedFeatures, siteMap, marketingFeatures, websiteList, webAppList } from '@/constants'
import Link from 'next/link'


export default function page() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your <span className='text-green-600'>Costs</span>, Your <span className='text-green-600'>Control</span></h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transparent pricing: Pay only for what you use. No hidden costs. Enjoy the flexibility of our Pay as You Go model. Your budget, your control.
            </p>
          </div>
          {/* Website Pricing */}
          <div id='webPrice' className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Website: Development + Hosting + SEO + 1 Year <span className='text-green-600'>FREE</span> Support</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Elevate Your Brand with Tailor-Made Websites and Digital Solutions
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {websiteList.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">1 Year Subscription Plan</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">${pricingList.website}</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <Link
                    href={siteMap.contact}
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Connect
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    The price is open to negotiation
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Web Application Pricing */}
          <div id='webAppPrice' className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Web Application: Development + Hosting + 1 Year <span className='text-green-600'>FREE</span> Support</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Innovate and Grow with Custom Web App Development
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {webAppList.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">1 Year Subscription Plan</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">${pricingList.webapp}</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <Link
                    href={siteMap.contact}
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Connect
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    The price is open to negotiation
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Web Application Pricing */}
          <div id='automationPrice' className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Automation: Development + 1 Year <span className='text-green-600'>FREE</span> Support</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Take control of your processes and efficiency by creating a tailor-made tool that precisely matches your needs.
              </p>
              <div>
                <p className="mt-6 text-base leading-7 text-gray-600">Are you ready to turn your business vision into reality? Our team is here to help you create a customized automated tool that perfectly aligns with your unique needs and goals.</p>
              </div>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">1 Year Subscription Plan</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">${pricingList.automation}</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <Link
                    href={siteMap.contact}
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Connect
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    The price is open to negotiation
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* SEO Pricing */}
          <div id='seoPrice' className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">SEO: 1 Year Subscription Plan</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our team of SEO experts is committed to delivering results tailored to your unique business goals. Whether you are a small startup or a well-established corporation, we have the experience and knowledge to create a customized SEO strategy that suits your needs.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {seoIncludedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">1 Year Subscription Plan</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">${pricingList.seoOneYear}</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <Link
                    href={siteMap.contact}
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Connect
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    The price is open to negotiation
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Marketing Pricing */}
          <div id='marketingPrice' className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Marketing: 1 Year Month Plan</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Ready to elevate your business? Our seasoned marketing experts craft custom strategies for tangible results in a competitive landscape.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {marketingFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">1 Year Subscription Plan</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">${pricingList.marketingOneMonth}</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                  </p>
                  <Link
                    href={siteMap.contact}
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Connect
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    The price is open to negotiation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
