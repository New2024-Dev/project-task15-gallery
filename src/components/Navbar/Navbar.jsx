import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import React, { useState } from "react";

function Navbar(){
    const [isSlideshowActive, setSlideshowActive] = useState(false);
    const navigate = useNavigate();

    const handleSlideshowToggle = () => {
        if (isSlideshowActive) {
            navigate('/'); // يرجع لصفحة المعرض الأصلية
        } else {
            navigate('/startslideshow/1/Starry Night'); // يبدأ العرض من أول صورة
        }
        setSlideshowActive(!isSlideshowActive);
    };

    return(
        <nav>
            <ul>
                <li>
                <Link to="/" id="gall">galleria</Link>
                </li>
                <li>
                <button onClick={handleSlideshowToggle} id="start">
                        {isSlideshowActive ? "STOP SLIDESHOW" : "START SLIDESHOW"}
                    </button>
          </li>
            </ul>
        </nav>
    )
} 

export default Navbar