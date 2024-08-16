
import React, { useState } from 'react';
import { AnimatedGradientTextDemo } from './ui/GradientText';
import { IconCloudDemo } from './ui/IconCloudDemo';
import { SparklesTextDemo } from './ui/Sparkletext';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="overflow-x-hidden bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">

            <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex items-center justify-evenly flex-col-reverse md:flex-row">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full font-pj">Made by Developers, for Developers</p> */}
                        <AnimatedGradientTextDemo />
                        <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Welcome to NooBuild, a vibrant <span><SparklesTextDemo /></span></h1>
                        {/* <TextRevealDemo/> */}
                        <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-inter">At NooBuild, we believe that by coming together, we can build and create something much bigger and better, empowering every member to grow and succeed in their tech journey.</p>

                        <div className="relative inline-flex mt-10 group gap-5 flex-col md:flex-row">
                            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                            <Link href="/event" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                                Explore Events
                            </Link>
                            {/* <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                                Explore Blogs
                            </a> */}
                        </div>
                    </div>
                    <IconCloudDemo />
                </div>
            </section>
            <br />
        </div>

    )
}
export default Hero;