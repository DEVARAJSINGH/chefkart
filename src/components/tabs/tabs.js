import React, { useState, useCallback } from 'react';
import './tabs.scss';

const Tabs = (props) => {
    const [tabs, setTabs] = useState([
        {
            name: 'Attendance',
            isActive: true
        },
        {
            name: 'Subscription',
            isActive: false
        }
    ]);

    const tabChange = useCallback((index) => {
        const tempTabs = [...tabs];
        tempTabs.forEach((tab, i)=> {
            if(tab.isActive && i !== index) {
                tempTabs[i].isActive = false;
            }
            if(i === index) {
                tempTabs[i].isActive = true;
            }
        });
        setTabs(tempTabs);
    });
    return(
        <div className='tabs-container'>
            <ul className="tabs-wrapper">
                {
                    tabs.map( (tab, index) => (
                        <li key={tab.name} className={ `tab ${tab.isActive ? " active" : ""}`} 
                        onClick={()=>tabChange(index)}
                        >
                            {tab.name}
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    );
}

export default Tabs;