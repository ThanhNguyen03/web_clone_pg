"use client"
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../icons/downArrow";
import GlobalIcon from "../icons/global";
import SearchIcon from "../icons/search";
import XMarkIcon from "../icons/xMark";
import { useState, useEffect } from "react";
import RightArrow from "../icons/rightArrow";

export default function Header() {
    const [searching, setSearching] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpenState, setIsOpenState] = useState({});
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    useEffect(() => {
        if (openMenu) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
    }, [openMenu]);

    const toggleUL = (key) => {
        setIsOpenState(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <header className="bg-primary border-b shadow-md absolute z-10 w-full">
            <Link href={'/'} className="custom-max:hidden ml-2 left-0 xl:p-2 xl:mt-2 mt-5 xl:mx-6 absolute flex justify-center gap-1 text-secondary xl:rounded-full xl:border xl:border-secondary hover:border-2 hover:font-semibold z-10">
                <p className="xl:visible xl:relative invisible absolute">Việt Nam</p>
                <GlobalIcon/>
            </Link>
            {!searching && (
                <button type="button" title="search" onClick={()=>{setSearching(true)}} 
                    className={"custom-min:right-0 xl:py-2 xl:px-12 xl:mt-2 mt-5 mx-6 absolute justify-center text-secondary xl:rounded-full xl:border xl:border-secondary hover:border-2 hover:font-semibold z-20"+`${openMenu ? ' hidden' : ''}`}>
                    <SearchIcon/>
                </button>
            )}
            {searching && (
                <form className={"custom-max:w-full custom-min:bg-white bg-primary flex custom-min:right-0 py-2 px-4 custom-min:gap-24 xl:mt-2 mt-3 mx-6 custom-max:ml-2 absolute justify-center rounded-full custom-min:border border-secondary custom-min:hover:border-2 hover:font-semibold z-20"+`${searching ? ' expand' : ''}`}>
                    <div className={"text-secondary mr-5 custom-min:hidden"+`${openMenu ? ' hidden' : ''}`}>
                        <SearchIcon/>
                    </div>
                    <label className="w-full">
                        <input type="text" autoFocus={'true'} value={inputValue} onChange={handleChange} onBlur={()=>setSearching(false)}  placeholder="What do you want to find?" className="w-full text-secondary placeholder-black outline-none custom-min:placeholder-transparent font-sans"></input>
                    </label>
                    <XMarkIcon onClick={()=>setSearching(false)}/>
                </form>
            )}
            <button onClick={()=>setOpenMenu(true)} className={"custom-min:hidden mr-2 right-0 mt-4 absolute text-secondary z-10"+`${openMenu ? ' hidden' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div className={"overflow-y-scroll max-w-[900px] w-full bg-white opacity-95 h-[100vh] absolute custom-min:hidden duration-500 flex-col "+ `${!openMenu ? ' -translate-y-full' : ''}`}>
                <div className="flex justify-between my-2 border-b mx-4 pb-4">
                    <button onClick={()=>setOpenMenu(false)} className="border border-secondary rounded-full p-2">
                        <XMarkIcon/>
                    </button>
                    <Link href={'/'} className="p-2 flex justify-center gap-1 text-secondary rounded-full border border-secondary hover:border-2 hover:font-semibold">
                        Việt Nam
                        <GlobalIcon/>
                    </Link>
                </div>
                <div className="flex-col mt-10 ml-7 items-center text-secondary font-semibold mb-8 border-b">
                    <button onClick={() => toggleUL('brands')} className="flex items-center gap-2 mb-4">
                        <div style={{ backgroundImage: `url(/IMG_2800.JPG)` }} className="w-12 h-12 rounded-full bg-cover"/>
                        <h2>Các nhãn hiệu của chúng tôi</h2>
                        <div className={"duration-500" + `${isOpenState['brands'] ? ' rotate-180' : ''}`}><DownArrow/></div>
                    </button>
                    <ul className={`flex-col gap-7 ${isOpenState['brands'] ? '' : 'hidden'}`}>
                        <li className="my-2 ml-20 font-thin">
                            <Link href={'/ourBrand'}>Các nhãn hiệu</Link>
                        </li>
                        <li className="my-2 ml-20 font-thin">
                            <Link href={'/'}>Đổi mới</Link>
                        </li>
                        <li className="my-2 ml-20 font-thin">
                            <Link href={'/productSafety'}>An toàn sản phẩm</Link>
                        </li>
                        <li className="my-2 ml-20 font-thin">
                            <Link href={'/'}>Thành phần</Link>
                        </li>
                        <li className="my-2 ml-20 font-thin">
                            <Link href={'/'}>#BECRUELTYFREE</Link>
                        </li>
                    </ul>
                    <button onClick={() => toggleUL('influence')} className="flex items-center gap-2 mb-4">
                        <div style={{ backgroundImage: `url(/IMG_2802.JPG)` }} className="w-12 h-12 rounded-full bg-cover"/>
                        <h2>Ảnh hưởng của chúng tôi</h2>
                        <div className={"duration-500" + `${isOpenState['influence'] ? ' rotate-180' : ''}`}><DownArrow/></div>
                    </button>
                    <ul className={`flex-col gap-7 ${isOpenState['influence'] ? '' : 'hidden'}`}>
                        <li className="my-2 ml-20 font-thin">
                            <Link href={'/'}>Ảnh hưởng cộng đồng</Link>
                        </li>
                        <li>
                            <button onClick={() => toggleUL('fair')} className="flex items-center gap-2">
                                <h2 className="ml-20 font-thin">Bình đẳng và hòa nhập</h2>
                                <div className={"duration-500" + `${isOpenState['fair'] ? ' rotate-180' : ''}`}><DownArrow/></div>
                            </button>
                            <ul className={`flex-col gap-7 ${isOpenState['fair'] ? '' : 'hidden'}`}>
                                <li className="my-2 ml-28 font-thin ">
                                    <Link href={'/'}>Bình đẳng giới</Link>
                                </li>
                                <li className="my-2 ml-28 font-thin">
                                    <Link href={'/'}>NgườI khuyết tật</Link>
                                </li>
                                <li className="my-2 ml-28 font-thin">
                                    <Link href={'/'}>LGBTQ+</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button onClick={() => toggleUL('lasting')} className="flex items-center gap-2">
                                <h2 className="ml-20 font-thin">Bền vững</h2>
                                <div className={"duration-500" + `${isOpenState['lasting'] ? ' rotate-180' : ''}`}><DownArrow/></div>
                            </button>
                            <ul className={`flex-col gap-7 ${isOpenState['lasting'] ? '' : 'hidden'}`}>
                                <li className="my-2 ml-28 font-thin ">
                                    <Link href={'/productSafety'}>Làm đẹp có trách nhiệm</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="my-2 ml-20 font-thin">
                            <Link href={'/'}>Đạo đức & Trách nhiệm doanh nghiệp</Link>
                        </li>
                    </ul>
                    <button onClick={() => toggleUL('story')} className={"flex items-center gap-2" + `${isOpenState['story'] ? '' : ' mb-8'}`}>
                        <div style={{ backgroundImage: `url(/IMG_2804.JPG)` }} className="w-12 h-12 rounded-full bg-cover"/>
                        <h2>Câu chuyện của chúng tôi</h2>
                        <div className={"duration-500" + `${isOpenState['story'] ? ' rotate-180' : ''}`}><DownArrow/></div>
                    </button>
                    <ul className={`flex-col gap-7 mb-5 ${isOpenState['story'] ? '' : 'hidden'}`}>
                        <li className="my-2 ml-28 font-thin">
                            <Link href={'/'}>Chúng tôi là ai</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex mb-5 items-center">
                    <div className="text-center text-secondary items-center text-sm mt-2 w-full absolute">
                        &copy; 2024 Procer & Gamble
                    </div>
                    <div className="flex items-center gap-5 w-full justify-center mb-20">
                        <Link className="custom-min:ml-auto" href='https://www.facebook.com'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                                <path fill="#003da5" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                            </svg>
                        </Link>
                        <Link href="https://www.twitter.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                                <path fill="#003da5" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/>
                            </svg>
                        </Link>
                        <Link href="https://www.youtube.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6">
                                <path fill="#003da5" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                                <path fill="#003da5" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                                <path fill="#003da5" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <nav className="h-full flex justify-center absolute z-0 custom-max:hidden">
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