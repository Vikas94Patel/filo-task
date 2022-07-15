import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ConvertLatex from "./CovertLatex";

const UserScreen = ({ Logout, user }) => {
  return (
    <Container className="container">
      <div className="d-flex justify-content-between bg-info">
        <h2 className=" text-white m-2">
          Welcome, <span>{user.email}</span>
        </h2>
        <span className="m-2">
          <Button variant="light" className="text-info" onClick={Logout}>
            Logout
          </Button>
        </span>
      </div>
      <ConvertLatex user={user} />
    </Container>
  );
};

export default UserScreen;
