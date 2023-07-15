import { Route, Routes } from "react-router-dom";

import Home from "./components/home";
import StartUp from "./components/startup";

import './App.css'
import { SUINavbar } from "./components/navbar";
import { SUIDeskNavbar } from "./components/navbar/Desktop";

function App() {
  return (
    <>
      <SUINavbar />
      <div className="newFeatureAlert">
        <p> New Release! Check out the new SKYUI components and features!...</p>
      </div>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/components" element={<Home />} />

        <Route path="/components/component/navbar" element={<SUIDeskNavbar />} />
      </Routes>
    </>
  );
}

export default App;
