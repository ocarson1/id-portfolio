import { useState, useEffect } from 'react';
import accessibleComponents from './content/accessible-components.md'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import Clickable from './Clickable';

const DynamicContent = () => {
    // State to track which content should be displayed
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeItem, setActiveItem] = useState(null);
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch(accessibleComponents)
        .then((response) => response.text()).then((text) => {setMarkdownContent(text)})
  // Setting the content from the Markdown file
    }, []);


    // Sample content data - you can replace this with your actual content
    const items = [
        {
            id: 1,
            title: 'Accessible Components',
            date: 'February 2025',
            description: 'Redesigned an accordion menu for _______.',
            category: 'Category 1',
            content: markdownContent,
            status: 'active'
        },
        {
            id: 2,
            title: 'Painting the CIT',
            date: 'February 2025',
            description: 'Proposed a new color palette for a beloved building on campus.',
            category: 'Category 2',
            content: 'This is a filler project for right now. Thanks for stopping by!',
            status: 'coming'
        },
        {
            id: 3,
            title: 'Syllabus Quiz',
            date: 'January 2025',
            description: 'Aced it!',
            category: 'Category 1',
            content: 'This is a filler project for right now. Thanks for stopping by!',
            status: 'coming'
        }
    ];



    // Filter items based on active category
    const filteredItems = activeCategory === 'all'
        ? items
        : items.filter(item => item.category === activeCategory);

    // Render item content when selected
    const renderItemContent = (item) => (
        <div className="item-content">
            <div className="spacer-3em"></div>
    
            {/* <h2>{item.title}</h2>
            <div className="item-date">{item.date}</div> */}
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{item.content}</ReactMarkdown>
            <div className="spacer-420"></div>
            
        </div>
    );

    // Render index/list view
    const renderIndex = () => (
        <div className="index">
            {filteredItems.map(item => (
                <div>
                    <Clickable
                        key={item.id}
                        className="item"
                        onClick={() => setActiveItem(item)}
                    >
                        <div className="item-1">
                            <div className="item-title">{item.title}</div>
                            <div className="item-date">{item.date}</div>
                        </div>
                        <div>{item.description}</div>
                        <div></div>
                        <div className={item.status === 'coming' ? 'faded' : ''}>
                            {item.status === 'coming' ? 'Coming soon' : 'Read more'}
                        </div>
                    </Clickable>
                </div>

            ))}
            <div className="spacer-420"></div>
        </div>
    );

    return (
        <div className="bottom">
            <div className="sub-nav">
                <div className="nav">
                    <div>
                    <Clickable
                        onClick={() => {
                            setActiveCategory('all');
                            setActiveItem('')
                        }}

                    >
                        
                        {activeItem ? `Selected Projects / ${activeItem.title}` : "Selected Projects"}
                    
                    
                    </Clickable>
                    </div>
                    <div id="head-links">
                        <Clickable
                            onClick={() => {
                                console.log("clicked");
                                setActiveCategory('all');
                                setActiveItem(null);
                            }}
                            className={activeCategory === 'all' ? 'active' : ''}
                        >
                            All
                        </Clickable>
                        <Clickable
                            onClick={() => {
                                setActiveCategory('Category 1');
                                setActiveItem(null);
                            }}
                            className={activeCategory === 'Category 1' ? 'active' : ''}
                        >
                            Category 1
                        </Clickable>
                        <Clickable
                            onClick={() => {
                                setActiveCategory('Category 2');
                                setActiveItem(null);
                            }}
                            className={` ${activeCategory === 'Category 2' ? 'active' : ''}`}
                        >
                            Category 2
                        </Clickable>
                    </div>
                </div>
            </div>
            <div className="dynamic-container">
                {activeItem ? renderItemContent(activeItem) : renderIndex()}
            </div>
        </div>
    );
};

export default DynamicContent;