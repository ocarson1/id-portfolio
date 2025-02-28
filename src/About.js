import { useState } from 'react';
import Clickable from './Clickable';

const About = () => {

    const [activeCategory, setActiveCategory] = useState('Now')

    const renderCategoryContent = (item) => (
        <div className="item-content">
        <div className="spacer-50"></div>
        <p>I’m a Virginian currently living in Rhode Island. I grew up next door to the DC Metro’s Orange Line, which I am now indebted to for my love of museums, the journey as much as the destination, and 90 Second Pizza.</p>

        <p>I will be graduating from Brown University in May 2025 with a double major in Visual Art and Computer Science. I got here after becoming enchanted by both the design aspect of coding and the community aspect of artmaking.</p>

        <p>I now travel along this intersection, picking up projects and trying to learn as much as I can before I graduate. I’m grateful to have completed relevant coursework not just at Brown, but also Queen Mary University of London and Rhode Island School of Design.</p>

        <p>Last but not least, I am an artist. I am interested in the history of information networks, collage experimentation, and family histories in the American South, Bangkok, and Chicago. Both my art and design practices value transparency, resourcefulness, and care. Stay tuned for my senior capstone exhibition in the spring!</p>

        <p>Site made by me using React.js. Set in Segoe UI.</p>
        <div className="spacer-90"></div>
    </div>

    )

    return (
        <div>
            <div className="sub-nav about">
                <div className="nav">                <Clickable>About / Now</Clickable>
                <div id="head-links"><Clickable>Now</Clickable><Clickable>Bio</Clickable></div></div>


            </div>
            {activeCategory ? renderCategoryContent(activeCategory) : ''}

        </div>

    )
}

export default About;