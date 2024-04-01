"use client"

import BrandCategory from "@/components/items/brandCategory";
import BrandItem from "@/components/items/brandItem";
import { useSearchParams } from "next/navigation";
import { convertStringtoQueriesObject } from "./filterSection";
 
const products = [
    {
        id: 1,
        title: ["Chăm sóc Trẻ em"],
        children: [
            {   
                id: 1,
                title: "Pampers",
                detail: "Tã em bé",
                image: "/IMG_2802.JPG"
            }
        ]
    },
    {
        id: 2,
        title: ["Chăm sóc vải"],
        children: [
            {   
                id: 1,
                title: "Ariel",
                detail: "Sản phẩm giặt là",
                image: "/IMG_2809.JPG"
            },
            {   
                id: 2,
                title: "Downy",
                detail: "Chất bảo vệ & làm mềm vải",
                image: "/IMG_2804.JPG"
            },
            {   
                id: 3,
                title: "Tide",
                detail: "Sản phẩm giặt là",
                image: "/IMG_2800.JPG"
            }
        ]
    },
    {
        id: 3,
        title: ["Chăm sóc Phụ nữ"],
        children: [
            {   
                id: 1,
                title: "Whisper",
                detail: "Băng vệ sinh chăm sóc phụ nữ",
                image: "/IMG_2801.JPG"
            }
        ]
    },
    {
        id: 4,
        title: ["Grooming"],
        children: [
            {   
                id: 1,
                title: "Gillette",
                detail: "Dao cạo & Chăm sóc da",
                image: "/IMG_2809.JPG"
            }
        ]
    },
    {
        id: 5,
        title: ["Chăm sóc Tóc"],
        children: [
            {   
                id: 1,
                title: "Head & Shoulders",
                detail: "Chăm sóc Tóc",
                image: "/IMG_2801.JPG"
            },
            {   
                id: 2,
                title: "Pantene",
                detail: "Chăm sóc Tóc",
                image: "/IMG_2809.JPG"
            },
            {   
                id: 3,
                title: "Rejoice",
                detail: "Chăm sóc Tóc",
                image: "/IMG_2804.JPG"
            }
        ]
    },
    {
        id: 6,
        title: ["Chăm sóc Nhà cửa"],
        children: [
            {   
                id: 1,
                title: "Ambi Pur",
                detail: "Máy khử mùi",
                image: "/IMG_2802.JPG"
            }
        ]
    },
    {
        id: 7,
        title: ["Chăm sóc răng miệng"],
        children: [
            {   
                id: 1,
                title: "Oral-B",
                detail: "Bàn chải đánh răng & chỉ nha khoa",
                image: "/IMG_2809.JPG"
            }
        ]
    },
    {
        id: 8,
        title: ["Chăm sóc da và cá nhân"],
        children: [
            {   
                id: 1,
                title: "Gillette",
                detail: "Dao cạo & Chăm sóc da",
                image: "/IMG_2802.JPG"
            },
            {   
                id: 2,
                title: "Olay",
                detail: "Chăm sóc da và da mặt",
                image: "/IMG_2800.JPG"
            },
            {   
                id: 3,
                title: "Safeguard",
                detail: "Xà phòng kháng khuẩn",
                image: "/IMG_2809.JPG"
            }
        ]
    }
];

function isAvailable(arr1, arr2) {
    if (!arr1 || !arr2) {
        return true;
    }
    return arr1.some((item) => arr2?.includes(item));
}

export default function ProductSection() {
    const searchParams = useSearchParams();
    const paramsObj = convertStringtoQueriesObject(searchParams);

    let filteredProducts = products.filter((product) => {
        const hasTag = isAvailable(product.title, paramsObj?.tag)
        return hasTag;
    });

    if (Object.keys(paramsObj).length === 0) {
        filteredProducts = products;
    }

    if (filteredProducts.length === 0) {
        return <p className="text-center text-2xl text-slate-700">Không có kết quả tìm kiếm</p>
    }

    return (
        <>
            {filteredProducts.map((product) => {
                return(
                    <BrandCategory key={product.id} title={product.title} id={product.title}>
                        {product.children.map((child) => {
                            return (
                                <BrandItem title={child.title} src={child.image} details={child.detail} key={child.id}/>
                            );
                        })}
                    </BrandCategory>
                );
            })}
        </>
    );
}