import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



function mockFetch(url, body) {

    if (url != 'www.try.com/api/v1/user-login') {
        return Promise.reject({
            status: 404,
            msg: "login failed"
        });
    }

    if (body.email != 'admin@gmail.com' || body.password != 'admin123') {
        return Promise.reject({
            status: 404,
            msg: "wrong email or password"
        });
    }

    return Promise.resolve(
        new Response(
            JSON.stringify({
                status: 200,
                accessToken: 'token123',
                data: {
                    username: 'Admin'
                }
            })
        )
    )
}

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        mockFetch('www.try.com/api/v1/user-login', {
            email: email,
            password: password
        }).then(res => {
            res.json().then(data => {
                console.log(data);

                sessionStorage.setItem('token', data.accessToken);

                setEmail('');
                setPassword('');
                
                navigate(`/profile/${data.data.username}`);
            });
        }).catch(err => {
            alert(err.msg);
        });
    }

    return (
        <>
            <h1>Login Page</h1>
            <form style={{display: 'flex', flexDirection: 'column', width: 150}} onSubmit={e => handleLogin(e)}>
                <input type='email' name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' />
                <input type='password' name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' />
                <input style={{width: 70}} type='submit' value='submit' />
            </form>
        </>
    )
}

export default Login








