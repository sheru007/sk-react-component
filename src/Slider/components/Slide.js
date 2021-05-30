import React from 'react'

function Slide({ content, index }) {

    const styleCss = {
        height: "100%",
        width: "100%",
        backgroundImage: `url(${content})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }
    return (
        <div style={styleCss}>
        </div>
    )
}

export default Slide
