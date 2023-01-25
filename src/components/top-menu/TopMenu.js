/* eslint-disable no-lone-blocks */
import React from 'react'
import './TopMenu.css';
import { NavBar } from './navbar/NavBar';

export const TopMenu = () => {

    const menudata =
        [
            {
                type: "link",
                title: "This Month",
            },
            {
                type: "link",
                title: "SKIN",
            },
            {
                type: "link",
                title: "HAIR",
            },
            {
                type: "link",
                title: "BATH",
            },
            {
                type: "link",
                title: "SALE",
            },
            {
                type: "button",
                title: "LOGIN >",
            }
        ]


    return (<>
        <div className="banner">
            <div data-testid="navbar" className="navbar">
                <img src="./assets/logo.svg" className="logo desktop-menu"  alt="logo" />
                <ul className="desktop-menu" >
                    {
                        menudata.map((item, index) => <NavBar key={index} item={item} index={index} />)
                    }
                </ul>
            </div>
            <nav className="navbar navbar-expand-md navbar-light mobile-menu" >
                <img src="../../assets/logo.svg" alt='logo' />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style={{padding:2, border:"none" , outline:"none"}}>
                    <span className="navbar-toggler-icons">
                        <img src="./assets/hamburger.svg" alt='humberger' />
                    </span>
                    <span className="my-1 mx-2 close" style={{ color: '#212529' }} >
                        <img src="./assets/hamburger-close.svg" alt='humbergerclse' />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav" >
                        {
                            menudata.map((item, index) => <NavBar key={index} item={item} index={index} />)
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </>)

}
