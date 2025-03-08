import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation, BrowserRouter } from 'react-router-dom';
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
          <div className="top">
          <div className="spacer-90"></div>

            <div id="info">  <div id="blurb">   <p>Owen Carson is a web developer and creative producer based in Providence, Rhode Island.</p>
              {/* <p>Currently: freelancing and working on Eternal September.</p>
          <p>Previously: Building an exhibition for Jeannie</p> */}
              {/* <a>More about me</a> */}
            </div>

            </div>
            <div className="spacer-90"></div>



          </div>

          <Router>
            <Routes>
        <Route path="/" element={<DynamicContent />} />
        <Route path="/category/:categorySlug" element={<DynamicContent />} />
        <Route path="/item/:itemSlug" element={<DynamicContent />} />
        <Route path="/category/:categorySlug/item/:itemSlug" element={<DynamicContent />} />
      </Routes>
    </Router>
         </div>
        <footer>
          <Clickable>Back to top</Clickable>

        </footer>

      </div>
    </div>
  );
}

export default App;
