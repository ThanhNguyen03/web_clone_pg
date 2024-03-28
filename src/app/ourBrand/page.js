"use client"
import { useState, useEffect } from "react";
import SearchIcon from "@/components/icons/search";
import Image from "next/image";
import CheckIcon from "@/components/icons/check";
import BrandCategory from "@/components/items/brandCategory";
import BrandItem from "@/components/items/brandItem";

export default function BrandPage() {
    const [isFocused, setIsFocused] = useState(false);
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
                <div className="left-1/2 w-full">
                    <form className="flex justify-center ">
                        <fieldset className="mb-5 mx-auto max-w-[450px]">
                            <legend className="font-bold text-xl mb-5 text-secondary uppercase">Bộ lọc</legend>
                            <div onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)} 
                            className={`w-11/12 my-auto flex py-2 px-4 border border-secondary hover:border-2 hover:font-semibold z-20 rounded-full ${isFocused ? 'focus:border-2' : ''}`}>
                                <input type="text" onFocus={()=>setIsFocused(true)} 
                                className="w-full text-secondary placeholder-black outline-none placeholder-transparent"/>
                                <SearchIcon/>
                            </div>
                            <div className="mt-5">
                                <ul>
                                    <li className="mb-2 flex gap-2">
                                        <input className="w-6 h-6 ml-1" type="checkbox" id="cat-Chăm sóc Trẻ em"/>
                                        <label className="flex" for="cat-Chăm sóc Trẻ em">
                                            Chăm sóc Trẻ em
                                        </label>
                                    </li>
                                    <li className="mb-2 flex gap-2">
                                        <input className="w-6 h-6 ml-1" type="checkbox" id="cat-Chăm sóc vải"/>
                                        <label className="flex" for="cat-Chăm sóc vải">
                                            Chăm sóc vải
                                            
                                        </label>
                                    </li>
                                    <li className="mb-2 flex gap-2">
                                        <input className="w-6 h-6 ml-1" type="checkbox" id="cat-Chăm sóc Phụ nữ"/>
                                        <label className="flex" for="cat-Chăm sóc Phụ nữ">
                                            Chăm sóc Phụ nữ
                                            
                                        </label>
                                    </li>
                                    <li className="mb-2 flex gap-2">
                                        <input className="w-6 h-6 ml-1" type="checkbox" id="cat-Grooming"/>
                                        <label className="flex" for="cat-Grooming">
                                            Grooming
                                            
                                        </label>
                                    </li>
                                    <li className="mb-2 flex gap-2">
                                        <input className="w-6 h-6 ml-1" type="checkbox" id="cat-Chăm sóc Tóc"/>
                                        <label className="flex" for="cat-Chăm sóc Tóc">
                                            Chăm sóc Tóc
                                            
                                        </label>
                                    </li>
                                    <li className="mb-2 flex gap-2">
                                        <input className="w-6 h-6 ml-1" type="checkbox" id="cat-Chăm sóc Nhà cửa"/>
                                        <label className="flex" for="cat-Chăm sóc Nhà cửa">
                                            Chăm sóc Nhà cửa
                                            
                                        </label>
                                    </li>
                                    <li className="mb-2 flex gap-2">
                                        <input className="w-6 h-6 ml-1" type="checkbox" id="cat-Chăm sóc răng miệng"/>
                                        <label className="flex" for="cat-Chăm sóc răng miệng">
                                            Chăm sóc răng miệng
                                            
                                        </label>
                                    </li>
                                    <li className="mb-2 flex gap-2">
                                        <input className="w-6 h-6 ml-1" type="checkbox" id="cat-Chăm sóc da và cá nhân"/>
                                        <label className="flex" for="cat-Chăm sóc da và cá nhân">
                                            Chăm sóc da và cá nhân
                                            
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="min-h-[100vh] p-2">
                    <BrandCategory title={'Chăm sóc Trẻ em'}>
                        <BrandItem src={'/IMG_2804.JPG'} details={'Tã em bé'}/>
                    </BrandCategory>
                    <BrandCategory title={'Chăm sóc vải'}>
                        <BrandItem src={'/IMG_2801.JPG'} details={'Sản phẩm giặt là'}/>
                        <BrandItem src={'/IMG_2802.JPG'} details={'Chất bảo vệ & làm mềm vải'}/>
                        <BrandItem src={'/IMG_2809.JPG'} details={'Sản phẩm giặt là'}/>
                    </BrandCategory>
                    <BrandCategory title={'Chăm sóc Phụ nữ'}>
                        <BrandItem src={'/IMG_2800.JPG'} details={'Băng vệ sinh chăm sóc phụ nữ'}/>
                    </BrandCategory>
                    <BrandCategory title={'Grooming'}>
                        <BrandItem src={'/IMG_2802.JPG'} details={'Dao cạo & Chăm sóc da'}/>
                    </BrandCategory>
                    <BrandCategory title={'Chăm sóc tóc'}>
                        <BrandItem src={'/IMG_2809.JPG'} details={'Chăm sóc Tóc'}/>
                        <BrandItem src={'/IMG_2800.JPG'} details={'Chăm sóc Tóc'}/>
                        <BrandItem src={'/IMG_2801.JPG'} details={'Chăm sóc Tóc'}/>
                    </BrandCategory>
                    <BrandCategory title={'Chăm sóc Nhà cửa'}>
                        <BrandItem src={'/IMG_2802.JPG'} details={'Máy khử mùi'}/>
                    </BrandCategory>
                    <BrandCategory title={'Chăm sóc răng miệng'}>
                        <BrandItem src={'/IMG_2804.JPG'} details={'Bàn chải đánh răng & chỉ nha khoa'}/>
                    </BrandCategory>
                    <BrandCategory title={'Chăm sóc da và cá nhân'}>
                        <BrandItem src={'/IMG_2800.JPG'} details={'Dao cạo & Chăm sóc da'}/>
                        <BrandItem src={'/IMG_2809.JPG'} details={'Chăm sóc da và da mặt'}/>
                        <BrandItem src={'/IMG_2801.JPG'} details={'Xà phòng kháng khuẩn'}/>
                    </BrandCategory>
                </div>
            </section>
        </>
    );
}