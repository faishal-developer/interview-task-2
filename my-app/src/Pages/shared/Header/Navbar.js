import * as React from 'react';
import {Button, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Hooks/AuthProvider';
import {Container, Nav} from 'react-bootstrap'

export default function MenuBar() {
    const { user, logOut } = React.useContext( MyContext )

    const toggleUser = () => {
        console.log(user?.displayName );
        if ( user?.displayName ) {
            return <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'white', padding: '10px', fontWeight: 'bold' }}> {user.displayName}</span>
                <button onClick={logOut} color="inherit">Log Out</button>
            </div>
        } else {
            return <div>
                <Link style={{ borderRight: '1px solid white', color: 'white', fontWeight: 'bold' }} to='/login'><Button color="inherit">Login</Button></Link>
                <Link style={{ color: 'white', fontWeight: 'bold' }} to='/register'><Button color="inherit">Register</Button></Link>
            </div>
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Cycle-Sell</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='p-3 text-decoration-none text-light' to="/">Home</Link>
                        <Link className='p-3 text-decoration-none text-light' to="/myorder">My Orders</Link>
                    </Nav>
                    <Nav>
                        {toggleUser()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
