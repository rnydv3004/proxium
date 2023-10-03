'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import { siteMap } from '@/constants'

export default function Footer() {
    return (
        <div className="bg-gray-900 w-full pt-4 md:pt-10 pr-4 pb-2 pl-5 md:px-24 lg:px-8 overflow-hidden">
            <div className="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className=" mt-0 mr-0 mb-8 ml-0 grid row-gap-10 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p className="tracking-wide text-gray-300 text-medium">Services</p>
                            <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                                <div>
                                    <Link href={siteMap.websites} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Website</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Web Application</Link>
                                </div>
                                <div>
                                    <Link href={siteMap.seo} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">SEO: Serach Engine Optimization</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Automation</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Marketing</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Customer Support Service</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="tracking-wide text-gray-300 text-medium">Pricing</p>
                            <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">
                                <div>
                                    <Link href={siteMap.websites} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Website</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Web Application</Link>
                                </div>
                                <div>
                                    <Link href={siteMap.seo} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">SEO: Serach Engine Optimization</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Automation</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Marketing</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Customer Support Service</Link>
                                </div>
                            </div>
                            <div>
                                {/* <p className="tracking-wide text-gray-300 text-medium">About</Link> */}
                                <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">

                                </div>
                                {/* <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Sports</Link>
                                </div>
                                <div>
                                    <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Blogs</Link>
                                </div> */}
                            </div>
                        </div>
                        <div>
                            <p className="tracking-wide text-gray-300 text-medium">Others</p>
                            <div className="mt-2 mr-0 mb-0 ml-0 space-y-2">

                            </div>
                            <div>
                                <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Team</Link>
                            </div>
                            <div>
                                <Link href={"/underdev"} className="transition-colors duration-300 hover:text-deep-purple-accent-200 text-gray-500">Support</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="md:max-w-md lg:col-span-2">
                        <p className="tracking-wide text-gray-300 font-medium text-base">Subscribe for updates</p>
                        <div className="md:flex-row flex mt-4 mr-0 mb-0 ml-0">
                            <input placeholder="Email" type="text" className="w-full h-12 pt-0 pr-4 pb-0 pl-4 mt-0 mr-0 mb-4 ml-0 bg-white
              border-gray-300 border flex-grow transition duration-200 rounded shadow-sm appearance-none md:mr-2 md:mb-0
              focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline" />
                            <button className="inline-flex items-center justify-center h-12 pt-0 pr-6 pb-0 pl-6 mt-0 mr-0 mb-4 ml-2
              font-medium text-white rounded bg-blue-700 tracking-wide transition duration-200 shadow-md
              hover:bg-deep-blue-900 focus:shadow-outline focus:outline-none">Subscribe</button>
                        </div>
                        <p className="mt-4 mr-0 mb-0 ml-0 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimh.</p>
                    </div> */}
                    <div className="flex flex-col gap-5 lg:flex-1 w-fit">
                        <Link href="/" className="flex h-fit">
                            <Image src={Logo} alt="Logo" height={28} />
                            <p className='text-blue-800 font-bold text-2xl'>roxium</p>
                        </Link>
                        <p className='text-sm text-slate-400 w-fit'>Contact: (+1)647-500-7503</p>
                    </div>                    
                </div>
                <div className="flex flex-col justify-between pt-4 pr-0 pb-5 pl-0 border-t border-gray-800 sm:flex-row">
                    <p className="text-sm text-gray-500">© Copyright 2021 Lorem Inc. All rights reserved.</p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0"><i className="fa-twitter h-5 fab text-gray-500
          transition-colors duration-300 hover:text-teal-accent-400"></i><i className="fa-instagram h-5 fab
          text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"></i><i className="fa-facebook h-5
          fab text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"></i></div>
                </div>
            </div>
        </div>
    )
}
