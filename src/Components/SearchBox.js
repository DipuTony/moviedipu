import React from 'react'
import { BiSearch } from 'react-icons/bi';

function SearchBox() {
    return (

        <>
            <div className='flex mx-5 my-5'>
                <input
                    type="text"
                    placeholder='Search Movie'
                    className='border border-black w-full rounded-l-sm px-2'
                />
                <div className='bg-blue-500 border border-black border-l-0 p-1 rounded-r-sm'>
                    <BiSearch fill='white' size={30}/>
                </div>
            </div>
        </>
    )
}

export default SearchBox