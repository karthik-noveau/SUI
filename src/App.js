import { Route, Routes } from "react-router-dom";

import Home from "./components/home";
import StartUp from "./components/startup";

import './App.css'
import { SUINavbar } from "./components/navbar";

function App() {
  return (
    <>

      <div className="newFeatureAlert">
       <p> New Release! Check out the new SKYUI components and features!...</p>
      </div>

      <SUINavbar />
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/components" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
