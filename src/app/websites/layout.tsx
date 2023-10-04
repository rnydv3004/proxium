import { ShoppingCartIcon, NewspaperIcon, FolderIcon, ChatBubbleBottomCenterIcon, WindowIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="pt-24 bg-slate-200">
            <div className='flex flex-col justify-center items-center'>
                <div className="px-12 mt-10 mx-auto max-w-7xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-left sm:text-center">
                            Crafting Exceptional <span className='text-blue-900'>Online</span> Experiences
                        </h1>
                        <p className="mt-3 text-lg leading-8 text-gray-600 text-left sm:text-center">
                            Elevate Your Brand with Tailor-Made Websites and Digital Solutions
                        </p>
                    </div>
                </div>
                <div className="w-auto mx-2 mt-5 text-center md:w-10/12">
                    <div className="relative z-0 w-full mt-8">
                        <div className="relative overflow-hidden shadow-2xl bg-white rounded-xl rounded-b-none">
                            <div className="flex items-center flex-none px-4 bg-gradient-to-t from-blue-950 via-blue-800 to-blue-700 rounded-b-none h-11 rounded-xl">
                                <div className="flex space-x-1.5">
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                </div>
                            </div>
                            <p className='text-slate-700 font-medium text-lg mt-6'>To understand your requirement is very important</p>
                            <div className="relative mt-8 mb-4 h-fit gap-8 lg:mt-5 font-semibold text-xs text-slate-600 flex flex-wrap px-5 justify-evenly items-center">
                                <Link href={'/websites/business-websites'} className='flex flex-col gap-2 h-auto w-auto hover:scale-105 active:scale-100 cursor-pointer transition-transform transform duration-300'>
                                    <WindowIcon />
                                    <p>Business<br /> Website</p>
                                </Link>
                                <Link href={'/websites/ecommerce'} className='flex flex-col gap-2 h-auto w-auto hover:scale-105 active:scale-100 cursor-pointer transition-transform transform duration-300' >
                                    <ShoppingCartIcon />
                                    <p>Ecommerce<br /> Website</p>
                                </Link>
                                <Link href={'/websites/blogs-news'} className='flex flex-col gap-2 h-auto w-auto hover:scale-105 active:scale-100 cursor-pointer transition-transform transform duration-300'>
                                    <NewspaperIcon />
                                    <p>Blogs/News<br /> Website</p>
                                </Link>
                                <Link href={'/websites/portfolio-page'} className='flex flex-col gap-2 h-auto w-auto hover:scale-105 active:scale-100 cursor-pointer transition-transform transform duration-300' >
                                    <FolderIcon />
                                    <p>Portfolio<br /> Website</p>
                                </Link>
                                <Link href={'/websites/landing-page'} className='flex flex-col gap-2 h-auto w-auto hover:scale-105 active:scale-100 cursor-pointer transition-transform transform duration-300'>
                                    <ArrowDownTrayIcon />
                                    <p>Landing Page<br /> Website</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-screen h-fit bg-slate-200 text-black relative overflow-hidden shadow-2xl shadow-black'>
                    {children}
                </div>
            </div>
        </section >
    )
}