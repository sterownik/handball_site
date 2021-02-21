import React from "react";
import styled from "@emotion/styled";

const SliderItem = (props) => {
    return (
        <StyledWrapper>
            <img src={props.src} alt=""/>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
    position: relative;
    
    &:after {
        content: "";
        background-color: ${(props) => props.theme.colorBlack};
        position: absolute;
        opacity: .3;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    &:hover {
        &:after {
            transition: .5s;
            opacity: 0;
        }
    }
`;

export default SliderItem;


