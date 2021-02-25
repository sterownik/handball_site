import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
    return(
        <StyledWrapper>
            <StyledFooterContent>&copy; Wojciech Gołda</StyledFooterContent>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
    background-color: ${(props) => props.theme.colorBlackLight};
`;

const StyledFooterContent = styled.span`
    text-align: center;
    padding: 10px 0;
    display: block;
    color: ${(props) => props.theme.colorWhite};
`;

export default Footer;