import Image from "next/image";
import OurProcedure from "./ourProcedure";
import VideoContent from "./videoContent";
import ProductIngredient from "./productIngredient";
import MoreInformation from "./moreInfor";

export default function ProductSafetyPage() {
    return (
        <>
            <section className="hero items-center text-left">
                <div className="absolute z-20 left-28 top-32 items-left h-full mb-8 flex flex-col justify-left gap-2 font-semibold">
                    <div className="w-16 h-16">
                        <Image src={'/bg.png'} alt={'hero-icon'} layout={'responsive'} width={100} height={10}/>
                    </div>
                    <h1 className="text-[80px] text-white font-extrabold leading-none">
                        An toàn<br/> sản phẩm<span className="text-cyan-400 text-[80px]">.</span>
                    </h1>
                    <p className="text-white text-3xl font-semibold">Chúng tôi luôn tự đặt cho mình tiêu chuẩn cao nhất</p>
                    <p className="max-w-[480px] text-white text-lg">
                        Trong hơn 185 năm, sự an toàn của bạn và sự an toàn của thế giới quanh bạn là tôn chỉ của những gì chúng tôi làm. Đó là lý do tại sao chúng tôi cần một đội ngũ hơn 500 nhà khoa học và chuyên gia với một quy trình an toàn và nghiêm ngặt để phân tích mọi thành phần trước khi xem xét đưa vào một trong những sản phẩm của chúng tôi.
                    </p>
                </div>
                <div className="overflow-hidden absolute z-10 left-0 right-0 min-h-full h-md ">
                    <div className="relative ">
                        <Image src={'/IMG_2809.JPG'} alt={'pic1'} layout={'responsive'} width={100} height={10}/>
                    </div>
                </div>
            </section>
            <OurProcedure/>
            <section className="bg-wrappercolor">
                <VideoContent/>
                <ProductIngredient/>
                <MoreInformation/>
            </section>
        </>
    );
}