import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });

        }, 100)
    }, [messages]);


    return (

        //rendering 3 arrays as a loading screen mechanism displaying  the message skeleton
        <div className='px-4 flex-1 overflow-auto'>
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))}

            {loading && [...Array(3).map((_, index) => <MessageSkeleton key={index} />)]}

            {!loading && messages.length === 0 && (
                <p className="text-center">Send a message to start a conversation!</p>
            )}
        </div>
    );
};
export default Messages;