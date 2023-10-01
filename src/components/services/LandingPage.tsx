import React from 'react'
import Dashboard from '../../../public/6354635.jpg'
import Image from 'next/image'

const websiteBrounchure = [
    { title: "Lead Generation", text: "Designed to capture visitor information, typically through a lead form, to build a list of potential customers or subscribers." },
    { title: "Product or Service Launch", text: "Created for launching a new product or service, providing details and enticing visitors to learn more or make a purchase." },
    { title: "Click-Through", text: "Encourages visitors to click through to another page, often used in e-commerce to warm up visitors before directing them to a product page." },
    { title: "Webinar or Event Registration", text: "Promotes an upcoming webinar, workshop, or event and encourages visitors to register." },
    { title: "Testimonial", text: "Features customer testimonials, reviews, or case studies to build trust and credibility." },
    { title: "Download Landing Page", text: "Offers a free e-book, whitepaper, or downloadable resource in exchange for visitor contact information." },
    { title: "Contest or Giveaway", text: "Promotes a contest or giveaway, encouraging visitors to participate by providing their information." },
    { title: "Product Showcase", text: "Highlights a single product or product category, providing detailed information and a call to action to purchase." },
    { title: "Coming Soon or Pre-launch", text: "Teases an upcoming product, service, or website launch to build anticipation and collect early interest or sign-ups." },
    { title: "Nonprofit Donation", text: "Encourages visitors to make donations to a nonprofit organization, showcasing their impact and mission." },
    { title: "Product Comparison", text: "Compares multiple products or services, helping visitors make informed decisions." }
]

export default function LandingPage() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-200 px-6 pb-16 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:flex-col lg:gap-x-20 lg:gap-y-10 lg:px-24 lg:pt-0 justify-between h-full ">
            <div className='flex flex-col sm:flex-row justify-between'>
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-0 top-1/4 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
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
                        Crafting High-Impact Landing Pages
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
            <div className='h-fit mt-36 sm:mt-auto grid grid-cols-12 gap-4'>
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


