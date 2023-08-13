import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/home";
import StartUp from "./components/startup";
import { SUINavbar } from "./components/navbar";
import { Button } from "@project/common/widgets/button";

import styles from "./app.module.css";

function App() {
  const [isNavbar, setIsNaavbar] = useState(true);
  const [showPadding, setShowPadding] = useState(true);

  let location = useLocation();
  let path = location.pathname;
  useEffect(() => {
    if (path) {
      let showNavbar = path.includes("widgets") || path.includes("components");
      setIsNaavbar(!showNavbar);
    }
    if (
      path.includes("navbar") ||
      path.includes("/") ||
      path.includes("overview")
    ) {
      setShowPadding(false);
    }
  }, [path]);
  return (
    <>
      {isNavbar && (
        <>
          <SUINavbar />
          <div className={styles.newFeatureAlert}>
            <p>
              {" "}
              New Release! Check out the new SKYUI components and features!...
            </p>
          </div>
        </>
      )}

      <div className={showPadding && styles.componentBody}>
        <Routes>
          <Route path="/" element={<StartUp />} />
          <Route path="/sky-ui/overview" element={<Home />} />

          <Route path="/sky-ui/components/button" element={<Button />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
