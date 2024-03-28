"use client"
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../icons/downArrow";
import GlobalIcon from "../icons/global";
import SearchIcon from "../icons/search";
import XMarkIcon from "../icons/xMark";
import { useState } from "react";
import RightArrow from "../icons/rightArrow";

export default function Header() {
    const [searching, setSearching] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    return (
        <header className="bg-primary border-b shadow-md absolute z-10 w-full">
            <Link href={'/'} className="left-0 p-2 mt-2 mx-6 absolute flex justify-center gap-1 text-secondary rounded-full border border-secondary hover:border-2 hover:font-semibold z-10">
                Việt Nam
                <GlobalIcon/>
            </Link>
            {!searching && (
                <button type="button" title="search" onClick={()=>setSearching(true)} 
                    className="right-0 py-2 px-12 mt-2 mx-6 absolute justify-center text-secondary rounded-full border border-secondary hover:border-2 hover:font-semibold z-20">
                    <SearchIcon/>
                </button>
            )}
            {searching && (
                <form className="flex right-0 py-2 px-4 gap-24 mt-2 mx-6 absolute justify-center rounded-full border border-secondary hover:border-2 hover:font-semibold z-20">
                    <label className="">
                        <input type="text" autoFocus={'true'} value={inputValue} onChange={handleChange} onBlur={()=>setSearching(false)}  placeholder="What do you want to find?" className="w-full text-secondary placeholder-black outline-none placeholder-transparent"></input>
                    </label>
                    <XMarkIcon onClick={()=>setSearching(false)}/>
                </form>
            )}            
            
            <div className="flex justify-center">
                <nav className="h-full flex justify-center absolute z-0 ">
                    <ul className="header p-4 whitespace-nowrap font-semibold text-sm text-secondary z-10">
                        <li className="relative group flex justify-center items-center gap-1">
                            <button className='flex justify-center items-center gap-1 hover:opacity-50 cursor-default text-base'>
                                Các nhãn hiệu của chúng tôi
                                <DownArrow/>
                            </button>
                            <div className='absolute top-0 transittion group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
                                group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform'>
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full text-secondary">
                                    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform
                                        group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm'>
                                    </div>
                                    <ul className='relative z-10 text-secondary block my-2'>
                                        <li className="my-6 ml-3">
                                            <Link href={'/ourBrand'}>Các nhãn hiệu</Link>
                                        </li>
                                        <li className="my-6 ml-3">
                                            <Link href={'/'}>Đổi mới</Link>
                                        </li>
                                        <li className="my-6 ml-3">
                                            <Link href={'/productSafety'}>An toàn sản phẩm</Link>
                                        </li>
                                        <li className="my-6 ml-3">
                                            <Link href={'/'}>Thành phần</Link>
                                        </li>
                                        <li className="my-6 ml-3">
                                            <Link href={'/'}>#BECRUELTYFREE</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="relative group flex justify-center items-center gap-1">
                            <button className='flex justify-center items-center gap-1 hover:opacity-50 cursor-default text-base'>
                                Ảnh hưởng của chúng tôi
                                <DownArrow/>
                            </button>
                            <div className='absolute top-0 transittion group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 
                                group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform'>
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full text-secondary">
                                    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform
                                        group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm'>
                                    </div>
                                    <ul className='relative z-10 text-secondary block'>
                                        <li className="my-6 ml-3">
                                            <Link href={'/'}>Ảnh hưởng cộng đồng</Link>
                                        </li>
                                        <li className="my-6 ml-3 gap-1 flex items-center group1">
                                            <button className="flex items-center gap-1">
                                                <Link href={'/'}>Bình đẳng và hòa nhập</Link>
                                                <RightArrow/>
                                            </button>
                                            <div className='absolute top-0 left-64 transittion group1-hover:translate-y-5 translate-y-0 opacity-0 invisible 
                                                group1-hover:opacity-100 group1-hover:visible duration-500 ease-in-out group1-hover:transform z-50 min-w-[250px] transform'>
                                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full text-secondary">
                                                    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-y-0 transition-transform
                                                        group1-hover:translate-y-[5rem] duration-500 ease-in-out rounded-sm'>
                                                    </div>
                                                    <ul className='relative z-10 text-secondary block my-2'>
                                                        <li className="my-6 ml-3">
                                                            <Link href={'/'}>Bình đẳng giới</Link>
                                                        </li>
                                                        <li className="my-6 ml-3">
                                                            <Link href={'/'}>Người khuyết tật</Link>
                                                        </li>
                                                        <li className="my-6 ml-3">
                                                            <Link href={'/'}>LGBTQ+</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="my-6 ml-3 flex gap-1 items-center group1">
                                            <button className="flex items-center gap-1">
                                                <Link href={'/'}>Bền vững</Link>
                                                <RightArrow/>
                                            </button>
                                            <div className='absolute top-14 left-64 transittion group1-hover:translate-y-5 translate-y-0 opacity-0 invisible 
                                                group1-hover:opacity-100 group1-hover:visible duration-500 ease-in-out group1-hover:transform z-50 min-w-[250px] transform'>
                                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full text-secondary">
                                                    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-y-0 transition-transform
                                                        group1-hover:translate-y-[5rem] duration-500 ease-in-out rounded-sm'>
                                                    </div>
                                                    <ul className='relative z-10 text-secondary block my-2'>
                                                        <li className="my-6 ml-3">
                                                            <Link href={'/'}>Làm đẹp có trách nhiệm</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="my-6 ml-3">
                                            <Link href={'/'}>Đạo đức & Trách nhiệm doanh nghiệp</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="relative group flex justify-center items-center gap-1">
                            <button className='flex justify-center items-center gap-1 hover:opacity-50 cursor-default text-base'>
                                Câu chuyện của chúng tôi
                                <DownArrow/>
                            </button>
                            <div className='absolute top-0 transittion group-hover:translate-y-5 translate-y-0 opacity-0 invisible 
                                group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[250px] transform'>
                                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full text-secondary">
                                    <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform
                                        group-hover:translate-x-[5rem] duration-500 ease-in-out rounded-sm'>
                                    </div>
                                    <ul className='relative z-10 text-secondary block my-2'>
                                        <li className="my-6 ml-3">
                                            <Link href={'/'}>Chúng tôi là ai</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <Link href={'/'} className="block z-10">
                    <Image src={'/bg.png'} alt={'logo'} width={60} height={60}/>
                </Link>
            </div>
        </header>
    );
}