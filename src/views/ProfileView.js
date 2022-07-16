import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function ProfileView() {

    let navigate = useNavigate();
    let { user } = useParams(); // for insert url params to variable

    useEffect(() => {
        const tokenData = sessionStorage.getItem('token');
        
        if (!tokenData) {
            navigate("/login");
        }

    }, []);

    return (
        <>
            <h1>this is {user} profile</h1>
        </>
    )
}

export default ProfileView