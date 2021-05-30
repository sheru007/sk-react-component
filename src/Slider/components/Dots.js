import React from 'react'

function Dots({ slides, activeSlide }) {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "25px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {
                slides.map((slide, i) => {
                    return <Dot key={slide} active={activeSlide === i} />
                })
            }
        </div>
    )
}

const Dot = ({ active }) => {
    const dotCss = {
        padding: "10px",
        marginRight: "5px",
        cursor: "pointer",
        borderRadius: "50%",
        background: `${active ? 'black' : 'white'}`
    }
    return <span style={dotCss} />
}
export default Dots
