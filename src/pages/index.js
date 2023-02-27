import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Hero />
        <Features />
        <Testimonials />
    </>
  )
}
