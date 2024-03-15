import react, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustandstore/useConversation';

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {


            newMessage.shouldShake = true;
            if (newMessage.senderId === selectedConversation._id) {
                setMessages([...messages, newMessage]);
            }


        });

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};
export default useListenMessages;

