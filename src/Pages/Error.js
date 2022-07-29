import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <>
            <div className='text-center'>
                <h1 className='text-7xl'>404!</h1>
                <h2 className=''>Page Not Found</h2>
                <Link to="/"><button className='bg-blue-400 my-2 py-1 px-3 rounded-sm'>Home</button></Link>
            </div>
        </>
    )
}

export default Error