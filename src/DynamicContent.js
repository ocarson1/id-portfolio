import { useState, useEffect } from 'react';
import accessibleComponents from './content/accessible-components.md'
import hwy from './content/handwoven-youth.md'
import aapi from './content/aapi-history.md'
import ouc from './content/brown-ouc.md'
import webcollage from './content/web-collage.md'
import bai from './content/bai.md'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import Clickable from './Clickable';
import About from './About'
import CursorPreview from './CursorPreview';

import penny from './images/penny.png'




const DynamicContent = () => {
    // State to track which content should be displayed
    const [activeCategory, setActiveCategory] = useState('');
    const [activeItem, setActiveItem] = useState(null);
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch(accessibleComponents)
            .then((response) => response.text()).then((text) => { setMarkdownContent(text) })
        // Setting the content from the Markdown file
    }, []);

    useEffect(() => {
        if (activeItem && activeItem.content) {
            fetch(activeItem.content)
                .then((response) => response.text())
                .then((text) => { setMarkdownContent(text) })
                .catch(error => {
                    console.error("Error loading content:", error);
                });
        }
    }, [activeItem]);

    // const getContent = (content) => {
    //     fetch(content)
    //         .then((response) => response.text())
    //         .then((text) => {setMarkdownContent(text)})
    //         .catch(error => {
    //             console.error("Error loading content:", error);
    //         });
    // };


    const categories = ['Web', 'Exhibition', 'Education']


    // Sample content data - you can replace this with your actual content
    const items = [
        {
            id: 1,
            title: "Web Collage",
            date: 'Current',
            description: 'Visualizing trending Google searches through a public exhibition',
            category: 'Web Exhibition',
            content: webcollage,
            status: 'active',
        },
        {
            id: 2,
            title: 'Brown Arts Institute',
            date: 'Current',
            description: 'Assisting production staff and building a hypermedia wiki',
            category: 'Web Exhibition',
            content: bai,
            status: 'coming'
        },
        {
            id: 3,
            title: 'Handwoven Youth',
            date: '2024',
            description: 'Developed a website for an emerging youth literacy nonprofit',
            category: 'Web Education',
            content: hwy,
            status: 'coming'
        },
        {
            id: 4,
            title: 'AAPI History Museum',
            date: '2024',
            description: 'Co-designed and fabricated a travelling local history exhibit',
            category: 'Education Exhibition',
            content: aapi,
            status: 'coming'
        },
        {
            id: 5,
            title: 'brown.edu',
            date: '2023',
            description: 'Migrated 600+ pages of content for univeristy site redesign',
            category: 'Web',
            content: ouc,
            status: 'coming'
        }

    ];



    // Filter items based on active category
    const filteredItems = activeCategory === ''
        ? items
        : items.filter(item => item.category.includes(activeCategory));

    // Render item content when selected
    const renderItemContent = () => (
        <div className="item-content">
            <div className="spacer-50"></div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
            <div className="spacer-90"></div>
        </div>
    );

    // Render index/list view
    const renderIndex = () => (
        <div className="index">
            {filteredItems.map(item => (
                <div>
                    <Clickable scrollThreshold='360' scrollType='instant'
                        key={item.id}
                        className="item"
                        onClick={() => {setActiveCategory(null); setActiveItem(item)}}
                    >
                        <div className="item-1">
                            <div className="item-title">{item.title}</div>
                            <div className="item-date">{item.date}</div>
                        </div>
                        <div>{item.description}</div>
                        <div className="tag-guide">
                            <div style={{ color: 'RGBA(38, 187, 204, 0.75)' }}>{item.category.includes(categories[0]) ? '●' : ''}</div>
                            <div style={{ color: 'RGBA(255, 62, 146, 0.75)' }}>{item.category.includes(categories[1]) ? '●' : ''}</div>
                            <div style={{ color: 'RGBA(255, 217, 64, 0.75)' }}>{item.category.includes(categories[2]) ? '●' : ''}</div>
                        </div>
                        {/* <div className={item.status === 'coming' ? 'faded' : ''}>
                            {item.status === 'coming' ? 'Coming soon' : 'Read more'}
                        </div> */}
                    </Clickable>
                </div>

            ))}
            {/* <div className="spacer-420"></div> */}
        </div>
    );

    return (
        <div className="bottom">
            <div className="sub-nav">
                <div className="nav">
                    <div className="horizontal">
                        <Clickable scrollThreshold='360'
                            onClick={() => {
                                setActiveCategory('');
                                setActiveItem('')



                                // if window is scrolled past X, scroll to X. Otherwise do nothing
                            }}
                        >
                            Selected Projects
                        </Clickable>    
                        {activeItem || activeCategory ? '\u00A0/\u00A0'  : ""}

                        <Clickable scrollThreshold="360">
                            {activeItem ? `${activeItem.title}` : ""}
                            {activeCategory ? `${activeCategory}` : ""}
                        </Clickable>
                    </div>
                    <div id="head-links">
                        <Clickable scrollThreshold='360'
                            onClick={() => {
                                console.log("clicked");
                                setActiveCategory('');
                                setActiveItem(null);
                            }}
                            className={activeCategory === 'all' ? 'active' : ''}
                        >
                            All
                        </Clickable>
                        <Clickable scrollThreshold='360' scrollType='instant'
                            onClick={() => {
                                setActiveCategory(categories[0]);
                                setActiveItem(null);
                            }}
                            className={activeCategory === categories[0] ? 'active' : ''}
                        >
                            {categories[0]}
                        </Clickable>
                        <Clickable scrollThreshold='360' scrollType='instant'
                            onClick={() => {
                                setActiveCategory(categories[1]);
                                setActiveItem(null);
                            }}
                            className={` ${activeCategory === categories[1] ? 'active' : ''}`}
                        >
                            {categories[1]}
                        </Clickable>
                        <Clickable scrollThreshold='360' scrollType='instant'
                            onClick={() => {
                                setActiveCategory(categories[2]);
                                setActiveItem(null);
                            }}
                            className={` ${activeCategory === categories[2] ? 'active' : ''}`}
                        >
                            {categories[2]}
                        </Clickable>
                    </div>
                </div>
            </div>
            <div className="dynamic-container">
                {activeItem ? renderItemContent(activeItem) : renderIndex()}
            </div>
            <About></About>
        </div>
    );
};

export default DynamicContent;