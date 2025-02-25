import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import DynamicContent from './DynamicContent';
import Clickable from './Clickable';


function App() {



  return (
    <div>
      <div className="App">
        <Navbar></Navbar>
        <div className="top">

          <div id="info">          <p>This is my in-progress portfolio for CSCI 1300: Interaction Design. This paragraph will have some information about me.</p>
          </div>
        </div>
        <DynamicContent></DynamicContent>
      </div>
      <footer>
        <p>Footer with legal info</p>
        <div></div>
        <p>maybe a back to top button</p>

      </footer>
    </div>
  );
}

export default App;
