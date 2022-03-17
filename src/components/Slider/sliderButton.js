import React from "react";
import "./index.css";
import { MdOutlineArrowBackIosNew as Prev, MdOutlineArrowForwardIos as Next } from 'react-icons/md'

export default function BtnSlider({ direction, moveSlide }) {

  return (
    <>
        {direction === "next" ? <Next onClick={moveSlide} className="slider-btn slider-next"/> : <Prev onClick={moveSlide} className="slider-btn slider-prev"/>}
    </>
  );
}