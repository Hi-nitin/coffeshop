import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar'
import axios from 'axios';


function login() {
    const navigate = useNavigate();
    const [usernameE, setusernameE] = useState();
    const [passreqerror, setpassreqerror] = useState();
    const [logindetail, setLD] = useState({ username: '', password: '' })
    const handleinput = (event) => {
        setLD({
            ...logindetail,
            [event.target.name]: event.target.value
        })
    }

    const handlelogin = async (p) => {
        p.preventDefault();

        const response = await axios.post('http://localhost:3000/login',
            logindetail, {
            headers: {
                'Content-Type': 'application/json'
            }

        });

        if (response.data.msg === 'login') {
     
            Cookies.set('token', response.data.token, { expires: 1 / 24 });

            navigate('/');
        }


        if (response.data.msg == 'User not found') {
            setusernameE(response.msg)
        }
        if (response.data.msg == 'incorrect password') {
            setpassreqerror(response.msg)
        }

        if (response.data.errors) {
            response.data.errors.map((val) => {

                if (val.msg == 'Username is required') {
                    setusernameE(val.msg)
                }
                if (val.msg == 'Password is required') {
                    setpassreqerror(val.msg)
                }


            })

        }

    }
    return (
        <>
            <Navbar />

            <Form onSubmit={handlelogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name='username' onChange={handleinput} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        {usernameE}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' onChange={handleinput} placeholder="Password" />
                    {passreqerror}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default login;