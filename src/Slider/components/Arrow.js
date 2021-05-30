import React from 'react'

function Arrow({ direction, handleClick }) {

    const mainCss = {
        display: "flex",
        position: "absolute",
        top: "50%",
        height: "50px",
        width: "50px",
        justifyContent: "center",
        background: "white",
        borderRadius: "50%",
        cursor: "pointer",
        alignItems: "center",
        transition: "transform ease-in 0.1s",
    }

    if (direction === "right") {
        mainCss['right'] = "25px"
    } else {
        mainCss['left'] = "25px"
    }

    const imgCss = {
        transform: `translateX(${direction === 'left' ? '-2' : '2'}px)`,
        fontSize: "30px",
    }
    return (
        <div
            onClick={handleClick}
            style={mainCss}
        >
            {direction === 'right' ? <p style={imgCss}>&#8594;</p> : <p style={imgCss}>&#8592;</p>}
        </div>
    )
}

export default Arrow
