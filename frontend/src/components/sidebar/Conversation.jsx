import React from 'react'
import useConversation from '../../zustandstore/useConversation';


const Conversation = ({ user, lastindex }) => {
    //extract value from zustand
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === user._id;
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
            ${isSelected ? "bg-sky-500" : ""}
            
            
            `}
                onClick={() => setSelectedConversation(user)}>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src={user.profilePic}
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{user.fullName}</p>
                        <span className='text-xl'>🎃</span>
                    </div>
                </div>
            </div>

            {!lastindex && <div className='divider my-0 py-0 h-1' />}
        </>
    );
};
export default Conversation;