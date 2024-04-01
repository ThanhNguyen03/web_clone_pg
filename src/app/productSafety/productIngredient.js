import Image from "next/image";
import Link from "next/link";

export default function ProductIngredient() {
    return (
        <>
            <div className="p-32 my-5 content1-content gap-32">
                <div className="flex flex-col justify-center">
                    <h2 className="text-secondary font-extrabold text-5xl">Thành phần</h2>
                    <p className="text-gray-600 mt-5 text-lg font-sans">An toàn sản phẩm tiêu dùng bắt đầu với các nguyên liệu. Chúng tôi hiểu rằng bạn có thể có câu hỏi và mối quan tâm về những nguyên liệu cụ thể. Tại đây, bạn sẽ tìm thấy nhiều chi tiết hơn về các câu hỏi phổ biến mà chúng tôi nhận được liên quan đến các thành phần sản phẩm mà chúng tôi chọn và chúng tôi chủ động không sử dụng.</p>
                    <Link href={'/'} className="mt-5 mr-auto rounded-full font-semibold text-secondary border border-secondary px-6 py-2 hover:bg-secondary hover:text-white duration-500">
                        Xem nguyên liệu của chúng tôi
                    </Link>
                </div>
                <div style={{ backgroundImage: `url(/IMG_2802.JPG)` }} className="flex justify-center h-[488px] w-[488px] items-center rounded-full bg-cover"/>
            </div>
        </>
    );
}