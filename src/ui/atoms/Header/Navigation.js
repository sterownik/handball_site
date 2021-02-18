import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { navigationData } from "../../../redux/reducers/navigationSlice";
import { Link } from "react-router-dom";

const Navigation = () => {
    const navs = useSelector(navigationData);
    console.log(navs);

    const navigationItems = navs.map((item) =>
        <StyledMenuItem key={item.id}><Link to={item.path}>{item.title}</Link>
            {(item.submenu.length > 0) ?
                <StyledSubMenu>
                    {item.submenu.map((itemSub) =>
                        <StyledSubMenuItem>
                            <Link to={itemSub.path}>{itemSub.title}</Link>
                        </StyledSubMenuItem>
                    )}
                </StyledSubMenu>
            : null}
        </StyledMenuItem>
    )

    return (
        <StyledWrapper>
            <StyledFlexBox>
                {navigationItems}
            </StyledFlexBox>
        </StyledWrapper>
    )
};

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
    
    a {
        color: ${(props) => props.theme.colorBlackLight};
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
    }
      
    ul {
        display: none;
    }
    
    &:hover {
        ul {
            display: block;
        }
    }
`;

const StyledSubMenu = styled.ul`
    background-color: ${(props) => props.theme.colorGreenLight};
    border-top: 1px solid ${(props) => props.theme.colorWhite};
    position: absolute;
    list-style: none;
    margin: 20px 0 0;
    padding: 0;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

const StyledSubMenuItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colorWhite};
`;

export default Navigation;