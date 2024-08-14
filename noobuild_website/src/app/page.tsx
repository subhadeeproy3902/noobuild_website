import Hero from '@/components/Hero'
import {SmoothScrollHero} from '@/components/ScrollHero'
import { AccordionVariant } from '@/components/ui/Accordiondemo'
import { BoxRevealDemo } from '@/components/ui/Boxreveal'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Hero/>
      <SmoothScrollHero/>
      <BoxRevealDemo/>
      <AccordionVariant/>
    </div>
  )
}

export default Page