"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AboutUs() {
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
        <section ref={ref} className={"overflow-x-hidden  " + `${isVisible ? "animated" : ""}`}>
            <div ref={ref} className={"custom-min:grid grid-cols-2 xl:min-w-[120vw] custom-max:h-[70vh] gap-10 mx-auto custom-max:flex custom-max:relative " + `${isVisible ? "content1-slideright" : ""}`}>
                <div style={{ backgroundImage: `url('/IMG_2800.JPG')` }} 
                className="custom-min:rounded-full w-full h-[30vw] custom-max:h-[70vh] bg-cover m-auto shadow-lg" />
                <div className="content1-content w-full custom-max:w-[40vw] custom-max:h-[40vw] h-[30vw] custom-max:absolute rounded-full m-auto shadow-lg flex justify-center items-center custom-max:left-0 custom-max:right-0 custom-max:bottom-0 custom-max:top-0">
                    <div className="custom-min:bg-secondary w-full h-full rounded-l-full custom-max:rounded-full flex flex-col justify-center items-center overflow-hidden z-10">
                        <h2 className="mt-12 xl:mx-20 mx-6 uppercase xl:text-4xl text-xl xl:font-extrabold font-semibold text-white text-center leading-tight">
                            Từng bước giảm tác động đến môi trường
                            <span className="text-yellow-500 xl:text-6xl text-2xl">.</span>
                        </h2>
                        <button className="xl:mt-8 mt-4 xl:text-xl border border-white rounded-full mb-10 px-4 py-2 text-white xl:font-semibold hover:bg-white hover:text-secondary">
                            Nổ lực của chúng tôi
                        </button>
                    </div>
                    <div className='custom-max:block bg-secondary opacity-80 absolute w-full h-full rounded-full custom-min:hidden'></div>
                    <div style={{ backgroundImage: `url('/IMG_2800.JPG')` }} 
                    className="rounded-r-full w-full h-full bg-cover m-auto shadow-lg custom-max:hidden" />
                </div>
            </div>
        </section>
    );
}