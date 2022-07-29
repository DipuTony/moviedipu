import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import {Link} from 'react-router-dom'

function SingleView() {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div className='LEFT mx-5 col-span-2 md:col-span-1 md:my-auto md:mx-16'>
                  <Link to="/"> <div className='hover:bg-gray-200 mt-5 rounded-full md:p-2 w-fit h-min cursor-pointer'> <BsArrowLeft className='cursor-pointer' /></div>
                  </Link>
                    <h1 className='text-3xl font-semibold mt-5'>The Godfather</h1>
                    <p className='my-5'>Rating: 5.65/5</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas atque natus nostrum illo impedit maiores nesciunt vel voluptates, illum, quos magni aut voluptatibus mollitia dicta tempore qui, nemo quis non!</p>
                    <p className='my-4'>Release Date <span className='md:ml-16'>1972</span></p>
                    <p className='mb-5'>Original Language <span className='ml-5'>English, Spanish, French</span></p>
                </div>
                <div className='RIGHT col-span-2 md:col-span-1'>
                    <img className='h-96 w-screen md:h-screen md:w-screen' src="https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg" alt="Movie Scene" />
                </div>
            </div>
        </>
    )
}

export default SingleView