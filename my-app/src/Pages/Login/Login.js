import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../Hooks/AuthProvider';
import './login.css'


const Login = () => {
    const [newUser, setNewUser] = useState( {} )
    const { signInWithPassword } = useContext( MyContext )
    const history = useNavigate();
    const location = useLocation()

    const handleChange = ( e ) => {
        let changedUser = { ...newUser };
        changedUser[e.target.name] = e.target.value
        setNewUser( changedUser )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        let url = location?.state?.from?.pathname || '/home'
        console.log( url );
        signInWithPassword( newUser.email, newUser.password, history, url )
        e.target.reset()

    }

    return (
        <div>
            <div className='login-background'>
                <div>
                    <div style={{ paddingTop: "15%",paddingLeft:'50%', px: 5 }}>
                        <h2 variant="h5" style={{ fontWeight: 'bold', color: "primary.main" }}>Please Login</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                required
                                type='email'
                                style={{ width: '50%', marginRight: 1, color: 'brown' }}
                                label="email"
                                name="email"
                                variant="filled"
                            /><br />
                            <input
                                onChange={handleChange}
                                required
                                type="password"
                                name="password"
                                style={{ width: '50%', marginRight: 1 }}
                                label="password"
                                variant="filled"
                            />
                            <br />
                            <Button type="submit" style={{ width: '25%', marginRight: 1 }}>Login</Button>
                        </form>
                        Not Registered Yet ? Go to <Link style={{ color: 'blue', textDecoration: 'underline' }} to='/register'>Register Page</Link> .
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;