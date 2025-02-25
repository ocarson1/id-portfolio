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


        {/* <div className="bottom">
          <div class="sub-nav">
            <div class="nav">
              <div>Assignments</div>
              <div id="head-links">
                <div>Category 1</div>
                <div>Category 2</div>
              </div>
            </div>
          </div>
          <div class="dynamic-container">
            <div class="index">
              <div class="item-1">
                <div class="item-title">Accessible Components</div>
                <div class="item-date">February 2025</div>
              </div>
              <div>Redesigned an accordion menu for _______.</div>
              <div></div>

              <div>Read more</div>
            </div>
            <div class="item">
              <div class="item-1">
                <div class="item-title">Painting the CIT</div>
                <div class="item-date">February 2025</div>
              </div>
              <div>Proposed a new color palette for a beloved building on campus.</div>
              <div></div>

              <div class="faded">Coming soon</div>
            </div>
            <div class="item">
              <div class="item-1">
                <div class="item-title">Syllabus Quiz</div>
                <div class="item-date">January 2025</div>
              </div>
              <div>Aced it!</div>
              <div></div>
              <div class="faded">Coming soon</div>
            </div>
            <div class="spacer-420"></div>
          </div>

        </div> */}
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
