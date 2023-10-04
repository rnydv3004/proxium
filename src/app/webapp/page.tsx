import AutomationPicture from '../../../public/2962489.jpg'
import Image from 'next/image'
import { TagIcon, ClockIcon, UserGroupIcon, LightBulbIcon, ArrowPathIcon, CursorArrowRaysIcon, WindowIcon, ChatBubbleLeftEllipsisIcon, CodeBracketIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'

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


const features = [
    {
        name: 'Customized Solutions',
        description:
            'We understand that every business is unique, and so are its challenges. Our expert team of developers, designers, and strategists work closely with you to craft tailored web applications that align perfectly with your objectives and resonate with your target audience.',
        icon: WindowIcon,
    },
    {
        name: 'Innovation and Expertise',
        description:
            'Our commitment to staying at the forefront of technology ensures that your web applications are built using the latest and most effective tools and techniques.',
        icon: LightBulbIcon,
    },
    {
        name: 'User-Centric Design',
        description:
            'We prioritize user experience (UX) in everything we create. Our designs are not only visually stunning but also intuitively navigable, ensuring high user engagement and satisfaction.',
        icon: UserGroupIcon,
    },
    {
        name: 'Quality Assurance',
        description:
            'Rigorous testing and quality assurance procedures are embedded in our development process, ensuring that your web applications are not just functional but also reliable and secure.',
        icon: TagIcon,
    },
    {
        name: 'Timely Delivery',
        description:
            'We value your time and are committed to delivering projects on time and within budget, without compromising on quality.',
        icon: ClockIcon,
    },
    {
        name: 'Ongoing Support',
        description:
            'Our partnership does not end at project delivery. We provide continuous support and maintenance to ensure your web applications remain up-to-date, secure, and optimized.',
        icon: ChatBubbleLeftEllipsisIcon,
    },
]


export default function Page() {
    return (
        <div className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center ">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your <span className='text-blue-700'>Vision</span>, Our Web App Reality</h2>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-gray-600">
                        Innovate and Grow with Custom Web App Development
                    </p>
                </div>
                {/* <div className="bg-transparent">
                    <div className="mx-auto max-w-7xl py-14 sm:px-6 sm:py-24 lg:px-8">
                        <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl rounded-lg sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
                </div> */}
            </div>
            <div className="sm:py-4 w-screen sm:my-6 mb-28">
                <div className="mx-auto h-full max-w-7xl px-6 lg:px-8 flex flex-col justify-center">
                    {/* <div className="mx-auto max-w-2xl lg:text-center"> */}
                        {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Launch Your Business Online at &#9889;Lightning Speed</h2> */}
                        {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Strategic Web App Development to Drive Your Success
                        </p> */}
                        {/* <p className="mt-6 text-md leading-6 text-gray-600">
                            With our cutting-edge web application development services, we bring innovation and excellence to every project.
                        </p> */}
                    {/* </div> */}
                    <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-12 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-sm leading-5 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
