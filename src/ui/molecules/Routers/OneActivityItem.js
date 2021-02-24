import React from "react";
import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import { controlActivityData } from "../../../redux/reducers/controlActivitiesSlice";

const OneActivityItem = () => {
    const activityData = useSelector(controlActivityData);

    return (
        <StyledWrapper>{activityData.activity.id}</StyledWrapper>
    )
};

const StyledWrapper = styled.div`
    background-color: red;
    width: 70%;
    margin: 3% auto;
`;

export default OneActivityItem;