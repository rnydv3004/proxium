import { ArrowPathIcon, CursorArrowRaysIcon , WindowIcon, ChatBubbleLeftEllipsisIcon, CodeBracketIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Websites',
    description:
      'We specialize in a wide range of website types, from brochures and catalogs to business sites and more. Our goal is to craft visually appealing and user-friendly online platforms that captivate and engage your audience.',
    icon: WindowIcon,
  },
  {
    name: 'Web Application',
    description:
      'Transform your ideas into powerful web applications with our expertise. Our web application development services focus on delivering responsive and feature-rich solutions that cater to your unique needs and objectives.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Search Engine Optimization',
    description:
      'Boost your online presence with our comprehensive Search Engine Optimization (SEO) services. We are dedicated to optimizing your website to rank higher on search engines, ensuring your business gets the visibility it deserves.',
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: 'Automation',
    description:
      'Streamline your operations and enhance productivity through our automation solutions. We specialize in developing automated systems that simplify tasks, allowing you to focus on what truly matters.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Marketing',
    description:
      'Elevate your brand with our strategic marketing services. Our team is committed to creating tailored marketing campaigns that resonate with your target audience, driving growth and customer engagement.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Customer Service Support',
    description:
      'Our Service Desk solutions are designed to provide top-notch customer support. We specialize in offering efficient and responsive service desk support to address your customers\' inquiries, technical issues, and requests promptly.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="sm:py-4 w-screen sm:my-24 mb-28">
      <div className="mx-auto h-full max-w-7xl px-6 lg:px-8 flex flex-col justify-center">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Launch Your Business Online at &#9889;Lightning Speed</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          All-in-One Solutions for Elevating Your Online Business Presence
          </p>
          <p className="mt-6 text-md leading-6 text-gray-600">
          From Deployment to Marketing, We have Got You Covered
          </p>
        </div>
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
  )
}
