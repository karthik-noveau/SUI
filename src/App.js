import { SUILoadingButton } from './widgets/buttons/loadingbutton';
import { SUIDownloadLoadingButton } from './widgets/buttons/downloadbutton';
import { SUIRippleButton } from './widgets/buttons/ripplebutton';
import { SUIButton } from './widgets/buttons/antbutton';
import { SUINavbar } from './components/navbar';

import './app.css'
import SUISpinner from './widgets/spinner';



function App() {
  return (
    <div>

      <SUINavbar menuItemColor="#54a2af" menuItemHoverColor="#418995" bgColor="#f9f9f9" />

      <br></br>
      <SUIRippleButton>Submit</SUIRippleButton>
      <br></br>
      <SUILoadingButton time={1000} className="loginbtn">Login</SUILoadingButton>
      <br></br>
      <SUILoadingButton time={1000} className="signinbtn">Sign in</SUILoadingButton>
      <br></br>
      <SUIDownloadLoadingButton time={1000} >download</SUIDownloadLoadingButton>
      <br></br>
      <SUIButton>Submit</SUIButton>

      {/* <SUISpinner /> */}

    </div>
  );
}

export default App;
