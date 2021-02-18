import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { navigationData } from "../../../redux/reducers/navigationSlice";

const Navigation = () => {
    const navs = useSelector(navigationData);
    console.log(navs);

    const navigationItems = navs.map((item) =>
        <StyledMenuItem key={item.id}><a href="">{item.title}</a>
            {(item.submenu.length > 0) ?
                <StyledSubMenu>
                    {item.submenu.map((itemSub) =>
                        <StyledSubMenuItem>
                            <a href="">{itemSub.title}</a>
                        </StyledSubMenuItem>
                    )}
                </StyledSubMenu>
            : null}
        </StyledMenuItem>
    );

    return (
        <StyledWrapper>
            <StyledFlexBox>
                {navigationItems}
            </StyledFlexBox>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colorGreenLight};
`;

const StyledFlexBox = styled.ul`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
`;

const StyledMenuItem = styled.li`
    flex-basis: 20%;
    padding: 20px 0;
    text-align: center;
    position: relative;
`;

const StyledSubMenu = styled.ul`
    position: absolute;
    list-style: none;
    padding: 20px 0 0;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledSubMenuItem = styled.li`
    color: red;
    padding: 10px;
`;

export default Navigation;