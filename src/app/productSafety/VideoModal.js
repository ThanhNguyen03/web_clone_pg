"use client"
import XMarkIcon from '@/components/icons/xMark';
import ReactModal from 'react-modal';

export default function VideoModal({ isOpen, onClose }) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} contentLabel="YouTube Video" 
    className="flex w-full h-full bg-black opacity-85">
        <iframe src="https://www.youtube-nocookie.com/embed/zoKiUj0AFmc?autoplay=1" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen className='m-auto min-w-[70%] min-h-[75%]'/>
        <button onClick={onClose} className='right-0 mt-16 mr-48 absolute text-white'>
            <XMarkIcon>w-10 h-10</XMarkIcon>
        </button>
    </ReactModal>
  );
};