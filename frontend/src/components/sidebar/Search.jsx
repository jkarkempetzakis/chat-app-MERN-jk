import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustandstore/useConversation';
import useGetSidebarUsers from '../../hooks/useGetSidebarUsers';
import toast from 'react-hot-toast';

const Search = () => {
    const [search, setSearch] = useState('');
    const { setSelectedConversation } = useConversation();
    const { sidebarUsers } = useGetSidebarUsers();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return toast.error("You might want to search for something ;)");
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long.");

        }
        const user = sidebarUsers.find((u) => u.fullName.toLowerCase().includes(search.toLowerCase()));

        if (user) {
            setSelectedConversation(user);
            setSearch('');

        } else toast.error("Whoops! No such user found!");
    };

    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search…' className='input input-bordered rounded-full'
                value={search}

                onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default Search