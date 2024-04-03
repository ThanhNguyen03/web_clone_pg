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

        if (!isPause) {
            imgs.map(img => img.classList.add('animate-pause'));
        } else {
            imgs.map(img => img.classList.remove('animate-pause'));
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
            <div className="z-10 left-0 right-0 h-[calc(100vh-33px)] max-w-[100wh] bg-transparent overflow-hidden">
                <div style={{ backgroundImage: `url(/IMG_2800.JPG)` }} className="left-0 right-0 bg-cover w-full h-[100vh] circle"/>
            </div>
        </section>
    );
}
