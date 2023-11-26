import Login from "./components/HOMEPAGE/login";
import "./components/CSS/All.css";
import "@fontsource/montserrat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/HOMEPAGE/Resume";
import Form from "./components/HOMEPAGE/Form";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
