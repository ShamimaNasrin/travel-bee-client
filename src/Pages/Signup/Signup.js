import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1>Signup</h1>
        </div>
    );
};

export default Signup;