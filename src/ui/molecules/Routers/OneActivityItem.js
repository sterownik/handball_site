import React from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import { controlActivityData } from "../../../redux/reducers/controlActivitiesSlice";

const OneActivityItem = () => {
    const activityData = useSelector(controlActivityData);

    return (
        <StyledWrapper>
            <StyledImg src={activityData.activity.imgSource} alt=""/>
            <StyledTitle>{activityData.activity.title}</StyledTitle>
            <StyledText>{activityData.activity.text}</StyledText>
        </StyledWrapper>
    )
};

const StyledTitle = styled.h2`
    padding: 20px;
    font-family: cursive;
    
    @media (max-width: 720px) {
        text-align: center;
    }
`;

const StyledText = styled.p`
    font-size: 20px;
    padding: 10px;
    text-align: justify;
`;

const StyledWrapper = styled.div`
    width: 60%;
    margin: 3% auto;
    display: flex-inline;
    position: relative;
    
    @media (max-width: 720px) {
        width: 90%;
        padding-top: 20px;
    }
    
    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${(props) => props.theme.colorGreenLight};
        top: 0;
        z-index: -1;
        border-radius: 15px;
    }
`;

const StyledImg = styled.img`
    float: left;
    margin: 20px;
    width: 55%;
    box-shadow: 0 10px 10px -5px;
    
    @media (max-width: 720px) {
        width: 80%;
        float: none;
        margin: 0 auto;
        display: block;
    }
`;

export default OneActivityItem;