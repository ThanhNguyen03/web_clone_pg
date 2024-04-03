"use client"
import VideoModal from "./VideoModal";
import { useState } from "react";
import PlayIcon from "@/components/icons/play";

export default function VideoContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
    };

    return (
        <>
            <div className="pt-20 ">
                <p className="text-gray-600 mx-32">Xem để tìm hiểu thêm về cách các nhà khoa học của chúng tôi tạo ra các sản phẩm an toàn cho bạn.</p>
                <div className="mt-8 mx-32 flex justify-center items-center">
                    <div onClick={handleOpenModal} className="cursor-pointer w-full h-md content2 rounded-3xl shadow-2xl overflow-hidden">
                        <div style={{ backgroundImage: `url(/IMG_2800.JPG)` }} 
                        className="rounded-3xl w-full h-full border bg-cover m-auto img-content"/>
                    </div>
                    <div className="absolute text-white rounded-full bg-secondary p-2 z-10">
                        <PlayIcon>w-14 h-14</PlayIcon>
                    </div>
                    <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
            </div>
        </>
    );
}