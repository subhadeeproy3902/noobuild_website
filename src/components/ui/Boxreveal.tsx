import BoxReveal from "@/components/magicui/box-reveal";
import NumberTickerDemo from "./Numberticker";

export async function BoxRevealDemo() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] py-5 gap-3">
            <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8 text-white">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-[3.5rem] font-semibold">
                        Our Vision
                    </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h2 className="mt-[.5rem] text-[1rem] text-gray-200">
                        Innovate, Collaborate, Elevate
                        {/* <span className="text-[#5046e6]">Design Engineers</span> */}
                    </h2>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <div className="mt-[1.5rem] text-gray-300">
                        <p>
                            At NooBuild, we unite tech enthusiasts to innovate, collaborate, and grow. Our platform empowers students to explore technology, transforming ideas into reality. We foster teamwork, continuous learning, and meaningful connections with industry experts and peers. Bridging theory and practice, we inspire the next generation of tech leaders and innovators. Through technology, we drive positive impact and collective growth. Join us to shape the future of tech!
                        </p>
                    </div>
                </BoxReveal>
            </div>
            <div className="pt-4">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <NumberTickerDemo />
                </BoxReveal>
            </div>
        </div>
    );
}
