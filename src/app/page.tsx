import FeatureSection from '@/components/Featuresection'
import FeatureSectionTwo from '@/components/Featuresectiontwo'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div className='flex text-black flex-col h-fit w-screen overflow-x-hidden'>
      <Hero />
      <FeatureSectionTwo />
      <FeatureSection />
    </div>
  )
}
