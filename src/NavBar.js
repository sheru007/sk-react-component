import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    const linkCss = {
        padding: "2px 5px"

    }
    return (
        <div style={{
            width: "100%",
            height: "50px",
            background: "darkgray",
            color: "white",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
            
                <div  style={linkCss}><Link to="/">ToDo-With-D&D</Link></div>
                <div style={linkCss} ><Link to="/slider">Slider</Link></div>
            
        </div>
    )
}

export default NavBar
