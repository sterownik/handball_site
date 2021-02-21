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

    const sliderPhotos = slide_photos.map((item) =>
        <SliderItem src={item.path}/>
    )

    let settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
        fade: true,
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
    .slick-arrow {
        width: 5%;
        background-color: ${(props) => props.theme.colorWhite};
        opacity: .2;
        height: 100%;
        transform: none;
        top: 0;
        transition: .5s;
        z-index: 1;
        
        &:before {
            color: ${(props) => props.theme.colorBlackLight};
            font-size: 40px;
        }
        
        &:hover {
            opacity: .3;
        }
        
        &.slick-next {
            right: 0;
        }
        
        &.slick-prev {
            left: 0;
        }
    }

    .slick-slide {
        img {
            width: 100vw;
            height: 70vh;
            object-fit: cover;
            position: relative;
        }
    }
    
    @media (max-width: 720px) {
        .slick-arrow {
            background-color: inherit;
            opacity: .5;
            width: 40px;
        
            &.slick-next {
                right: 10px;
            }
            
            &.slick-prev {
                left: 10px;
            }
            
            &:before {
                color: ${(props) => props.theme.colorWhite};
            }
        }
    
         .slick-slide img {
            height: 30vh;
        }
    }
`;

export default Hero;