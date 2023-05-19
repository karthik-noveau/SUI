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

      {/* button */}
      {/* <SUIButton>Submit</SUIButton>
      <SUIRippleButton>Submit</SUIRippleButton>
      <SUILoadingButton time={1000} className="loadingbtn">Submit</SUILoadingButton>
      <SUILoadingButton time={1000} className="loadingbtn1">Submit</SUILoadingButton>
      <SUIDownloadLoadingButton time={1000} >download</SUIDownloadLoadingButton> */}

      {/* navbar */}
      <SUINavbar menuItemColor="#54a2af" menuItemHoverColor="#418995"/>
      {/* <SUISpinner /> */}
    </div>
  );
}

export default App;
