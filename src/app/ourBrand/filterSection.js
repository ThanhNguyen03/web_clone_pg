"use client";
import SearchIcon from "@/components/icons/search";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const tag = ["Chăm sóc Trẻ em","Chăm sóc vải","Chăm sóc Phụ nữ","Grooming","Chăm sóc Tóc","Chăm sóc Nhà cửa","Chăm sóc răng miệng","Chăm sóc da và cá nhân"];
const filterOptions = [
    {
        id: "tag",
        title: "filter tag",
        options: tag,
        type: "checkbox"
    },
];

// Hàm này kiểm tra xem có query nào hợp lệ không
function checkValidQuery(queries) {
    return queries.filter((query)=>query !== "").length > 0;
}

// Hàm này chuyển đổi chuỗi thành đối tượng các query
export function convertStringtoQueriesObject(searchParams) {
    let selectedQueries = {};
    searchParams.forEach((values, key) => {
        const queries = values.split(",");
        if (selectedQueries[key]) {
            selectedQueries[key].push(...queries);
        } else {
            selectedQueries[key] = queries;
        }
    });
    return selectedQueries;
}

// Hàm này chuyển đổi các query hợp lệ thành chuỗi
function convertValidStringQueries(queries) {
    let queryString = "";
    for (let [key, value] of Object.entries(queries)) {
        queryString += `${queryString === "" ? "" : "&"}${key}=${value}`;
    }
    return queryString;
}

function CheckboxAndRadioGroup({ children }) {
    return (
        <div className="mt-5">
            <ul>{children}</ul>
        </div>
    );
}

function CheckboxAndRadioItem({ id, label, ...props }) {
    return (
        <li className="mb-2 flex gap-2">
            <input className="w-6 h-6 ml-1" {...props} id={id}/>
            <label htmlFor={id} className="flex">
                {label}
            </label>
        </li>
    );
}

export default function FilterSection() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedFilterQueries, setSelectedFilterQueries] = useState({});

    useEffect(() => {
        const paramObj = convertStringtoQueriesObject(searchParams);
        setSelectedFilterQueries(paramObj);
    }, [searchParams]);

    function handleSelectFilterOptions(e) {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;

        let updatedQueries = { ...selectedFilterQueries };

        if (updatedQueries[name]) {
            if (type === 'radio') {
                updatedQueries[name] = [value];
            } else if (updatedQueries[name].includes(value)) {
                updatedQueries[name] = updatedQueries[name].filter((query) => 
                    query !== value
                );
                if (!checkValidQuery(updatedQueries[name])) {
                    delete updatedQueries[name];
                }
            } else {
                updatedQueries[name].push(value);
            }
        } else if (updatedQueries) {
            updatedQueries[name] = [value];
        }

        router.push(`ourBrand/?${convertValidStringQueries(updatedQueries)}`, {
            scroll: false,
        });
    }

    function isChecked(id, option) {
        return (
            Boolean(selectedFilterQueries[id]) && selectedFilterQueries[id].includes(option)
        );
    }

    return (
        <form className="flex justify-center">
            <fieldset className="mb-5 mx-auto max-w-[450px]">
                <legend className="font-bold text-xl mb-5 text-secondary uppercase">Bộ lọc</legend>
                <div className={`w-11/12 my-auto flex py-2 px-4 border border-secondary hover:border-2 hover:font-semibold z-20 rounded-full`}>
                    <input type="text" className="w-full text-secondary placeholder-black outline-none placeholder-transparent"/>
                    <SearchIcon/>
                </div>
                {filterOptions.map(({id, title, type, options}) => {
                    return (
                        options.map((value) => {
                            return (
                                <CheckboxAndRadioGroup key={value}>
                                    <CheckboxAndRadioItem type={type} name={id} id={value} label={value}
                                    value={value} checked={isChecked(id,value)} onChange={handleSelectFilterOptions}>
                                    </CheckboxAndRadioItem>
                                </CheckboxAndRadioGroup>
                            );
                        })
                    );
                })}
            </fieldset>
        </form>
    );
}