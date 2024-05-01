import React, { useState } from 'react';
import './EditName.css';
import { useUpdateUserProfileMutation } from '../../app/API'; 

const EditName = ({ firstName, lastName, username, onNameChange }) => {
    const [newUsername, setNewUsername] = useState(username || '');
    const [updateUserProfile] = useUpdateUserProfileMutation();

    const handleSave = async () => {
    
        if (newUsername) {
            try {
                const token = localStorage.getItem('token');
                // appel API pour l'update
                await updateUserProfile({ token, username: newUsername });
                onNameChange(newUsername);
            } catch (error) {
                console.error('Failed to update user profile:', error); 
            }
        }
    };

    const handleCancel = () => {
        onNameChange(null);
    };

    return (
        <form className="form-edit">
            <h2>Edit user info</h2>
            <div className="input-edit">
                <label htmlFor="username">User name:</label>
                <input
                    type="text"
                    id="username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    required
                />
            </div>
            <div className="input-edit">
                <label htmlFor="firstname">First name:</label>
                <input type="text" id="firstname" disabled value={firstName} />
            </div>
            <div className="input-edit">
                <label htmlFor="lastname">Last name:</label>
                <input type="text" id="lastname" disabled value={lastName} />
            </div>
            <div className="btn-edit">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default EditName;