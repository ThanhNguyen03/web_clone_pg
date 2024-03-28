import BrandSlider from "../items/slider";

export default function BrandGallery() {
    return (
        <section className="flex flex-col justify-center items-center my-32">
            <div className="flex flex-col justify-center items-center">
                <p className="uppercase text-lg font-bold text-secondary">
                    Các nhãn hàng của chúng tôi
                </p>
                <h2 className="mt-5 uppercase text-5xl font-extrabold text-secondary">
                    Các sản phẩm giúp cuộc sống dễ dàng hơn
                    <span className="text-yellow-500">.</span>
                </h2>
            </div>
            <div className="justify-center items-center flex min-h-[367px]">
                <BrandSlider/>
            </div>
            <button className="border border-secondary rounded-full mb-10 px-4 py-2 text-secondary font-semibold hover:text-white hover:bg-secondary">
                Xem các thương hiệu mang tính biểu tượng của chúng tôi
            </button>
        </section>
    );
}