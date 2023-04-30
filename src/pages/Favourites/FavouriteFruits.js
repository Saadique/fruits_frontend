import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

function FavouriteFruits(props) {

    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();
  

    // const { favouriteFruits, handleRemoveFavouriteFruit } = props;

    let totalFat = list.reduce((total, fruit) => {
        return total + fruit.fat;
    }, 0);
    totalFat = totalFat.toFixed(2);

    let totalSugar = list.reduce((total, fruit) => {
        return total + fruit.sugar;
    }, 0);
    totalSugar = totalSugar.toFixed(2);

    let totalCarbs = list.reduce((total, fruit) => {
        return total + fruit.carbohydrates;
    }, 0);
    totalCarbs = totalCarbs.toFixed(2);

    let totalCalories = list.reduce((total, fruit) => {
        return total + fruit.calories;
    }, 0);
    totalCalories = totalCalories.toFixed(2);

    let totalProtein = list.reduce((total, fruit) => {
        return total + fruit.calories;
    }, 0);
    totalProtein = totalProtein.toFixed(2);

    const handleRemoveFruit = (fruit) => {
        dispatch({ type: "REMOVE_ITEM", payload: fruit });
    }


    return (
        <>
            <div>
                <div className='mt-7 mx-2'>
                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Your Favourite Fruits
                        </span></h1>
                </div>

                {list.length!=0 && <div>

                        <div className='mt-20 mx-2 grid place-items-center'>
                            <div class="bg-sky-50 shadow-md rounded px-8 pt-6 pb-8 mb-4  w-full sm:w-8/12">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    
                                    <p>Total Fat : {totalFat}</p>
                                    <p>Total Carbs : {totalCarbs}</p>
                                    <p>Total Calories : {totalCalories}</p>
                                    <p>Total Sugar : {totalSugar}</p>
                                    <p>Total Protein : {totalProtein}</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-20 mx-2 grid place-items-center'>

                            <div class="bg-sky-50 shadow-md rounded px-8 pt-6 pb-8 mb-4  w-full sm:w-8/12">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        { list.map((fruit) =>   (
                                            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                <div class="flex justify-end px-4 pt-4">
                                            
                                                </div>
                                                <div class="flex flex-col items-center pb-10">
                                                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name : {fruit.name}</h5>
                                                    <p class="mb-1 text-gray-900 dark:text-white">Family : {fruit.family}</p>
                                                    <div class="flex mt-4 space-x-3 md:mt-6">
                                                        {/* <button className="bg-sky-300 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded" onClick={handleRemoveFruit(fruit)}>Remove</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                </div>
                            </div>

                        </div>

                </div>}
            </div>
        </>
    )
}

export default FavouriteFruits;

