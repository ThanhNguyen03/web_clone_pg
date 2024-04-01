import Link from "next/link";
import BrandItem from "./brandItem";
import FilterSection from "../../app/ourBrand/filterSection";

export default function BrandCategory({id, title, children}) {
    return (
        <div className="mb-24" id={id}>
            <h2 className="text-secondary text-5xl font-extrabold mb-3">{title}</h2>
            <div className="grid grid-cols-3 gap-12 mt-10 mb-2">
                {children}
            </div>
        </div>
    );
}