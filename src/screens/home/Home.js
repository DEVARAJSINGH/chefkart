import React from 'react';
import Tabs from '../../components/tabs/tabs';
import ProfileCard from '../../components/profileCard/profile-card';

import './Home.scss';
import Calendar from '../../components/calendar/Calendar';

const Home = () => {
    return(
        <div className="Home-page-container">
            <Tabs/>
            <div className="card-container">
                <ProfileCard/>
            </div>
            <div className="calendar-container">
                <Calendar/>
            </div>
            <div className="floating-add-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="448pt" viewBox="0 0 448 448" width="448pt">
                    <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/>
                </svg>
            </div>
        </div>
    );
}

export default Home;