import React, { useEffect } from 'react';
import { useHistory } from 'react-router';


const Login = ({authService}) =>{
    const history = useHistory();
    const goToMaker = (userId) => {
        history.push({
            pathname : '/maker',
            state : {id  : userId}
        });
    }

    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    }

    useEffect(()=>{
        authService.onAuthChange(user => {
            user && goToMaker(user.uid);
        })
    })

    return (
        <div>
            <h1>Login</h1>
            <ul>
                <li>
                    <button onClick={onLogin}>Google</button>
                </li>
                <li>
                    <button onClick={onLogin}>Github</button>
                </li>

            </ul>
        </div>
    );
};

export default Login;