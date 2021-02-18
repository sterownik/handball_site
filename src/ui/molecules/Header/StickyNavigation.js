import React from "react";
import styled from "@emotion/styled";
import Navigation from "../../atoms/Header/Navigation";
import TopFooter from "../../atoms/Header/TopFooter";

const StickyNavigation = () => {
    return (
        <StyledNaviationWrapper>
            <TopFooter />
            <Navigation />
        </StyledNaviationWrapper>
    )
};

const StyledNaviationWrapper = styled.div`
    
`;

export default StickyNavigation;