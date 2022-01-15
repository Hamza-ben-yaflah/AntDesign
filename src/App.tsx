import React, { useState } from "react";
import Login from "./Pages/login/Login";
import "./App.css";
import Home from "./Pages/HomePage/Home";

function App() {
  const [displayHome, setDisplayHome] = useState<boolean>(false);
  return (
    <div>
      {displayHome ? (
        <Home />
      ) : (
        <Login change={() => setDisplayHome(!displayHome)} />
      )}
    </div>
  );
}

export default App;
