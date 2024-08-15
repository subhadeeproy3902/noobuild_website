"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import noobuild from "@/assets/noobuild_logo.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
    return (
        <div className='footer flex flex-col justify-around items-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] pt-28 pb-10'>
            <Image src={noobuild} alt="Noobuild logo" width={200} height={200} />
            <div className='logos flex items-center justify-center gap-6 text-white text-4xl mt-5' id='social'>
                <a href="https://www.instagram.com/noobuild.community" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/noobuild/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://x.com/NooBuild_Tech" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                </a>
                <a href="https://discord.com/invite/QJpRcUcAsx" target="_blank" rel="noreferrer">
                    <FaDiscord />
                </a>
                <a href="mailto:noobuild.community@gmail.com" target='_blank'>
                    <IoMdMail />
                </a>
                <a href="https://chat.whatsapp.com/IjlTMhmIqWmIddCbN95Rai" target="_blank" rel="noreferrer">
                    <FaWhatsapp />
                </a>
                {/* <a href="https://linktr.ee/noobuild" target='_blank'>
                    <SiLinktree />
                </a> */}
            </div>
            <div className='flex items-center justify-center text-white text-lg mt-8 gap-3'>
                <p>{`© ${year}. All Rights Reserved.`}</p>
            </div>
        </div>
    )
}

export default Footer