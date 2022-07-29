import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import {Link, useParams} from 'react-router-dom'

function SingleView() {

    const id = useParams();
    const paramId = id.id

    // console.log("The param id is",paramId)

    const movieData = [
        {},

        {
            "id": 1,
            "movieName": "Game of Thrones",
            "rating": "4.5/5",
            "releaseData": "1971",
            "originalLang":"English, Spanish, French",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg"
        },
        {
            "id": 2,
            "movieName": "Moon Knight",
            "rating": "4.2/5",
            "releaseData": "2011",
            "originalLang":"English, Spanish",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Moon_Knight_%28TV_series%29_logo.jpeg/375px-Moon_Knight_%28TV_series%29_logo.jpeg"
        },
        {
            "id": 3,
            "movieName": "RRR",
            "rating": "5.0/5",
            "releaseData": "2022",
            "originalLang":"Tamil, Telgu, Hindi",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
        },
        {
            "id": 4,
            "movieName": "Phone",
            "rating": "3.2/5",
            "releaseData": "2002",
            "originalLang":"English, French",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/3/30/Phone-south-korean-movie-poster-md.jpg"
        },
        {
            "id": 5,
            "movieName": "Top Gun",
            "rating": "4.9/5",
            "releaseData": "2022",
            "originalLang":"English",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg?20220417170541"
        }

    ]

    // console.log(movieData[paramId].movieName)

    return (
        <>
            <div className='grid grid-cols-2'>
                <div className='LEFT mx-5 col-span-2 md:col-span-1 md:my-auto md:mx-16'>
                  <Link to="/"> <div className='hover:bg-gray-200 mt-5 rounded-full md:p-2 w-fit h-min cursor-pointer'> <BsArrowLeft className='cursor-pointer' /></div>
                  </Link>
                    <h1 className='text-3xl font-semibold mt-5'>{movieData[paramId].movieName}</h1>
                    <p className='my-5'>Rating: {movieData[paramId].rating}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas atque natus nostrum illo impedit maiores nesciunt vel voluptates, illum, quos magni aut voluptatibus mollitia dicta tempore qui, nemo quis non!</p>
                    <p className='my-4'>Release Date <span className='md:ml-16'>{movieData[paramId].releaseData}</span></p>
                    <p className='mb-5'>Original Language <span className='ml-5'>{movieData[paramId].originalLang}</span></p>
                </div>
                <div className='RIGHT col-span-2 md:col-span-1 m-4 md:m-0'>
                    {/* <img className='h-96 w-screen md:h-screen md:w-screen' src="https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg" alt="Movie Scene" /> */}
                    <img className='h-96 w-screen md:h-screen md:w-screen' src={movieData[paramId].imgUrl} alt="Movie Scene" />
                </div>
            </div>
        </>
    )
}

export default SingleView