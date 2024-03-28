"use client"
import Image from "next/image";
import Link from "next/link";
import UpRightArrow from "../icons/upRightArrow";
import PauseIcon from "../icons/pause";
import PlayIcon from "../icons/play";
import { useState } from "react";

export default function Hero() {
    const [isPause, setIsPause] = useState(false);
    const onPause = () => {
        setIsPause(!isPause);
        const imgs = Array.from(document.getElementsByClassName('circle'));
        // const slide = document.querySelector('.slide');

        if (!isPause) {
            imgs.map(img => img.classList.add('animate-pause'));          
            // slide.classList.add('animate-pause');
        } else {
            imgs.map(img => img.classList.remove('animate-pause'));
            // slide.classList.remove('animate-pause');
        }
    };
    
    return (
        <section className="hero items-center text-center ">
            <div className="slide-title absolute z-20 left-0 right-0 items-center h-full mb-8 flex flex-col justify-center gap-8 font-semibold">
                <h1 className="text-6xl text-white">
                    Chiến Lược Tăng Trưởng<br/>
                    Toàn Diện <span className="text-yellow-400 text-6xl">.</span>
                </h1>
                <Link href={'/'} className="flex gap-2 items-center text-xl rounded-full bg-secondary text-white mx-auto justify-center py-2 px-6
                transition-colors duration-1000 ease-out hover:bg-white hover:text-secondary
                relative overflow-hidden test">
                    Báo cáo thường niên 2023
                    <UpRightArrow/>
                </Link>
            </div>
            {!isPause && (       
                <div className="absolute z-20 right-6 items-center text-white justify-center top-20 rounded-full bg-secondary">
                    <button onClick={onPause} type="button" title="pause" className="p-2 justify-center">
                        <PauseIcon/>
                    </button>
                </div>
            )}
            {isPause && (
                <div className="absolute z-20 right-6 items-center text-white justify-center top-20 rounded-full bg-secondary">
                    <button onClick={onPause} type="button" title="pause" className="p-2 justify-center">
                        <PlayIcon/>
                    </button>
                </div>
            )}
            <div className="overflow-hidden absolute z-10 left-0 right-0 min-h-full h-md circle ">
                <div className="relative ">
                    <Image src={'/IMG_2800.JPG'} alt={'pic1'} layout={'responsive'} width={100} height={10}/>
                </div>
                <div className="relative">
                    <Image src={'/IMG_2801.JPG'} alt={'pic3'} layout={"responsive"} width={100} height={10}/>
                </div>
                <div className="relative">
                    <Image src={'/IMG_2802.JPG'} alt={'pic4'} layout={"responsive"} width={100} height={10}/>
                </div>
                <div className="relative">
                    <Image src={'/IMG_2804.JPG'} alt={'pic5'} layout={"responsive"} width={100} height={10}/>
                </div>
                <div className="relative">
                    <Image src={'/IMG_2809.JPG'} alt={'pic6'} layout={"responsive"} width={100} height={10}/>
                </div>
            </div>
        </section>
    );
}
