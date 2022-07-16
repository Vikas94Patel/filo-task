import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ConvertLatex from "./CovertLatex";

const UserScreen = ({ Logout, user }) => {
  return (
    <Container className="container">
      <div className="d-flex justify-content-between bg-info px-5">
        <h2 className=" text-white m-2">Welcome</h2>
        <span className="m-2">
          <Button variant="light" className="text-info" onClick={Logout}>
            Logout
          </Button>
        </span>
      </div>
      <ConvertLatex user={user} />
      <div className="bg-info px-5 py-2">
        <p className="text-center text-white m-0">Logged in as {user.name}</p>
      </div>
    </Container>
  );
};

export default UserScreen;
