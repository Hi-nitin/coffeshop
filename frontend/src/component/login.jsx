import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar2';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './login.css';  // Importing custom CSS for login styles

function Login() {
    const navigate = useNavigate();  // Hook to navigate after successful login
    const [usernameE, setUsernameE] = useState('');  // Error state for username
    const [passReqError, setPassReqError] = useState('');  // Error state for password
    const [loginDetail, setLD] = useState({ username: '', password: '' });  // State to store login details

    // Handle input changes for username and password fields
    const handleInput = (event) => {
        setLD({
            ...loginDetail,
            [event.target.name]: event.target.value
        });
    };

    // Handle form submission (login request)
    const handleLogin = async (e) => {
        e.preventDefault();  // Prevent default form submission

        try {
            // Send POST request with login details to the backend
            const response = await axios.post('http://localhost:3000/login', loginDetail, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Handle successful login
            if (response.data.msg === 'login') {
                Cookies.set('token', response.data.token, { expires: 1 / 24 }); // Store token in cookies
                navigate('/');  // Redirect to homepage after successful login
            }

            // Handle specific error messages from the backend
            if (response.data.msg === 'User not found') {
                setUsernameE('User not found');  // Display error for invalid username
            }
            if (response.data.msg === 'incorrect password') {
                setPassReqError('Incorrect password');  // Display error for incorrect password
            }

            // Handle validation errors for missing fields
            if (response.data.errors) {
                response.data.errors.map((val) => {
                    if (val.msg === 'Username is required') {
                        setUsernameE(val.msg);  // Display error for missing username
                    }
                    if (val.msg === 'Password is required') {
                        setPassReqError(val.msg);  // Display error for missing password
                    }
                });
            }
        } catch (error) {
            console.error('Login request failed', error);
            // You can display a generic error message here if needed
        }
    };

    return (
        <>
            <Navbar />  {/* Navbar component */}

            <div className="login-container">
                <Form onSubmit={handleLogin} className="login-form">
                    {/* Username Input */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            onChange={handleInput}
                            placeholder="Enter username"
                            isInvalid={!!usernameE}  // Highlight field if there's an error
                        />
                        <Form.Control.Feedback type="invalid">
                            {usernameE}  {/* Display username error */}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password Input */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={handleInput}
                            placeholder="Enter password"
                            isInvalid={!!passReqError}  // Highlight field if there's an error
                        />
                        <Form.Control.Feedback type="invalid">
                            {passReqError}  {/* Display password error */}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="primary" type="submit" className="login-btn">
                        Submit
                    </Button>

                    {/* Sign Up Link */}
                    <div className="signup-link">
                        <p>Don't have an account? <Link to="/signup" className="signup-btn">Sign Up</Link></p>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Login;
