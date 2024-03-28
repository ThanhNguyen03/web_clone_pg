import Link from "next/link";
import BrandItem from "./brandItem";

export default function BrandCategory({title, children}) {
    return (
        <div className="mb-24">
            <a  id="Chăm sóc Trẻ em"></a>
            <h2 className="text-secondary text-5xl font-extrabold mb-3">{title}</h2>
            <div className="grid grid-cols-3 gap-12 mt-10 mb-2">
                {children}
            </div>
        </div>
    );
}