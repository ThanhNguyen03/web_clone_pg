"use client"
import BrandSlider from "../items/slider";
import { useState, useEffect } from "react";

export default function BrandGallery() {
    const [slideShow, setSlideShow] = useState(5); // Initial values (optional)
    const [slideScoll, setSlideScoll] = useState(2);
  
    const handleWindowSizeChange = () => {
      const width = window.innerWidth;
      setSlideShow(width < 900 ? 1 : 5);
      setSlideScoll(width < 900 ? 1 : 2);
    };
  
    useEffect(() => {
      handleWindowSizeChange();
      window.addEventListener('resize', handleWindowSizeChange);
  
      return () => window.removeEventListener('resize', handleWindowSizeChange);
    }, []);
    return (
        <section className="flex flex-col justify-center items-center my-32 overflow-hidden min-h-[367px]">
            <div className="flex flex-col justify-center items-center ">
                <p className="uppercase text-lg font-bold text-secondary">
                    Các nhãn hàng của chúng tôi
                </p>
                <h2 className="mt-5 uppercase text-5xl font-extrabold text-secondary text-center custom-max:hidden">
                    Các sản phẩm giúp cuộc sống dễ dàng hơn
                    <span className="text-yellow-500">.</span>
                </h2>
            </div>
            <div className="justify-center items-center flex h-full w-full">
                <BrandSlider slideShow={slideShow} slideScoll={slideScoll}/>
            </div>
            <button className="border border-secondary rounded-full mb-10 px-4 py-2 text-secondary font-semibold hover:text-white hover:bg-secondary">
                Xem các thương hiệu mang tính biểu tượng của chúng tôi
            </button>
        </section>
    );
}