import Image from "next/image";

export default function ProductSafetyPage() {
    return (
        <>
            <section className="hero items-center text-left">
                <div className="absolute z-20 left-28 top-40 items-left h-full mb-8 flex flex-col justify-left gap-2 font-semibold">
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
            <div className="mx-32 mt-16">
                <h1 className="text-secondary text-5xl font-semibold leading-none">
                    Quy trình 4 bước <br/> 
                    của chúng tôi
                </h1>
                <p className="max-w-[480px] font-thin leading-7 mt-5">
                    An toàn là tôn chỉ của tất cả những gì chúng tôi làm. Trước khi tiếp thị một sản phẩm mới, chúng tôi không chỉ tuân thủ mà còn làm tốt hơn cả quy định để đảm bảo an toàn cho mọi thành phần của quy trình thông qua quy trình bốn bước, dựa trên cơ sở khoa học. Chúng tôi sử dụng quy trình tương tự như các cơ quan quản lý trên toàn thế giới, bao gồm FDA Hoa Kỳ, EPA, EU, WHO và các cơ quan khác.
                </p>
            </div>
            <div className="mx-28 flex gap-28 items-start justify-start mt-16">
                <div>
                    <div style={{ backgroundImage: `url(/IMG_2809.JPG)` }} className="min-w-60 h-60 rounded-full bg-cover"/>
                    <h3 className="text-secondary font-bold text-xl mt-4">
                        1<span className="text-yellow-500 text-[30px]">.</span> Nghi ngờ
                    </h3>
                    <p className=" font-light mt-2">
                        Trước khi sử dụng bất kỳ thành phần nào, các nhà khoa học của chúng tôi bắt đầu bằng những câu hỏi. Nếu có bất kỳ nghi ngờ nào về sự an toàn hoặc lợi ích của các thành phần đối với con người, chúng tôi sẽ không sử dụng.
                    </p>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(/IMG_2802.JPG)` }} className="min-w-60 h-60 rounded-full bg-cover"/>
                    <h3 className="text-secondary font-bold text-xl mt-4">
                        2<span className="text-yellow-500 text-[30px]">.</span> Xác định
                    </h3>
                    <p className=" font-light mt-2">
                        Chúng tôi xác định phạm vi an toàn của các thành phần bằng cách sử dụng các tiêu chuẩn dựa trên khoa học tương tự như các cơ quan quản lý lớn trên thế giới.
                    </p>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(/bg.png)` }} className="min-w-60 h-60 rounded-full bg-cover"/>
                    <h3 className="text-secondary font-bold text-xl mt-4">
                        3<span className="text-yellow-500 text-[30px]">.</span> Quyết định
                    </h3>
                    <p className=" font-light mt-2">
                        Chúng tôi đánh giá tất cả các thành phần trong sản phẩm để đảm bảo an toàn khi sử dụng — cả cho bạn và môi trường. Nếu chúng tôi không thể khẳng định, chúng tôi sẽ bắt đầu lại với thiết kế ban đầu.
                    </p>
                </div>
                <div>
                    <div style={{ backgroundImage: `url(/IMG_2800.JPG)` }} className="min-w-60 h-60 rounded-full bg-cover"/>
                    <h3 className="text-secondary font-bold text-xl mt-4">
                        4<span className="text-yellow-500 text-[30px]">.</span> Chất vấn
                    </h3>
                    <p className=" font-light mt-2">
                        Bước cuối cùng của chúng tôi không bao giờ thật sự kết thúc. Khi một sản phẩm được lên kệ, chúng tôi sẽ cập nhật thông tin mới về từng thành phần, hợp tác về các phương pháp an toàn sản phẩm mới với các cơ quan quản lý và các nhà khoa học bên ngoài P & G để đảm bảo rằng luôn thực sự cập nhật những thông tin mới nhất về các thành phần đó.<br/>
                        <br/>
                        Quan trọng nhất là, chúng tôi lắng nghe bạn — đảm bảo các sản phẩm chúng tôi sẽ được thiết kế để đáp ứng mong đợi của bạn về an toàn và hiệu suất.
                    </p>
                </div>

            </div>
        </>
    );
}