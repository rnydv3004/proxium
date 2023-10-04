import React from 'react'
import Logo from '../../../public/logo.png'
import Image from 'next/image'

export default function page() {
  return (
    <div className='flex p-10 pt-20 justify-center items-center bg-slate-100 h-fit w-screen overflow-hidden'>
      <div className='bg-white shadow-2xl w-full h-full p-10'>
        <div className='text-slate-700 text-4xl font-bold'>
         About Us
        </div>
        <div>
          <p className='text-slate-600 text-base font-medium mt-10'>At <span className='text-blue-700 font-bold'>Proxium</span>, we are your trusted partner in digital success. With a passion for innovation and a commitment to excellence, we specialize in providing tailored solutions in web design, web application development, SEO, marketing services, customer support, and automation.<br/><br/><span className='font-bold'>Our Mission</span><br/>Our mission is to empower businesses of all sizes to thrive in the digital age. We believe that every organization is unique, and that's why we approach each project with a fresh perspective, crafting customized solutions that align perfectly with your goals.<br/><br/><span className='font-bold'>Why Choose Us?</span><br/>Customized Excellence: Our team of experts understands that one size doesn't fit all. We create custom websites, web applications, and marketing strategies tailored to your specific needs.<br/><br/><span className='font-bold'>Digital Transformation</span><br/>Whether you need a stunning website, a user-friendly web application, SEO to boost your online presence, or efficient automation solutions, we have the expertise to turn your vision into reality.<br/><br/><span className='font-bold'>Customer-Centric</span><br/>Our commitment to exceptional customer support means we're always here to assist you, ensuring your digital journey is smooth and successful.<br/><br/><span className='font-bold'>Results-Driven</span><br/>We are driven by results. Our marketing services are designed to help you reach your target audience effectively, driving growth and ROI.<br/><br/><span className='font-bold'>Innovation</span><br/>We stay at the forefront of technology trends, ensuring that your digital solutions are cutting-edge and future-ready.<br/><br/><span className='font-bold'>Let's Get Started</span><br/>Ready to take your digital presence to the next level? Contact us today, and let's collaborate to transform your ideas into digital success stories. Join us on this exciting journey of innovation, growth, and unparalleled customer satisfaction.</p>
        </div>
      </div>
    </div>
  )
}
