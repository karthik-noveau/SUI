import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/home";
import StartUp from "./components/startup";

import "./App.css";
import { SUINavbar } from "./components/navbar";
import { SUINavbar as SUIDemoNavbar } from "./SUI/components/navbar";
import { SUIDeskNavbar } from "./components/navbar/Desktop";
import { SUIButton } from "./SUI/widgets/buttons/antbutton";
import { useEffect, useState } from "react";

function App() {
  const [isNavbar, setIsNaavbar] = useState(true);
  let location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    if (path) {
      let showNavbar =
        path.includes("widgets") || path.includes("components");
      setIsNaavbar(!showNavbar);
    }
  }, [path]);
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

        <Route path="/sky-ui/widgets/button" element={<SUIDemoNavbar />} />
      </Routes>
    </>
  );
}

export default App;
