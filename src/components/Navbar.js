    import React from "react"
    import logo from "../images/logo192.jpg"



    function Navbar() {
        return(
            <nav className="navbar">
            <img className="image" src={logo} alt="React Facts" />
            <h2>React Facts</h2>
            <h3 className="nav-item">React Course-Project1 </h3>
            </nav>
        )
    }

    export default Navbar;
