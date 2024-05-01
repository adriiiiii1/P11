import React, { useContext, useEffect } from 'react';
import { useGetUserProfileQuery } from '../../app/API';
import TransactionItem from "../../Component/TransactionItem/TransactionItem.jsx";
import Welcome from "../../Component/Welcome/Welcome.jsx";
import "./Userpage.css";
import UserContext from '../../UserContext.js'; 
import Errorpage from '../Errorpage/Errorpage.jsx';

export default function UserLogin() {
    const { setIsLoggedIn, setUsername } = useContext(UserContext);
    const token = localStorage.getItem('token');

    const { data: user, isLoading, error } = useGetUserProfileQuery(token);

    useEffect(() => {
        if (user && user.body) {
            setUsername(user.body.userName);
            setIsLoggedIn(true);
        }
    }, [user, setIsLoggedIn, setUsername]);

    if (isLoading) return 'Loading...';
    if (error) return <Errorpage />;

    return (
        <main className="bg-dark">
            {user && user.body && <Welcome firstName={user.body.firstName} lastName={user.body.lastName} username={user.body.userName} />}
            <TransactionItem />
        </main>
    );
}