import React from 'react'
import Image from 'next/image'
import PortfolioImage from '../../../public/6383301.jpg'
import {  Squares2X2Icon,PlusIcon ,VideoCameraIcon, DevicePhoneMobileIcon, ShieldCheckIcon, ArrowPathIcon, CursorArrowRaysIcon, WindowIcon, ChatBubbleLeftEllipsisIcon, CodeBracketIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'


const features = [
    {
        name: 'Personalized Design',
        description:
            'We understand that your portfolio should reflect your unique style and brand. Our expert designers will work closely with you to create a customized website that captures the essence of your work.',
        icon: WindowIcon,
    },
    {
        name: 'User-Focused Experience',
        description:
            'We prioritize user experience, ensuring that your portfolio is not only visually impressive but also easy to navigate, making it a joy for visitors to explore your projects.',
        icon: Squares2X2Icon,
    },
    {
        name: 'Multi-Media Integration',
        description:
            'Whether you are an artist, photographer, designer, or any creative professional, we can seamlessly integrate images, videos, and other multimedia elements to present your work at its best.',
        icon: VideoCameraIcon,
    },
    {
        name: 'Mobile Responsiveness',
        description:
            'In an increasingly mobile world, your portfolio needs to shine on all devices. We ensure that your website looks and functions flawlessly on smartphones, tablets, and desktops.',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'SEO Optimization',
        description:
            'We implement best practices for search engine optimization (SEO) to help your portfolio gain visibility online, making it easier for potential clients or employers to discover your work.',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Easy Content Management',
        description:
            'We provide user-friendly content management systems (CMS) that allow you to update and add new projects effortlessly, keeping your portfolio current.',
        icon: PlusIcon,
    },
    {
        name: 'Security and Performance',
        description:
            'Your work is valuable, and we take its protection seriously. Our websites are built with security in mind, and we optimize performance for a seamless browsing experience.',
        icon: ShieldCheckIcon,
    }
]

export default function Portfolio() {
    return (
        <div className='shadow-2xl shadow-black'>
            <Image src={PortfolioImage} alt={'Portfolio'} />
            <div className='bg-white p-10 py-40 flex flex-col justify-center items-center gap-6'>
                <h6 className='mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Showcase Your Work with a Stunning <span className='text-green-600'>Portfolio</span> Website
                </h6>
                <p className='text-base font-medium flex-wrap text-center w-3/4'>Your work deserves the spotlight it needs to shine. At <span className='mt-6 text-md leading-6 text-gray-600'>Proxium</span>, we specialize in crafting visually captivating and highly functional portfolio websites tailored to showcase your talents, creativity, and achievements. </p>
                <p className='text-base font-semibold leading-7 text-indigo-600'>Our Portfolio Website Development Service:</p>
                <div className='grid grid-cols-2 gap-4 w-5/6 mt-10 sm:mt-20'>
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16 col-span-2 sm:col-span-1">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-2 text-sm leading-5 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}
