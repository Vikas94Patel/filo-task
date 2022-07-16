import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const LoginForm = ({ login, error, user }) => {
  const [details, setDetails] = useState({ email: "", password: "" });

  function handleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);

    login(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "780952038545-k45864hgp0lfb8hgq6un92qtu0qkncup.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // eslint-disable-next-line
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    login(details);
  };
  return (
    <Card border="primary" style={{ width: "24rem" }}>
      <Card.Body>
        <h1 className="mb-4 text-primary text-center">Login</h1>
        <Form onSubmit={submitHandler}>
          <div className="form">
            {error !== "" ? (
              <div className="error text-danger">{error}</div>
            ) : (
              ""
            )}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                name="name"
                id="name"
                autoComplete="off"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                name="email"
                id="email"
                autoComplete="off"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </Form.Group>
            <div className="mb-3">
              <Button type="submit">Login</Button>
            </div>
          </div>
        </Form>
        <div id="signInDiv"></div>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
