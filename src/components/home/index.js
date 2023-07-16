import ReactIframe from "react-iframe";

import { SUILoadingButton } from "../../SUI_Library/widgets/buttons/loadingbutton";
import { SUIDownloadLoadingButton } from "../../SUI_Library/widgets/buttons/downloadbutton";
import { SUIRippleButton } from "../../SUI_Library/widgets/buttons/ripplebutton";
import { SUIButton } from "../../SUI_Library/widgets/buttons/antbutton";
import { SUINavbar } from "../../SUI_Library/components/navbar";
import { SUISpinner } from "../../SUI_Library/widgets/spinner";
import { SUIFooter } from "../../SUI_Library/components/footer";
import { SUISlider } from "../../SUI_Library/components/carousel/slider";
import { SUIDescriptionSlider } from "../../SUI_Library/components/carousel/description_slider";
import { SUITestimonials } from "../../SUI_Library/components/carousel/testimonials";
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

 <Container/>



            {/* <SUINavbar />
            <br></br>
            <SUISlider />
            <br></br>
            <SUIDescriptionSlider />

            <br></br>

            <SUITestimonials />

            <ReactIframe />

            <br></br>
            <SUIRippleButton color="white" bgColor="red">
              Submit
            </SUIRippleButton>
            <br></br>
            <SUILoadingButton time={1000} className="loginbtn">
              Login
            </SUILoadingButton>
            <br></br>
            <SUILoadingButton time={1000} className="signinbtn">
              Sign in
            </SUILoadingButton>
            <br></br>
            <SUIDownloadLoadingButton time={1000} color="white" bgColor="red">
              download
            </SUIDownloadLoadingButton>
            <br></br>
            <SUIButton color="white" bgColor="red">
              Submit
            </SUIButton> */}

            {/* <SUIFooter /> */}
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
