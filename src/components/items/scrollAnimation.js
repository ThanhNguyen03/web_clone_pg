"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ScrollNav() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
      const handleScroll = () => {
        const section1 = document.getElementById('section1');
        if (section1) {
          const rect = section1.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveSection('section1');
          } else {
            setActiveSection("");
          }
        }
      };
  
      // Thêm sự kiện lắng nghe scroll
      document.addEventListener('scroll', handleScroll);
  
      // Xóa sự kiện lắng nghe khi component unmount
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <ul className="block fixed right-0 z-10 top-1/2 translate-x-full -translate-y-1/2 duration-500 scroll-nav">
      <li>
        <Link href="#section1" target="_self" className={`scroll-nav rounded-full m-2 px-[0.8rem] py-3 border flex items-center text-secondary bg-white relative my-1 ${activeSection === 'section1' ? 'active' : ''}`}>
          <span className="mr-auto ml-4 font-semibold" >Giới thiệu</span>
        </Link>
      </li>
      <li>
        <Link href="#section2" target="_self" className={`rounded-full m-2 px-[0.8rem] py-3 border flex items-center text-secondary bg-white relative my-1 ${activeSection === 'hp-item-1' ? 'active' : ''}`}>
          <span className="mr-auto ml-4 font-semibold">Cam kết &amp; Nỗ lực</span>
        </Link>
      </li>
      <li>
        <Link href="#section3" target="_self" className={`rounded-full m-2 px-[0.8rem] py-3 border flex items-center text-secondary bg-white relative my-1 ${activeSection === 'hp-item-2' ? 'active' : ''}`}>
          <span className="mr-auto ml-4 font-semibold">Nỗ lực phát triển bền vững</span>
        </Link>
      </li>
      <li>
        <Link href="#section4" target="_self" className={`rounded-full m-2 px-[0.8rem] py-3 border flex items-center text-secondary bg-white relative my-1 ${activeSection === 'hp-item-3' ? 'active' : ''}`}>
          <span className="mr-auto ml-4 font-semibold">Các trang web của P&amp;G</span>
        </Link>
      </li>
    </ul>
  );
};