import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./Context/UserContextProvider.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>React context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
