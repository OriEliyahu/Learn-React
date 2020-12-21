import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeTitle, setActiveTitle] = useState(null);

    const onTitleClick = (index) => {
        if (index === activeTitle)
            setActiveTitle(null);
        else
            setActiveTitle(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeTitle ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div className={"title " + active} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon" />
                    {item.title}
                </div>
                <div className={"content " + active}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;

