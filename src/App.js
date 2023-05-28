import { SUILoadingButton } from './widgets/buttons/loadingbutton';
import { SUIDownloadLoadingButton } from './widgets/buttons/downloadbutton';
import { SUIRippleButton } from './widgets/buttons/ripplebutton';
import { SUIButton } from './widgets/buttons/antbutton';
import { SUINavbar } from './components/navbar';

import './app.css'
import SUISpinner from './widgets/spinner';
import SUIFooter from './components/footer';



function App() {
  return (
    <div>

      <SUINavbar menuItemColor="#54a2af" menuItemHoverColor="#418995" bgColor="white" />

      <br></br>
      <SUIRippleButton color="white" bgColor="red" >Submit</SUIRippleButton>
      <br></br>
      <SUILoadingButton time={1000} className="loginbtn" >Login</SUILoadingButton>
      <br></br>
      <SUILoadingButton time={1000} className="signinbtn"  >Sign in</SUILoadingButton>
      <br></br>
      <SUIDownloadLoadingButton time={1000} color="white" bgColor="red">download</SUIDownloadLoadingButton>
      <br></br>
      <SUIButton color="white" bgColor="red">Submit</SUIButton>

      {/* <SUISpinner /> */}

      <SUIFooter />

    </div>
  );
}

export default App;
