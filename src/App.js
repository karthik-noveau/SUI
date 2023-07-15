import { Route, Routes } from "react-router-dom";

import Home from "./components/home";
import StartUp from "./components/startup";

import "./App.css";
import { SUINavbar } from "./components/navbar";
import { SUIDeskNavbar } from "./components/navbar/Desktop";
import { SUIButton } from "./SUI_Library/widgets/buttons/antbutton";

const PrivateRoute = (path, component)=>{

}

function App() {
  return (
    <>
      <SUINavbar />
      <div className="newFeatureAlert">
        <p> New Release! Check out the new SKYUI components and features!...</p>
      </div>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/sky-ui" element={<Home />} />

        <Route path="/sky-ui/wedgets/button" element={<SUIButton>Submit</SUIButton>} />
      </Routes>
    </>
  );
}

export default App;
