import React, { useState, useCallback } from "react";
import Select from "react-select";
import debounce from 'lodash/debounce';

export default function FilterSection({ handleSearchChange, handleCategoryChange }) {

    const [selectedCategory, setSelectedCategory] = useState();

    const debouncedUpdateValue = useCallback(debounce((newValue) => {
        handleSearchChange(newValue);
    }, 700), []);
    

    const categoryList = [
        { value: "Actinidiaceae", label: "Actinidiaceae" },
        { value: "Anacardiaceae", label: "Anacardiaceae" },
        { value: "Bromeliaceae", label: "Bromeliaceae" },
        { value: "Cactaceae", label: "Cactaceae" },
        { value: "Caricaceae", label: "Caricaceae" },
        { value: "Cucurbitaceae", label: "Cucurbitaceae" },
        { value: "Ebenaceae", label: "Ebenaceae" },
        { value: "Ericaceae", label: "Ericaceae" },
        { value: "Grossulariaceae", label: "Grossulariaceae" },
        { value: "Lauraceae", label: "Lauraceae" },
        { value: "Malvaceae", label: "Malvaceae" },
        { value: "Moraceae", label: "Moraceae" },
        { value: "Rosaceae", label: "Rosaceae" },
        { value: "Rutaceae", label: "Rutaceae" },
        { value: "Sapindaceae", label: "Sapindaceae" },
        { value: "Solanaceae", label: "Solanaceae" },
        { value: "Vitaceae", label: "Vitaceae" },
    ];

    const handleSelectCategory = (data, action) => {
        if (action.action == "clear") {
            handleCategoryChange('');
        } else {
            handleCategoryChange(data.value);
        }
        setSelectedCategory(data);
    }

    const updateSearchValue = (event) => {
        console.log(selectedCategory);
        debouncedUpdateValue(event.target.value);
    }

    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                <div class="mb-4">
                    <input onChange={updateSearchValue} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search" />
                </div>

                <div>
                    <Select
                        options={categoryList}
                        placeholder="Select Category"
                        isClearable={true}
                        value={selectedCategory}
                        onChange={handleSelectCategory}
                        isSearchable={true}
                    />
                </div>


                <div>
                    
                </div>
            </div>
        </div>
    );
}