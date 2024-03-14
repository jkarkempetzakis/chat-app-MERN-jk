import React from 'react'
import Search from './Search'
import Conversations from './Conversations'
import Logout from "./Logout";

const Sidebar = () => {
    return (
        <div className='border-r border-slate-700 p-4 flex flex-col'>

            <Search />

            <div className="divider divider-info"></div>
            <Conversations />
            <div className="divider divider-info"></div>
            <Logout />

        </div>
    )
}

export default Sidebar