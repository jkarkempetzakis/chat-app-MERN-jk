import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetSidebarUsers = () => {
    const [loading, setLoading] = useState(false);
    const [sidebarUsers, setSidebarUsers] = useState([]);


    //empty dependancy array so it only runs once after initial render
    useEffect(() => {
        const GetSidebarUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/users');
                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }
                setSidebarUsers(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        GetSidebarUsers();
    }, [])
    return { loading, sidebarUsers };
}

export default useGetSidebarUsers