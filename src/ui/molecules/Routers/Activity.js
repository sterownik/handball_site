import React from "react";
import ActivityItem from "../../atoms/activities/ActivityItem";
import { activitiesData } from "../../../redux/reducers/activitiesSlice";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/source/animate.css";

const Activity = () => {
    const activities = useSelector(activitiesData);
    console.log(activities);

    const activitiesList = activities.map((item) =>
        <ScrollAnimation animateIn='fadeIn'>
            <ActivityItem activity={item} />
        </ScrollAnimation>
    );

    return (
        <div>
            <StyledTitle>Aktualności</StyledTitle>
            {activitiesList}
        </div>
    )
};

const StyledTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-family: inherit;
    color: ${(props) => props.theme.colorBlackLight};
    font-weight: 700;
    font-size: 30px;
    position: relative;
    display: inline-block;
    margin: 20px auto;
    left: 50%;
    transform: translate(-50%);
    
    &:after {
        position: absolute;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        content: "";
        height: 1px;
        background-color: ${(props) => props.theme.colorBlackLight};
        bottom: -10%;
    }
`;

export default Activity;