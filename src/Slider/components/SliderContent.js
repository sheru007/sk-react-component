import React from 'react'
import Slide from './Slide'

function SliderContent(props) {

    const {
        translate,
        transition,
        width
    } = props;
    const styleCss = {
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        height: "100%",
        width: `${width}px`,
        display: "flex",
    }
    return (
        <div style={styleCss}>
            {
                props.slides.map((slide, i) => {
                    return <Slide key={i + 1} content={slide} index = {i+1}/>
                })
            }
        </div>
    )
}

export default SliderContent
