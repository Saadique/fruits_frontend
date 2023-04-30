import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/nav/Navbar';
import FruitCard from '../../components/fruit/FruitCard';
import FavouriteFruits from '../Favourites/FavouriteFruits';
import FilterSection from './components/FilterSection';
import ApiIndex from '../../api/index';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';

import { useSelector, useDispatch } from "react-redux";

function Home() {
    const [isHome, setIsHome] = useState(true);
    const [fruitsData, setFruitsData] = useState([]);
    const [spin, setSpin] = useState(false);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const scrollRef = useRef(null);
    const [favouriteFruits, setFavouriteFruits] = useState([]);

    const list = useSelector((state) => state.list);
    const dispatch = useDispatch();

    let page = 1;

    //callback
    const handleViewChange = (value) => {
        setIsHome(value);
    }

    //callback
    const handleSearchChange = (value) => {
        if (value != undefined) {
            setSearch(value);
        }
    }

    //callback
    const handleCategoryChange = (value) => {
        if (value != undefined) {
            setCategory(value);
        }
    }

    //callback
    const handleAddFavouriteFruits = (value) => {
        if (list.length >= 10) {
            return;
        }

        const isFruitExist = list.some((fruit) => fruit.id === value.id);
        if (!isFruitExist) {
            dispatch({ type: "ADD_ITEM", payload: value });
        }
    }

    //callback
    const handleRemoveFavouriteFruit = (value) => {
        //    setFavouriteFruits([]);
    }

    const addItem = (fruit) => {
        dispatch({ type: "ADD_ITEM", payload: fruit });
      };


    const fetchAllFruits = async () => {
        setSpin(true);
        console.log(search);
        const response = await ApiIndex.FruitsApi.fetchAllFruits({ name: search, page: page, family: category }).finally(() => { setSpin(false) });
        const fruits = response.data.data;
        setFruitsData(fruits);
        setTotalPages(Math.ceil(response.data.total / response.data.limit));
    }

    useEffect(() => {
        fetchAllFruits({ name: search, page: page, family: category });
    }, [search, category]);


    const handlePageChange = (event, value) => {
        setCurrentPage(() => value);
        page = value;
        fetchAllFruits();
        executeScroll();
    };

    const executeScroll = () => scrollRef.current.scrollIntoView();


    return (
        <div>
            <Navbar handleViewChange={handleViewChange} />

            {isHome &&
                <div>
                    <div className='mt-7 mx-2'>

                        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Fruit is nature's</span> Candy!</h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Feast with fruits!</p>

                    </div>
                    <div className='mt-7 mx-7'>
                        <FilterSection handleSearchChange={handleSearchChange} handleCategoryChange={handleCategoryChange} />
                    </div>
                    <div className='mt-14 mx-7' ref={scrollRef}>
                        {spin &&
                            <CircularProgress />}

                        <div class="grid grid-cols-4 gap-y-8 gap-x-6">
                            {!spin && fruitsData.map((item) => (
                                <div>
                                    <FruitCard fruit={item} handleAddFavouriteFruits={handleAddFavouriteFruits}/>
                                </div>
                            ))}
                        </div>

                        <Pagination class='flex flex-row justify-center items-center my-11' count={totalPages} page={currentPage} variant="outlined" shape="rounded" onChange={handlePageChange} />
                    </div>
                </div>
            }



            {!isHome &&
                <FavouriteFruits />
            }
        </div>
    )
}

export default Home;