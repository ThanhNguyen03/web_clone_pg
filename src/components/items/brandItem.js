import Link from "next/link";

export default function BrandItem({title, src, details}) {
    return (
        <div className="flex flex-col gap-10 items-center sm:gap-2">
            <div className="rounded-full w-60 h60 flex justify-center items-center">
                <div className="flex flex-col bg-transparent justify-center items-center w-60 h-60 absolute items group2 rounded-full z-10">
                    <h3 className="uppercase text-white font-bold mb-3 text-lg invisible z-10">
                        {title}
                    </h3>
                    <Link href={'/'} className="rounded-full text-secondary bg-white px-6 py-2 invisible z-10">
                        Đến trang
                    </Link>
                </div>
                <div style={{ backgroundImage: `url(${src})` }} className="rounded-full w-48 h-48 border bg-cover m-auto shadow-lg"/>
            </div>
            <p className="text-secondary text-lg">{details}</p>
        </div>
        
    );
}