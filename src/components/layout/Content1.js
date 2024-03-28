"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Content1() {
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
        <section ref={ref} className={"overflow-x-hidden " + `${isVisible ? "animated" : ""}`}>
            <div ref={ref} className={"grid grid-cols-2 min-w-[120vw] gap-10 mx-auto " + `${isVisible ? "content1-slideright" : ""}`}>
                <div style={{ backgroundImage: `url('/IMG_2800.JPG')` }} 
                className="rounded-full w-full h-[30vw] border bg-cover m-auto shadow-lg" />
                <div className="content1-content rounded-full w-full h-[30vw] border m-auto shadow-lg flex justify-center items-center">
                    <div className="bg-secondary w-full h-full rounded-l-full flex flex-col justify-center items-center">
                        <h2 className="mt-12 mx-20 uppercase text-4xl font-extrabold text-white text-center leading-tight">
                            Từng bước giảm tác động đến môi trường
                            <span className="text-yellow-500 text-6xl">.</span>
                        </h2>
                        <button className="mt-8 text-xl border border-white rounded-full mb-10 px-4 py-2 text-white font-semibold hover:bg-white hover:text-secondary">
                            Nổ lực của chúng tôi
                        </button>
                    </div>
                    <div style={{ backgroundImage: `url('/IMG_2800.JPG')` }} 
                    className="rounded-r-full w-full h-full bg-cover m-auto shadow-lg" />
                </div>
            </div>
        </section>
    );
}