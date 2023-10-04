'use client'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ArrowPathIcon, CursorArrowRaysIcon, WindowIcon, ChatBubbleLeftEllipsisIcon, CodeBracketIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../public/logo.png'
import Image from 'next/image'
import { siteMap } from '@/constants'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const products = [
    { name: 'Website', description: 'Enhance User Engagement and Experience', href: siteMap.websites, icon: WindowIcon },
    { name: 'Web App Development', description: 'Engage and Interact Effectively with Your Audience', href: siteMap.webapp, icon: CodeBracketIcon },
    { name: 'SEO', description: 'Protect and Optimize Customer Data for Better Visibility', href: siteMap.seo, icon: CursorArrowRaysIcon },
    { name: 'Automations', description: 'Streamline Operations and Integrate with External Tools', href: siteMap.automation, icon: ArrowPathIcon },
    { name: 'Marketing Support', description: 'Create Targeted Funnels to Drive Conversions', href: siteMap.marketing, icon: ChatBubbleLeftEllipsisIcon },
]
const callsToAction: any[] = [
    // { name: 'Contact sales', href: '/underdev', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 z-10  w-full bg-white bg-opacity-30 border-b-2 border-slate-200">
            <nav className="mx-auto flex  items-center justify-between p-2 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="flex h-full justify-end items-end">
                        <Image src={Logo} alt="Logo" height={28} />
                        <p className='text-blue-800 font-bold text-2xl'>roxium</p>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative ">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 px-2 outline-none">
                            Services
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link href="/underdev" className="text-sm font-semibold leading-6 text-gray-900">
                        Pricing
                    </Link>
                    <Link href="/underdev" className="text-sm font-semibold leading-6 text-gray-900">
                        Team
                    </Link>
                    <Link href="/underdev" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                        Connect <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10 " />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex h-full justify-end items-end">
                            <Image src={Logo} alt="Logo" height={28} />
                            <p className='text-blue-800 font-bold text-2xl'>roxium</p>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/underdev"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="/underdev"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Team
                                </a>
                                <a
                                    href="/underdev"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </a>
                            </div>
                            {/* <div className="py-6">
                                <a
                                    href="/underdev"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div> */}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
