"use client"
import Image from "next/image";
import FilterSection from "@/app/ourBrand/filterSection";
import ProductSection from "./productSection";

export default function BrandPage() {
    return (
        <>
            <section className="hero items-center text-left ">
                <div className="absolute z-20 left-28 top-40 items-left h-full mb-8 flex flex-col justify-left gap-2 font-semibold">
                    <div className="w-16 h-16">
                        <Image src={'/bg.png'} alt={'hero-icon'} layout={'responsive'} width={100} height={10}/>
                    </div>
                    <h1 className="text-[80px] text-white font-extrabold">
                        Các nhãn hiệu<span className="text-cyan-400 text-[80px]">.</span>
                    </h1>
                    <p className="max-w-[480px] text-white text-lg">
                        P&G mang đến những thương hiệu uy tín, chất lượng hàng đầu, với hiệu quả và giá trị vượt trội để đáp ứng nhu cầu làm sạch, giữ gìn sức khỏe và đảm bảo vệ sinh của người tiêu dùng trên toàn thế giới.
                    </p>
                </div>
                <div className="overflow-hidden absolute z-10 left-0 right-0 min-h-full h-md ">
                    <div className="relative ">
                        <Image src={'/IMG_2804.JPG'} alt={'pic1'} layout={'responsive'} width={100} height={10}/>
                    </div>
                </div>
            </section>
            <section className="mt-16 section-2">
                <div className="left-0 w-full search-form ">
                    <FilterSection/>
                </div>
                <div className="min-h-[100vh] p-2">
                    <ProductSection/>
                </div>
            </section>
        </>
    );
}