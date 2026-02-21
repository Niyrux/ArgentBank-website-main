import React, { useState, useEffect, useRef } from 'react';
import './edit.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../reducers/userInfo';
import { putUserdata } from '../reducers/putUserinfo';

const Edit = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);


    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const dispatch = useDispatch();
    const userData = useSelector(state => state.userInfo.data);
    const isLoading = useSelector(state => state.userInfo.loading);
    const error = useSelector(state => state.userInfo.error);
const [newUserFirstName, setNewUserFirstName] = useState(userData.body ? userData.body.firstName : "");
const [newUserLastName, setNewUserLastName] = useState(userData.body ? userData.body.lastName : "");
    const editFormRef = useRef(null);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);
useEffect(() => {
    if (userData.body) {
        setNewUserFirstName(userData.body.firstName);
        setNewUserLastName(userData.body.lastName);
    }
}, [userData]);
 

const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
        await dispatch(putUserdata({ firstName: newUserFirstName, lastName: newUserLastName }));
        dispatch(fetchUserData());
        toggleFormVisibility();
    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil utilisateur :', error);
    }
};



    const handleCancel = () => {
        toggleFormVisibility(); 
    };

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    return (
        <div className="header">
            <h1>Welcome back<br />{userData.body && userData.body.firstName + ' ' +  userData.body.lastName}</h1>
            {isFormVisible  ? (
                <form ref={editFormRef} onSubmit={handleFormSubmit} className="edit-form">
                    <div className='container-input'>
                    <input
                        type="text"
                        name='lastname'
                        value={newUserLastName} 
                        onChange={(e) => setNewUserLastName(e.target.value)}
                    />
                     <label htmlFor="lastname">Last name:</label>
                    </div>
                    <div className='container-input'>
                   
                    <input
                        type="text"
                        name='firstname'
                        value={newUserFirstName }
                        onChange={(e) => setNewUserFirstName(e.target.value)}
                    />
                    
                    
                    <label htmlFor="firstname">First name:</label>
                    </div>
                    <div className='container-btn'>
                    <button className="edit-button" type="submit">Save</button>
                    <button className="edit-button" type="button" onClick={handleCancel}>Cancel</button> 
                    </div>
                </form>
            ) : (
                <button className="edit-button" onClick={toggleFormVisibility}>
                    Edit Name
                </button>
            )}
        </div>
    );
}

export default Edit;
