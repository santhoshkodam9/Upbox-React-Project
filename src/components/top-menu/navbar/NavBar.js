import React from 'react'
import '../TopMenu.css';
export const NavBar = (props) => {
    var navItem;
    if (props.item.type === "link") {
        navItem = <li data-testid="nav-element"><a href="./" className="nav-link"  >{props.item.title}</a></li>;
    } else {
        navItem = <li data-testid="nav-element"><a href="./" className="nav-link login-btn" >{props.item.title}</a></li>;
    }
    return (<>
        {navItem}
    </>)
}
