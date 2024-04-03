import Link from "next/link";
import GlobalIcon from "../icons/global";
import UpRightArrow from "../icons/upRightArrow";

export default function Footer() {
    return (
        <footer className="bg-secondary z-0 w-full h-fill">
            <div className="flex justify-center flex-col text-center mt-32 pt-14 gap-8 mx-auto items-center max-w-[1280px]">    
                <Link href={'/'} className="rounded-full font-semibold text-white border border-white mx-auto px-6 py-2 hover:bg-white hover:text-secondary duration-500">
                    Quay trở về đầu tiên
                </Link>
                <div className="flex w-full custom-max:flex-col custom-max:ml-12">
                    <div className="text-white text-start flex custom-min:flex-col text-sm mr-auto custom-max:gap-24 custom-max:mb-8">
                        <Link href={'/'} className="mb-2 flex items-center gap-2 w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p className="hover:underline hover:underline-offset-2 text-lg">Liên hệ với chúng tôi</p>
                        </Link>
                        <Link href={'/'} className="mb-2 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                            <p className="hover:underline hover:underline-offset-2 text-lg">Cơ hội việc làm</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                    </div>
                    <div className="text-white text-start flex flex-col w-[20%] custom-max:w-full custom-max:mb-6">
                        <h2 className="uppercase font-semibold text-xl">
                            Đối tác và nhà đầu tư
                        </h2>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Nhà đầu tư</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Làm đối tác với chúng tôi</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Nhà cung cấp</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                    </div>
                    <div className="text-white text-start flex flex-col w-[20%] custom-max:w-full custom-max:mb-6">
                        <h2 className="uppercase font-semibold text-xl">
                            Công ty chúng tôi
                        </h2>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Lãnh đạo</p>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Cấu trúc & Quản trị</p>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Chính sách & Thực hành</p>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Lưu trữ</p>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Giải thưởng & công nhận</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Tin tức</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                    </div>
                    <div className="text-white text-start flex flex-col w-[10%] custom-max:w-full custom-max:mb-6">
                        <h2 className="uppercase font-semibold text-xl">Hữu ích</h2>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Sơ đồ trang web</p>
                        </Link>
                    </div>
                    <div className="text-white text-start flex flex-col w-[15%] custom-max:w-full custom-max:mb-6">
                        <h2 className="uppercase font-semibold text-xl">
                            Pháp luật
                        </h2>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Thông tin bảo mật</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">Điều khoản và điều lệ</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                        <Link href={'/'} className="mt-2 flex items-center gap-2">
                            <p className="hover:underline hover:underline-offset-2">AdChoices</p>
                            <UpRightArrow>children=w-4 h-4</UpRightArrow>
                        </Link>
                    </div>
                    <div className="text-white text-start flex flex-col w-[15%] custom-max:w-full custom-max:mb-6 custom-min:hidden">
                        <h2 className="uppercase font-semibold text-xl mb-4">CHỌN ĐỊA ĐIỂM CỦA BẠN</h2>
                        <div className="w-full flex">
                            <Link href={'/'} 
                            className="text-center px-5 py-1 text-secondary my-auto border border-white rounded-full flex justify-center font-semibold bg-white hover:bg-secondary hover:text-white">
                                Việt Nam
                                <GlobalIcon/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mb-5 items-center custom-min:justify-between">
                    <div className="w-full flex custom-max:hidden">
                        <Link href={'/'} 
                        className="text-center px-5 py-1 text-secondary my-auto border border-white rounded-full flex justify-center font-semibold bg-white hover:bg-secondary hover:text-white">
                            Việt Nam
                            <GlobalIcon/>
                        </Link>
                    </div>
                    <div className="text-center text-white items-center text-sm mt-2 w-full custom-max:absolute">
                        &copy; 2024 Procer & Gamble
                    </div>
                    <div className="flex items-center gap-5 w-full custom-max:justify-center custom-max:mb-20">
                        <Link className="custom-min:ml-auto" href='https://www.facebook.com'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                                <path fill="#fff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                            </svg>
                        </Link>
                        <Link href="https://www.twitter.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                                <path fill="#fff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/>
                            </svg>
                        </Link>
                        <Link href="https://www.youtube.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6">
                                <path fill="#fff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                                <path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6">
                                <path fill="#fff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}