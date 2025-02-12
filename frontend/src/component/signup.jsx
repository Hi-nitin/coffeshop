import './signup.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import signupMap from '../maping/signup';
import axios from 'axios';
import Navbar from './navbar2';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setfd] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    cpassword: '',
    contact: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleInput = (events) => {
    setfd({
      ...formData,
      [events.target.name]: events.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Apirequest = await axios.post('http://localhost:3000/signup', formData);
      const Apiresponse = await Apirequest.data;
      Apiresponse.success === true
        ? alert('Successfully signed up')
        : signupMap(Apiresponse.errors);

      Apiresponse.msg === 'duplicate user' ? alert('User is duplicate') : null;
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstname"
                placeholder="First name"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                name="lastname"
                type="text"
                placeholder="Last name"
                onChange={handleInput}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleInput}
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="cpassword"
                placeholder="Confirm password"
                onChange={handleInput}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustomContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                required
                type="text"
                name="contact"
                placeholder="Enter contact number"
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationCustomAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                name="address"
                placeholder="Enter address"
                onChange={handleInput}
              />
            </Form.Group>
          </Row>

          <Button type="submit">Submit form</Button>
        </Form>

        <div className="login-btn-container">
          <Button variant="link" onClick={handleLoginRedirect}>
            Already have an account? Login here
          </Button>
        </div>
      </div>
    </>
  );
}

export default Signup;
