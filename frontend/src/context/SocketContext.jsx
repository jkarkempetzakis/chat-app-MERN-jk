import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";


const SocketContext = createContext();

//hook to use throughout the app
export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();



    useEffect(() => {

        if (authUser) {

            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id,
                },
            }); //once this connection is completed 
            setSocket(socket); //set this socket state to the connection--> "socket"
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })






            return () => socket.close(); //this closes the socket connection when the component is unmounted
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])



    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
    )
}