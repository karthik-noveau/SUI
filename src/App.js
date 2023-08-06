import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/home";
import StartUp from "./components/startup";

import { SUINavbar } from "./components/navbar";
import { SUINavbar as SUIDemoNavbar } from "./SUI/components/navbar";
import { useEffect, useState } from "react";

import styles from "./app.module.css";

function App() {
  const [isNavbar, setIsNaavbar] = useState(true);
  let location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    if (path) {
      let showNavbar = path.includes("widgets") || path.includes("components");
      setIsNaavbar(!showNavbar);
    }
  }, [path]);
  console.log("inside ");
  return (
    <>
      {isNavbar ? (
        <>
          <SUINavbar />
          <div className={styles.newFeatureAlert}>
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

        <Route path="/sky-ui/components/navbar" element={<SUIDemoNavbar />} />
      </Routes>
    </>
  );
}

export default App;
