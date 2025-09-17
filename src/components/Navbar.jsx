import { useState } from "react";
import "./Navbar.css"; 


function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
     return (
        <nav className="navbar">
            {/*logo*/}
            <div className="logo">Pronavbar</div>
            {/*links*/}
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><button className="cta">Login</button></li>
            </ul>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                 ☰
            </div>
            
        </nav>
     )
}

export default Navbar;