import React from 'react'
import useGetSidebarUsers from '../../hooks/useGetSidebarUsers';
import Conversation from "./Conversation";

const Conversations = () => {

    const { loading, sidebarUsers } = useGetSidebarUsers();
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {sidebarUsers.map((user, index) =>
                <Conversation
                    key={user._id}
                    user={user}
                    lastindex={index === sidebarUsers.length - 1}


                />
            )}
            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
};
export default Conversations;