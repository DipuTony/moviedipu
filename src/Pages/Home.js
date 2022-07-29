import React, { useState } from 'react'
import SearchBox from '../Components/SearchBox'
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import SweetPagination from "sweetpagination";
import Footer from '../Components/Footer';


function Home() {

    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
    const movieData = [

        {
            "id": 1,
            "movieName": "Game of Thrones",
            "rating": "4.5/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg"
        },
        {
            "id": 2,
            "movieName": "Moon Knight",
            "rating": "4.2/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg"
        },
        {
            "id": 3,
            "movieName": "RRR",
            "rating": "5.0/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
        },
        {
            "id": 4,
            "movieName": "Phone",
            "rating": "3.2/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/3/30/Phone-south-korean-movie-poster-md.jpg"
        },
        {
            "id": 5,
            "movieName": "Top Gun",
            "rating": "4.9/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg"
        }

    ]
    // console.log(movieData[0].movieName)

    return (
        <>
            <SearchBox />
            <h1 className='ml-7 font-bold'>Trending</h1>
            <div className='grid grid-cols-12 m-5 '>
                {
                    movieData.map((e) => (
                        <div key={e.id}></div>,
                        <div className='col-span-12 md:col-span-3 m-2 relative'>
                            <Link to={`/single/${e.id}`}>  <img className='h-44 w-80' src={e.imgUrl} alt={e.movieName} />
                                <div className='bg-gray-300 absolute bottom-0 w-full p-1'><p className='ml-1'>{e.movieName}</p> <p><AiFillStar className='inline-block mb-1' fill='orange' /><span className='mx-1'>{e.rating}</span></p></div>
                            </Link>
                        </div>
                    ))
                }
                {/* <SweetPagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={4}
                    getData={movieData}
                    navigation={true}
                /> */}
        

            </div>
            <Footer />
            {/* <div>__________________________STATIC__________________________</div>
            <div className='grid grid-cols-12 m-5 '>
                <div className='col-span-3 m-2 relative'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg" alt="Game of Thrones" />
                    <div className='bg-gray-300 absolute bottom-0 w-full p-1'><p className='ml-1'> Game of Thrones</p> <p><AiFillStar className='inline-block mb-1' fill='orange' /><span className='mx-1'>4.5/5</span></p></div>
                </div>
                <div className='col-span-3 m-2 relative'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg" alt="" />
                    <div className='bg-gray-300 absolute bottom-0 w-full p-1'><p className='ml-1'> Game of Thrones</p> <p><AiFillStar className='inline-block mb-1' fill='orange' /><span className='mx-1'>4.5/5</span></p></div>
                </div>
                <div className='col-span-3 m-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg" alt="" />
                </div>
                <div className='col-span-3 m-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg" alt="" />
                </div>
                <div className='col-span-3 m-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg" alt="" />
                </div>
                <div className='col-span-3 m-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg" alt="" />
                </div>

                <div className='col-span-3 m-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg" alt="" />
                </div>
                <div className='col-span-3 m-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg" alt="" />
                </div>
            </div> */}


        </>

    )
}

export default Home