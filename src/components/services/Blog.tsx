import React from 'react'
import Newspaper from '../../../public/19684.jpg'
import Image from 'next/image'

export default function Blog() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-200 px-6 pb-16 pt-8  sm:px-16 md:pt-24 flex flex-col gap-10  lg:px-24 lg:pt-0 justify-between h-full">
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
            <div className='flex flex-col justify-between bg-white p-10 rounded-lg h-fit mt-10'>
                <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-center w-full flex justify-center items-center flex-col">
                    <h2 className="text-3xl text-center w-full font-bold tracking-tight sm:text-4xl mb-5">
                        Your Blog, Our Expertise
                    </h2>
                    <p className='text-sm sm:text-lg text-center w-full sm:w-8/12'>
                        Elevate your online presence with our blog website development expertise. We specialize in crafting captivating, user-friendly blog platforms that engage your audience and amplify your digital storytelling. Unlock the power of words and visuals with a website that reflects your unique voice and vision.
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-2 bg-white sm:p-10 rounded-lg'>
                <div className="col-span-4 sm:col-span-2 flex flex-col justify-between bg-white px-5 py-1 rounded-2xl h-fit mt-5">
                    <h2 className="text-3xl text-center sm:text-left font-bold tracking-tight sm:text-4xl mb-8">
                        Revolutionize Your News Experience
                    </h2>
                    <p className='text-center text-sm sm:text-left sm:text-base'>
                        Elevate your online presence with a cutting-edge news website and a companion news app. We craft dynamic news platforms that deliver real-time updates, captivating multimedia content, and a seamless mobile experience. Stay connected and informed wherever you go – your news, your way.
                    </p>
                </div>
                <div className="col-span-4 sm:col-span-2 mt-2 h-auto lg:mt-2 bg-white p-2" >
                    <Image
                        className="w-[30rem]"
                        src={Newspaper}
                        alt="Newspaper"
                        width={1824}
                        height={1080}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>


        </div>
    )
}
