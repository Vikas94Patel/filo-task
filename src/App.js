import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import UserScreen from "./components/UserScreen";
import userData from "./data";

function App() {
  const [user, setUser] = useState(userData);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (details) => {
    if (
      (details.email === user.email && details.password !== "") ||
      details.email_verified
    ) {
      setLogin(true);
      setUser({ ...user, email: details.email, name: details.name });
    } else {
      setError("Incorrect email or password!");
    }
  };

  const handleLogout = (details) => {
    setLogin(false);
  };

  return (
    <div className="App">
      {login ? (
        <UserScreen Logout={handleLogout} user={user} />
      ) : (
        <LoginForm login={handleLogin} error={error} />
      )}
    </div>
  );
}

export default App;
