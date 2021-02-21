import React from "react";
import styled from "@emotion/styled";
import SliderItem from "../../atoms/Header/SliderItem";
import { sliderPhotosData } from "../../../redux/reducers/sliderPhotosSlice";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const slide_photos = useSelector(sliderPhotosData);
    console.log(slide_photos);

    const sliderPhotos = slide_photos.map((item) =>
        <SliderItem src={item.path}/>
    )

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };

    return (
        <StyledSlider {...settings}>{sliderPhotos}</StyledSlider>
    )
};

const StyledSlider = styled(Slider)`
    .slick-slide img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
    
    @media (max-width: 720px) {
         .slick-slide img {
            height: 30vh;
        }
    }
`;

export default Hero;