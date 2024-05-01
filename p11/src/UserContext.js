import React from 'react';

const UserContext = React.createContext({
    isLoggedIn: false,
    setUsername: () => {},
});

export default UserContext;