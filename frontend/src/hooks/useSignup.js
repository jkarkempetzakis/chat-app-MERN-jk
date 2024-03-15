import React from 'react'
import { useState } from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = validation({ fullName, username, password, confirmPassword, gender });
        if (!success) return;
        setLoading(true);


        try {
            const response = await fetch('/api/auth/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error)
            }
            //saving to local storage
            localStorage.setItem("authUser", JSON.stringify(data));
            //updating context
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, signup }
}

export default useSignup;

function validation({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('All fields are required.');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords must match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long');
        return false;
    }
    return true;
}