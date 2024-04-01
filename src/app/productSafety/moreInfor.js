import RightArrow from "@/components/icons/RightArrow-2";
import Image from "next/image";
import Link from "next/link";

export default function MoreInformation() {
    return (
        <>
            <div className="px-32 mt-5">
                <h2 className="text-secondary text-5xl font-extrabold">Bạn muốn tìm hiểu thêm?</h2>
                <div className="flex justify-center items-center gap-10 mt-16">
                    <Link href={'/ourBrand'} className="flex flex-col justify-start px-10 min-h-[372px] min-w-[372px] z-10 content2">
                        <div className="flex flex-col justify-center items-center overflow-hidden relative rounded-full h-[372px] w-[372px]">
                            <Image src={'/IMG_2809.JPG'} alt="link2" layout="responsive" width={100} height={10} className="img-content"/>
                            <h3 className="flex flex-col absolute text-xl text-white font-semibold justify-center items-center text-center mx-5">
                                Xem các nhãn hiệu của chúng tôi
                                <RightArrow/>
                            </h3>
                        </div>
                    </Link>
                    <Link href={'/'} className="flex flex-col justify-start px-10 min-h-[372px] min-w-[372px] z-10 content2">
                        <div className="flex flex-col justify-center items-center overflow-hidden relative rounded-full h-[372px] w-[372px]">
                            <Image src={'/IMG_2800.JPG'} alt="link2" layout="responsive" width={100} height={10} className="img-content"/>
                            <h3 className="flex flex-col absolute text-xl text-white font-semibold justify-center items-center text-center mx-5">
                                Xem những nỗ lực môi trường của chúng tôi
                                <RightArrow/>
                            </h3>
                        </div>
                    </Link>
                    <Link href={'/'} className="flex flex-col justify-start px-10 min-h-[372px] min-w-[372px] z-10 content2">
                        <div className="flex flex-col justify-center items-center overflow-hidden relative rounded-full h-[372px] w-[372px]">
                            <Image src={'/IMG_2802.JPG'} alt="link2" layout="responsive" width={100} height={10} className="img-content"/>
                            <h3 className="flex flex-col absolute text-xl text-white font-semibold justify-center items-center text-center mx-5">
                                Đổi mới 
                                <RightArrow/>
                            </h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}