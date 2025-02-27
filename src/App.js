import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar';
import DynamicContent from './DynamicContent';
import Clickable from './Clickable';
import About from './About'


function App() {



  return (
    <div>
      <div className="App">
        {/* <div className="spacer-210"></div> */}
      <Navbar></Navbar>

        <div className="app-grid">
        <div className="spacer-90"></div>
          <div className="top">

            <div id="info">  <div id="blurb">   <p>Owen Carson is a web developer and artist based in Providence, Rhode Island.</p>
              {/* <p>Currently: freelancing and working on Eternal September.</p>
          <p>Previously: Building an exhibition for Jeannie</p> */}
              {/* <a>More about me</a> */}
            </div>
            </div>
          </div>
          <DynamicContent></DynamicContent>
          <About></About>


        </div>
        <footer>
          <p>Footer with legal info</p>
          <div></div>
          <p>maybe a back to top button</p>

        </footer>

      </div>
    </div>
  );
}

export default App;
