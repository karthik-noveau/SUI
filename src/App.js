import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/home";
import StartUp from "./components/startup";

import "./App.css";
import { SUINavbar } from "./components/navbar";
import { SUINavbar as SUIDemoNavbar } from "./SUI/components/navbar";
import { SUIDeskNavbar } from "./components/navbar/Desktop";
import { SUIButton } from "./SUI/widgets/buttons/antbutton";
import { useEffect, useState } from "react";
let navbar = true;
const PrivateRoute = ({ component }) => {
  let location = useLocation()
  let path = location.pathname;
  if (path.includes("/widgets/")) {
    navbar = false;
    return component;
  }
  if (path.includes("/components/")) {
    navbar = false;
    return component;
  }
};

function App() {
  const [isNavbar, setIsNaavbar] = useState(true);
  useEffect(() => setIsNaavbar(navbar), [navbar]);
  console.log("inside ");
  return (
    <>
      {isNavbar ? (
        <>
          <SUINavbar />
          <div className="newFeatureAlert">
            <p>
              {" "}
              New Release! Check out the new SKYUI components and features!...
            </p>
          </div>
        </>
      ) : (
        ""
      )}

      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/sky-ui" element={<Home />} />

        <Route
          path="/sky-ui/widgets/button"
          element={<PrivateRoute component={<SUIDemoNavbar />} />}
        />
      </Routes>
    
    </>
  );
}

export default App;
