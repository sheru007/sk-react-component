import React, { useState } from 'react'
import './styles.css'
import image01 from './img/img1.jpg';
import image02 from './img/img2.jpg';
import image03 from './img/img3.jpg';
import image04 from './img/img4.jpg';
import image05 from './img/img5.jpg';
import image06 from './img/img6.jpg';
import arrowPath from './img/arrow.png'

const imageArray = [image01, image02, image03, image04, image05, image06]

function ImagePopupEffect() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const updateImage = (index) => {
        // let path = imageArray[index]
        // TODO  --> update name and update current url and link in navbar
        setCurrentIndex(index)
    }

    const handleImageClick = (index) => {
        updateImage(index)
        const popup = document.querySelector('.popup');
        popup.classList.toggle('active');
    }

    const handleOnCloseBtn = () => {
        const popup = document.querySelector('.popup');
        popup.classList.toggle('active');
    }

    const handleLeftClick = () => {
        if (currentIndex > 0) {
            updateImage(currentIndex - 1);
        }
    }

    const handleRightClick = () => {
        if (currentIndex < imageArray.length - 1) {
            updateImage(currentIndex + 1);
        }
    }

    return (
        <div className="container">
            <div className="popup">
                {/* top bar */}
                <div className="top-bar">
                    <p className="image-name">img1.png</p>
                    <span onClick={handleOnCloseBtn} className="close-btn"></span>
                </div>
                {/* left and right arrow */}
                <button onClick={handleLeftClick} className="arrow-btn left-arrow"><img src={arrowPath} alt="" /></button>
                <button onClick={handleRightClick} className="arrow-btn right-arrow"><img src={arrowPath} alt="" /></button>
                {/* images */}
                <img src={imageArray[currentIndex]} className="large-image" alt={currentIndex + 1} />
                {/* image number */}
                <h1 className="index">{currentIndex + 1 < 10 ? `0${currentIndex + 1}` : `${currentIndex + 1}`}</h1>
            </div>
            <div className="gallery">
                {
                    imageArray.map((imagePath, index) => {
                        return (
                            <div className="gallery-image">
                                <img
                                    key={index}
                                    src={imagePath}
                                    alt={imagePath}
                                    className="image"
                                    onClick={() => handleImageClick(index)}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImagePopupEffect

// {
//     const images = [...document.querySelectorAll('.image')];

//     // popup

//     const popup = document.querySelector('.popup');
//     const closeBtn = document.querySelector('.close-btn');
//     const imageName = document.querySelector('.image-name');
//     const largeImage = document.querySelector('.large-image');
//     const imageIndex = document.querySelector('.index');
//     const leftArrow = document.querySelector('.left-arrow');
//     const rightArrow = document.querySelector('.right-arrow');

//     let index = 0; // will track our current image;

//     images.forEach((item, i) => {
//         item.addEventListener('click', () => {
//             updateImage(i);
//             popup.classList.toggle('active');
//         })
//     })

//     const updateImage = (i) => {
//         let path = `https://github.com/kunaal438/image-popup/blob/master/img/img${i + 1}.png?raw=true`;
//         largeImage.src = path;
//         imageName.innerHTML = path;
//         imageIndex.innerHTML = `0${i + 1}`;
//         index = i;
//     }

//     closeBtn.addEventListener('click', () => {
//         popup.classList.toggle('active');
//     })

//     leftArrow.addEventListener('click', () => {
//         if (index > 0) {
//             updateImage(index - 1);
//         }
//     })

//     rightArrow.addEventListener('click', () => {
//         if (index < images.length - 1) {
//             updateImage(index + 1);
//         }
//     })
// }