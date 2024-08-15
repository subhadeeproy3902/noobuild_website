"use client";
import IconCloud from "@/components/magicui/icon-cloud";
import BlurFade from "@/components/magicui/blur-fade";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
      <BlurFade delay={0.15} inView>
        <IconCloud iconSlugs={slugs} />
      </BlurFade>
    </div>
  );
}
