import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessageBox from '../components/messages/MessageBox'

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding  backdrop-blur-lg bg-opacity-60'>


            <Sidebar />
            <MessageBox />
        </div>
    )
}

export default Home