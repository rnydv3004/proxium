import AutomationPicture from '../../../public/2962489.jpg'
import Image from 'next/image'

const includedFeatures = [
    'Digital Marketing',
    'Content Creation',
    'Brand Development',
    'Market Research',
    'Social Media Marketing',
    'Video Production and Marketing',
    'Data Analytics',
    'Event Promotion'
]

export default function Page() {
    return (
        <div className="bg-slate-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center ">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create Your Customized <span className='text-blue-600'>Automated</span> Solution for Unique Needs</h2>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
                        Take control of your processes and efficiency by creating a tailor-made tool that precisely matches your needs.
                    </p>
                </div>
                <div className="bg-transparent">
                    <div className="mx-auto max-w-7xl py-14 sm:px-6 sm:py-24 lg:px-8">
                        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl rounded-lg sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                            <svg
                                viewBox="0 0 1024 1024"
                                className="absolute left-1/4 top-0 -z-10 h-[20rem] w-[20rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/4 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
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
                            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                                <h2 className="text-xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                                    Achieve Your Vision
                                    <br />
                                    Get Your Customized Automated Tool
                                </h2>
                                <p className="mt-3 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
                                    Are you ready to turn your business vision into reality? Our team is here to help you create a customized automated tool that perfectly aligns with your unique needs and goals.
                                </p>
                            </div>
                            <div className="relative mt-8  sm:h-80 lg:mt-8">
                                <Image
                                    className=" w-[40rem]  rounded-md bg-white/5 ring-1 ring-white/10"
                                    src={AutomationPicture}
                                    alt="Automation picture"
                                    width={1824}
                                    height={1080}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
