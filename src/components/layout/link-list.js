"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function LinkList() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Đảm bảo animation chỉ chạy một lần
        threshold: 0, // Nếu một phần trên 50% hiển thị trong viewport, coi là hiển thị
      });
    
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        if (inView) {
          setIsVisible(true);
        }
      }, [inView]);
    return (
        <section ref={ref} className={"mt-40 " + `${isVisible ? "animated" : ""}`}>
            <div className="flex justify-center items-center custom-min:gap-20 custom-max:flex-col custom-max:gap-10">
                <Link href={'/'} className="flex flex-col justify-start px-10 py-auto max-w-[600px] z-10 relative content2">
                    <div className="flex flex-col justify-start overflow-hidden relative rounded-3xl">
                        <Image src={'/IMG_2809.JPG'} alt="link1" layout="responsive" width={10} height={10} className="img-content"/>
                        <div className="translate-y-full flex flex-col justify-start absolute left-0 bottom-0 w-[90%] bg-white z-20 text-secondary rounded-tr-3xl transition-transform duration-500">
                            <div className="ml-5 mr-auto mb-3 mt-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                </svg>
                            </div>
                            <h3 className="ml-5 mr-auto mb-5 text-2xl text-secondary">Quan hệ với nhà đầu tư</h3>
                            <button href={'/'} className="justify-center items-center ml-5 mb-3 mr-auto text-xl font-semibold left-0 z-30 rounded-full border border-secondary bg-white text-secondary py-2 px-4
                            transition-colors duration-1000 ease-out hover:bg-secondary hover:text-white
                            relative overflow-hidden test-2">
                                Nhận thông tin nhà đầu tư
                            </button>
                        </div>
                        <h3 className="absolute text-4xl text-white left-5 bottom-10 font-extrabold">Quan hệ với nhà đầu tư</h3>
                    </div>
                </Link>
                <Link href={'/'} className="flex flex-col justify-start px-10 py-auto max-w-[600px] z-10 content2">
                    <div className="flex flex-col justify-start overflow-hidden relative rounded-3xl">
                        <Image src={'/IMG_2809.JPG'} alt="link2" layout="responsive" width={100} height={10} className="img-content"/>
                        <div className="translate-y-full flex flex-col justify-start absolute left-0 bottom-0 w-[90%] bg-white z-20 text-secondary rounded-tr-3xl transition-transform duration-500">
                            <div className="ml-5 mr-auto mb-3 mt-8"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                            </div>
                            <h3 className="ml-5 mr-auto mb-5 text-2xl text-secondary">Việc làm tại P&G</h3>
                            <button href={'/'} className="justify-center items-center ml-5 mb-3 mr-auto text-xl font-semibold left-0 z-30 rounded-full border border-secondary bg-white text-secondary py-2 px-4
                            transition-colors duration-1000 ease-out hover:bg-secondary hover:text-white
                            relative overflow-hidden test-2">
                                Tìm cơ hội việc làm
                            </button>
                        </div>
                        <h3 className="absolute text-4xl text-white left-5 bottom-10 font-extrabold">Việc làm tại P&G</h3>
                    </div>
                </Link>
            </div>
        </section>
    );
}