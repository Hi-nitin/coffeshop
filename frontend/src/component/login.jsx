import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar2';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [usernameE, setUsernameE] = useState('');
    const [passReqError, setPassReqError] = useState('');
    const [loginDetail, setLD] = useState({ username: '', password: '' });

    const handleInput = (event) => {
        setLD({
            ...loginDetail,
            [event.target.name]: event.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', loginDetail, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.msg === 'login') {
                Cookies.set('token', response.data.token, { expires: 1 / 24 });
                navigate('/');
            }

            if (response.data.msg === 'User not found') {
                setUsernameE('User not found');
            }
            if (response.data.msg === 'incorrect password') {
                setPassReqError('Incorrect password');
            }

            if (response.data.errors) {
                response.data.errors.map((val) => {
                    if (val.msg === 'Username is required') {
                        setUsernameE(val.msg);
                    }
                    if (val.msg === 'Password is required') {
                        setPassReqError(val.msg);
                    }
                });
            }
        } catch (error) {
            console.error('Login request failed', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="login-container">
                <Form onSubmit={handleLogin} className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            onChange={handleInput}
                            placeholder="Enter username"
                            isInvalid={!!usernameE}
                        />
                        <Form.Control.Feedback type="invalid">
                            {usernameE}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={handleInput}
                            placeholder="Enter password"
                            isInvalid={!!passReqError}
                        />
                        <Form.Control.Feedback type="invalid">
                            {passReqError}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="login-btn">
                        Submit
                    </Button>

                    <div className="signup-link">
                        <p>Don't have an account? <Link to="/signup" className="signup-btn">Sign Up</Link></p>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Login;
