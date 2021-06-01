import React, { useState, useEffect, useRef } from 'react'
import SliderContent from './components/SliderContent';
import Arrow from './components/Arrow'
import Dots from './components/Dots'

function Slider(props) {
    const {
        slides,
        autoPlay
    } = props

    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    const getWidth = () => window.innerWidth;
    const [state, setState] = useState({
        translate: getWidth(),
        transition: 0.45,
        activeSlide: 0,
        _slides: [lastSlide, firstSlide, secondSlide]
    })
    const { translate, transition, activeSlide, _slides } = state;

    const autoPlayRef = useRef()
    const transitionRef = useRef()
    const resizeRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
        resizeRef.current = handleResize
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        const smooth = () => {
            transitionRef.current()
        }

        const resize = () => {
            resizeRef.current()
        }

        const interval = setInterval(play, autoPlay * 1000)
        const transitionEnd = window.addEventListener('transitionend', smooth)
        const onResize = window.addEventListener('resize', resize)

        return () => {
            clearInterval(interval)
            window.removeEventListener('transitionend', transitionEnd)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.45 })
    }, [transition])

    const sliderCss = {
        position: "relative",
        height: "92vh",
        width: "100vw",
        margin: "0 auto",
        overflow: "hidden"
    }

    const nextSlide = () => {

        setState({
            ...state,
            translate: translate + getWidth(),
            activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
        })
    }

    const prevSlide = () => {

        setState({
            ...state,
            translate: 0,
            activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
        })
    }

    const smoothTransition = () => {
        let _slides = []

        // We're at the last slide.
        if (activeSlide === slides.length - 1)
            _slides = [slides[slides.length - 2], lastSlide, firstSlide]
        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

        setState({
            ...state,
            _slides,
            transition: 0,
            translate: getWidth()
        })
    }

    const handleResize = () => {
        setState({ ...state, translate: getWidth(), transition: 0 })
    }

    return (
        <div style={sliderCss}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length}
                slides={_slides}
            />
            {
                !autoPlay && (
                    <>
                        <Arrow direction="left" handleClick={prevSlide} />
                        <Arrow direction="right" handleClick={nextSlide} />
                    </>
                )
            }

            <Dots slides={slides} activeSlide={activeSlide} />
        </div>
    )
}

export default Slider
