"use client";

import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Particles } from "./ui/particles";
import { Badge } from "./Badge";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="absolute top-0 z-[1] h-svh w-screen dark:brightness-100 dark:opacity-100 brightness-200 opacity-65 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(40,119,138,0.4),rgba(255,255,255,0))]"></div>
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color="#fff"
        refresh
      />
      <div className="relative z-10 flex flex-col items-center">
        <Badge text="🎉 Made by Developers, for Developers" />
        <h1 className="text-4xl bg-gradient-to-br from-foreground via-foreground/80 to-background/50 bg-clip-text text-transparent mt-4 md:text-5xl xl:text-7xl scale-105 font-bold lg:tracking-tight xl:tracking-tighter max-w-4xl text-center">
          The Pinnacle of Innovation NooBuild
        </h1>
        <p className="my-6 text-center md:text-lg text-base opacity-90 mt-4 text-muted-foreground max-w-2xl mx-auto">
          At NooBuild, we believe that by coming together, we can build and
          create something much bigger and better, empowering every member to
          grow and succeed in their tech journey.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="inline-flex mt-4 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-950/10 hover:bg-gray-950/50 h-11 rounded-md px-8"
        >
          Explore Events
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
    </motion.section>
  );
}
