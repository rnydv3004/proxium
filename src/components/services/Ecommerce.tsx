import React from 'react'
import Dashboard from '../../../public/2448638.jpg'
import Image from 'next/image'

const websiteBrounchure = [
    { title: "Online Retail Stores", text: "These are standard e-commerce websites where businesses sell physical products directly to consumers. Examples include fashion boutiques, electronics stores, and home goods retailers." },
    { title: "Subscription-based", text: "Websites that offer products or services on a subscription basis, like monthly snack boxes, streaming services, or software subscriptions." },
    { title: "Marketplace Platforms", text: "Multi-vendor platforms like Amazon or eBay, where multiple sellers can create their stores and sell products through a centralized marketplace." },
    { title: "Dropshipping Websites", text: "E-commerce sites that partner with suppliers to sell products without holding inventory. When a purchase is made, the product is shipped directly from the supplier to the customer." },
    { title: "Wholesale E-commerce", text: "Sites designed for wholesale business-to-business (B2B) transactions, allowing bulk orders by retailers, distributors, or businesses." },
    { title: "Auction Websites", text: "Platforms where users can bid on products, with the highest bidder winning the item. Popular examples include eBay." },
    { title: "Peer-to-Peer Marketplaces", text: "Websites where individuals can buy and sell products or services directly to other individuals, often with a focus on specific niches." },
    { title: "Niche E-commerce", text: "Specialized e-commerce websites that focus on a specific niche or industry, catering to a targeted audience. Examples include artisanal or eco-friendly products." },
    { title: "Rental and Sharing Economy Platforms", text: "Websites that facilitate the rental or sharing of items, equipment, or accommodations, like Airbnb or Turo." },
    { title: "B2B E-commerce", text: "E-commerce platforms designed for business-to-business transactions, often involving bulk orders, wholesale pricing, and account management features." }
]

export default function Ecommerce() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-200 px-6 pb-16 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:flex-col lg:gap-x-20 lg:gap-y-10 lg:px-24 lg:pt-0 justify-between h-full ">
            <div className='flex flex-col sm:flex-row justify-between'>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-0 top-0 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Crafting E-commerce Experiences
                    </h2>
                    <div className="mt-6 text-lg text-black leading-8 flex flex-wrap gap-2">
                        {
                            websiteBrounchure.map((item, index) => (
                                <p key={index} className='rounded-full bg-blue-700 shadow-2xl shadow-black text-white py-1 px-2 text-xs sm:py-1 sm:px-3 font-medium sm:text-sm'>{item.title}</p>

                            ))
                        }
                    </div>
                </div>
                <div className=" mt-16 h-80 lg:mt-8">
                    <Image
                        className=" left-0 top-0 w-[40rem] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10"
                        src={Dashboard}
                        alt="Dashboard"
                        width={1824}
                        height={1080}
                    />
                </div>
            </div>
            {/* Accordian */}
            <div className='h-fit mt-24 sm:mt-auto grid grid-cols-12 gap-4'>
                {
                    websiteBrounchure.map((item, index) => (
                        <div key={index} className='h-auto rounded-lg p-2 bg-white mb-5 shadow-lg col-span-12 sm:col-span-3 hover:scale-105 transition-transform transform duration-300'>
                            <h2 className='p-3 font-semibold'>
                                <span className="flex items-center"><svg className="w-5 h-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> {item.title}</span>
                            </h2>
                            <div>
                                <div className="p-4  border-gray-700 ">
                                    <p className="mb-2 text-gray-800 flex flex-wrap">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
