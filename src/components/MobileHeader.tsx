import React from "react";
import "../styles/Header/MobileHeader.css"
import "../styles/Header/MobileHamburger.css";

function MobileHeader() {
    return (
        <div>
                <button className="mobile-menu" >
                <span></span>
                <span></span>
                <span></span>
                </button>
        </div>
        
    )
}

export default MobileHeader;