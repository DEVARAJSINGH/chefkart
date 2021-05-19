import React, { Component } from 'react';
import styled from "styled-components";

import search from '../../assets/svg/search.svg';
import './Header.scss';

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

class Header extends Component {

    render() {
        return(
        <header className="chef-kart-header">
            <div className="flex">
                <span className="side-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -53 384 384">
                            <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                            <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                            <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                        </svg>
                </span>
                <span className="header-text">
                    ChefKart
                </span>
            </div>
            <span className="search-button">
                   <Image src={search}/>
            </span>
        </header>);
    }
}

export default Header;