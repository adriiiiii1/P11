
import React, { useState } from 'react';
import EditName from '../EditName/EditName.jsx';
import { useUpdateUserProfileMutation } from '../../app/API'; 
import './Welcome.css';


const Welcome = ({ firstName, lastName, username }) => {
    const [editMode, setEditMode] = useState(false);
    const [updateUserProfile, { isLoading, isError, isSuccess }] = useUpdateUserProfileMutation();

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleNameChange = async (newUsername) => {
        console.log('Update User:', { firstName, lastName, username });
        if (newUsername) {
            try {

                const token = localStorage.getItem('token');
                // appel API
                await updateUserProfile({ token, username: newUsername });
            } catch (error) {
                console.error('Failed to update user profile:', error);
            }
        }
        setEditMode(false);
    };
    const handleCancel = () => {
        setEditMode(false); 
    };

    if (isLoading) return 'Updating...';
    if (isError) return 'An error occurred';
    if (isSuccess) return 'Update successful';

    return (
        <div className="header">
            {editMode ? (
                <EditName 
                    firstName={firstName} 
                    lastName={lastName} 
                    username={username} 
                    onNameChange={handleNameChange} 
                    onClose={handleCancel} 
                />
            ) : (
                <>
                    <h1 className='user-title'>Welcome back<br />{username || `${firstName} ${lastName}`}!</h1>
                    <button className="edit-button" onClick={handleEdit}>Edit Name</button>
                </>
            )}
        </div>
    );
};

export default Welcome;