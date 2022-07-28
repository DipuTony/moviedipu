import React from 'react'
import SearchBox from '../Components/SearchBox'
import { AiFillStar } from 'react-icons/ai';


function Home() {


    const movieData = [

        {
            "id": 0,
            "movieName": "Game of Thrones",
            "rating": "4.5/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg"
        },
        {
            "id": 1,
            "movieName": "Game of Thrones 2",
            "rating": "4.2/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg"
        },
        {
            "id": 2,
            "movieName": "Game of Thrones",
            "rating": "4.5/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg"
        },
        {
            "id": 3,
            "movieName": "Game of Thrones 2",
            "rating": "4.2/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg"
        },
        {
            "id": 4,
            "movieName": "Game of Thrones 2",
            "rating": "4.2/5",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg"
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
                        <div className='col-span-3 m-2 relative'>
                        <img src={e.imgUrl} alt={e.movieName} />
                        <div className='bg-gray-300 absolute bottom-0 w-full p-1'><p className='ml-1'>{e.movieName}</p> <p><AiFillStar className='inline-block mb-1' fill='orange' /><span className='mx-1'>{e.rating}</span></p></div>
                    </div>
                    ))
                }
            </div>

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