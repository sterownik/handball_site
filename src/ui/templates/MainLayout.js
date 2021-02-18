import React from "react";
import styled from "@emotion/styled";

const MainLayout = () => {
    return (
        <div>
            <StyledTest>
                Wojtek
            </StyledTest>
        </div>
    )
}

const StyledTest = styled.p`
    color: ${(props) => props.theme.colorYellow};
`;

export default MainLayout;