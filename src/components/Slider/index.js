import React, { useState, useEffect } from 'react'
import './index.css'
import SliderBtn from './sliderButton'
import sliderData from './sliderData'

export default function Slider() {
    const [isHovered, setIsHovered] = useState(false)
    const [slideIndex, setSlideIndex] = useState(1)
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const handleHover = () => {
        setIsHovered(!isHovered)
    }

    const nextSlide = () => {
        if(slideIndex !== sliderData.length){
            setSlideIndex(slideIndex + 1)
        } 
        // make it so that if slideIndex > the amount of items in sliderData, slideIndex resets back to 1
        else if (slideIndex === sliderData.length){
            setSlideIndex(1)
        }
    }

    const onClickRedirect = () => {
        if(slideIndex === 1) {
            window.location.href = 'https://jg-instant-messenger.herokuapp.com/'
        } else if (slideIndex === 2) {
            window.location.href = 'https://whispering-thicket-43771.herokuapp.com/'
        } else if (slideIndex === 3) {
            window.location.href = 'https://afternoon-eyrie-60513.herokuapp.com/'
        } else if (slideIndex === 4) {
            window.location.href = 'https://potluck-party-event.herokuapp.com/'
        } else if (slideIndex === 5) {
            window.location.href = 'https://my-books-1748.herokuapp.com/'
        } else if (slideIndex === 6) {
            window.location.href = 'https://joshgumperz.github.io/weather-tracker/'
        } else {
            window.location.href = 'https://joshgumperz.github.io/Password-Generator/'
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(sliderData.length)
        }
    }

    useEffect(() => {
      // had to rewrite the Next function for the setInterval because for some reason, just calling the function Next() was causing weird bugs
        if (!isHovered) {
            const interval = setInterval(() => {
                if(slideIndex !== sliderData.length){
                    setSlideIndex(slideIndex + 1)
                } 
                else if (slideIndex === sliderData.length){
                    setSlideIndex(1)
                }
            }, 5000);
            return () => clearInterval(interval);
        } else { 
            return
        }
    });
    // allow the user to navigate to a specific slide directly using dots
    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="slider-container" onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
            {/* map through sliderData, which should always be equal length to the amount of photos we want to show, the images all have the same name, except with an incrementing number on the end, so we just pass in the index for the number at the end and we'll be able to target each individual photo we want to display */}
            {sliderData.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slider-slide slider-activeAnim" : "slider-slide"} 
                    >
                        <div onClick={onClickRedirect} className={`slider-overlay ${isHovered ? 'slider-hidden' : ''}`}></div>
                        <img 
                        onClick={onClickRedirect} 
                        // use different sized images to fit different screen sizes
                        src={width > 1200 ? `${process.env.PUBLIC_URL}/assets/Images/Fullsize/Img${index + 1}.png`  
                        : width <= 1200 && width > 500 ? `${process.env.PUBLIC_URL}/assets/Images/Midsize/Img${index + 1}.png`
                        : `${process.env.PUBLIC_URL}/assets/Images/Mobilesize/Img${index + 1}.png`}
                        alt="slide-show-images"
                        className='slider-slideImg'
                        />
                        <div onClick={onClickRedirect} className='slider-titleTextWrapper'>
                            <div onClick={onClickRedirect} className='slider-titleTextContainer'>
                                <p className={`slider-titleText ${isHovered ? 'slider-hidden' : ''}`}>Visit The</p>
                                <p className={`slider-titleText ${isHovered ? 'slider-hidden' : ''}`}>Projects</p>
                                <p className={`slider-titleText ${isHovered ? 'slider-hidden' : ''}`}>That I've </p>
                                <p className={`slider-titleText ${isHovered ? 'slider-hidden' : ''}`}>Worked</p>
                                <p className={`slider-titleText ${isHovered ? 'slider-hidden' : ''}`}>On</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            {/* pass a direction to SliderBtn when we call it so we can figure out which button we want to render, also pass in the nextSlide and prevSlide functions so we can use them on click */}
            <SliderBtn moveSlide={nextSlide} direction={"next"} />
            <SliderBtn moveSlide={prevSlide} direction={"prev"}/>

            <div className="slider-dotContainer">
                {/* basically just map through the length of sliderData and create a dot for each item in sliderData */}
                {Array.from({length: sliderData.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    // applying multiple conditional classNames, do it in an array then do .join to convert back to a string
                    className={[slideIndex === index + 1 ? "slider-dot slider-activeDot" : "slider-dot", isHovered ? 'slider-transparent' : ''].join(" ")}
                    ></div>
                ))}
            </div>
        </div>
    )
}