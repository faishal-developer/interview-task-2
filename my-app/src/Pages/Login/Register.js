import React, { useContext, useState } from 'react';
import { MyContext } from '../Hooks/AuthProvider';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Register = () => {
    const [newUser, setNewUser] = useState( {} )
    const { createUserWithPassword } = useContext( MyContext )
    const history = useNavigate()

    const handleChange = ( e ) => {
        let changedUser = { ...newUser };
        changedUser[e.target.name] = e.target.value
        setNewUser( changedUser )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        createUserWithPassword( newUser.email, newUser.password, newUser.name, history )
        e.target.reset()
    }

    return (
        <div>
            <div className='login-background'>
                <div>
                    <div  style={{ paddingTop: "15%", paddingLeft:'40%' }}>
                        <h2 style={{ fontWeight: 'bold'}}>Please Register</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                onChange={handleChange}
                                required
                                style={{ width: '50%', my: 1 }}
                                id="filled-required"
                                label="Name"
                                name="name"
                                placeholder="name"
                            /><br />
                            <input
                                onChange={handleChange}
                                required
                                type='email'
                                style={{ width: '50%', my: 1 }}
                                id="filled-required"
                                label="email"
                                name="email"
                                placeholder="email"
                            /><br />
                            <input
                                onChange={handleChange}
                                required
                                id="filled-required"
                                style={{ width: '50%', my: 1 }}
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="password"
                            /><br/>
                            <input
                                onChange={handleChange}
                                required
                                id="filled-required"
                                style={{ width: '50%', my: 1 }}
                                label="Re-type Password"
                                name='password2'
                                type='password'
                                placeholder="password"
                            />
                            <br />
                            <Button style={{ width: '50%', my: 1 }} variant="contained" type="submit">Register</Button>
                        </form>
                        Already Registered ? Go To <Link style={{ color: 'blue', textDecoration: 'underline' }} to='/login'>Login Page</Link> .
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;