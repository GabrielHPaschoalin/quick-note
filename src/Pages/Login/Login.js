import React from "react";
import "./Login.css"
import { Form, Button } from "react-bootstrap"

function Login() {
    return (
        <div className="base">
            <div className="container">
                <div>
                    <img src="/images/sabado.png" alt="lol" />
                    <Form className="inputs">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="Senha">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button variant="primary">Login</Button>{' '}
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;