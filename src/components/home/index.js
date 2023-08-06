import LeftHomeMenu from "./left_menu";
import RightHomeMenu from "./right_menu";

import "./style.css";
import { Container } from "./container";

const { REACT_APP_URL } = process.env;

const Home = () => {
  console.log(REACT_APP_URL);
  return (
    <>
      <div className="Home">
        <div className="HomeLeftHomeMenu">
          <LeftHomeMenu />
        </div>

        <div className="HomeContainer">
          <div className="HomeContainerBox">
            <Container />
          </div>
        </div>

        <div className="HomeRightHomeMenu">
          <RightHomeMenu />
        </div>
      </div>
    </>
  );
};

export default Home;
