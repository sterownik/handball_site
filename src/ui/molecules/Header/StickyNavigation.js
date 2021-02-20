import React from "react";
import styled from "@emotion/styled";
import Navigation from "../../atoms/Header/Navigation";
import TopFooter from "../../atoms/Header/TopFooter";

const StickyNavigation = () => {
    return (
        <StyledNaviationWrapper>
            <Navigation />
        </StyledNaviationWrapper>
    )
};

const StyledNaviationWrapper = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 0;
`;

export default StickyNavigation;