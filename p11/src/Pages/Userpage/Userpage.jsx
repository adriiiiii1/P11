import React, { useEffect } from 'react';
import { useGetUserProfileQuery } from '../../app/API';
import TransactionItem from "../../Component/TransactionItem/TransactionItem.jsx";
import Welcome from "../../Component/Welcome/Welcome.jsx";
import "./Userpage.css";
import Errorpage from '../Errorpage/Errorpage.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../app/actions/user.action';

export default function UserLogin() {
    const token = localStorage.getItem('token');
    const username = useSelector((state) => state.user.username);
    const dispatch = useDispatch();

    const { data: user, isLoading, error } = useGetUserProfileQuery(token);

    useEffect(() => {
        if (user && user.body) {
            dispatch(loginUser(user.body.userName));
        }
    }, [user, dispatch]);

    if (isLoading) return 'Loading...';
    if (error) return <Errorpage />;

    return (
        <main className="bg-dark">
            {user && user.body && <Welcome firstName={user.body.firstName} lastName={user.body.lastName} username={username} />}
            <TransactionItem />
        </main>
    );
}