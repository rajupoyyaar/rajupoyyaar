import React from "react"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="nav-container">
            <div>
                <h2 style={{color: "white"}}>Raju Poyyaar</h2>
            </div>
            <div>
                <Link to="/" className="link">Home</Link>
                <Link to="/projects" className="link">Projects</Link>
            </div>
        </div>
    )
}

export default Navbar