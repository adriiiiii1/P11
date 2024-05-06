import React, { useState } from 'react';
import './EditName.css';
import { useUpdateUserProfileMutation } from '../../app/API'; 
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../app/actions/user.action';

const EditName = ({ firstName, lastName, onClose }) => {
    const username = useSelector((state) => state.user.username);
    const [newUsername, setNewUsername] = useState(username || '');
    const [updateUserProfile] = useUpdateUserProfileMutation();
    const dispatch = useDispatch();

    const handleSave = async () => {
        if (newUsername) {
            try {
                const token = localStorage.getItem('token');
                // appel API pour l'update
                await updateUserProfile({ token, username: newUsername });
                dispatch(loginUser(newUsername));
            } catch (error) {
                console.error('Failed to update user profile:', error); 
            }
        }
    };

    const handleCancel = (e) => {
        e.preventDefault(); 
        onClose();
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