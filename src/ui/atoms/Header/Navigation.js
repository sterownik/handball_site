import React from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { navigationData } from "../../../redux/reducers/navigationSlice";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { changeFlag, selectFlag } from "../../../redux/reducers/mobileMenuSlice";

const Navigation = () => {
    const navs = useSelector(navigationData);
    const matches = useMediaQuery('(min-width:721px)');
    const navFlag = useSelector(selectFlag);
    const dispatch = useDispatch();

    const navigationItemsMobile = navs.map(item =>
            <div>
                {item.submenu.length > 0 ?
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<span><img src="/icons/arrow-down.png" alt=""/></span>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <p>{item.title}</p>
                        </AccordionSummary>
                            {item.submenu.map((itemSubMenu) =>
                                    <AccordionDetails>
                                    <Link onClick={() => dispatch(changeFlag())} to={itemSubMenu.path}>{itemSubMenu.title}</Link>
                                    </AccordionDetails>
                                )
                            }
                    </Accordion>
                    :
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                       <Link onClick={() => dispatch(changeFlag())} to={item.path}>{item.title}</Link>
                    </AccordionSummary>
                }
            </div>
    )

    const navigationItems = navs.map((item) =>
        <StyledMenuItem key={item.id}><Link to={item.path}>{item.title}</Link>
            {(item.submenu.length > 0) ?
                <StyledSubMenu>
                    {item.submenu.map((itemSub) =>
                        <StyledSubMenuItem key={itemSub.id}>
                            <Link to={itemSub.path}>{itemSub.title}</Link>
                        </StyledSubMenuItem>
                    )}
                </StyledSubMenu>
            : null}
        </StyledMenuItem>
    );

    return (
        <StyledWrapper>
            {matches ?
                <StyledFlexBox>
                    <WrapperImg height={50}><img src="/logs/logo-company.png" alt=""/></WrapperImg>
                    {navigationItems}
                    <WrapperImg height={50}><img src="/logs/logo-company-second.png" alt=""/></WrapperImg>
                </StyledFlexBox>
            :<div>
                <StyledWrapperMobile>
                    <WrapperImg height={50}><img src="/logs/logo-company.png" alt=""/></WrapperImg>
                    <WrapperImg height={50}><img src="/logs/logo-company-second.png" alt=""/></WrapperImg>
                    <WrapperImg onClick={() => dispatch(changeFlag())} height={30}>
                        {!navFlag ? <img src="/icons/menu.png" alt=""/>
                        :
                            <img src="/icons/close.png" alt=""/>
                        }
                    </WrapperImg>
                </StyledWrapperMobile>
                    {navFlag ?
                        <StyledWrapperAccordion>{navigationItemsMobile}</StyledWrapperAccordion>
                        :
                        null
                    }
            </div>
            }

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

const StyledWrapperAccordion = styled.div`
    position: absolute;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.colorBlack};
    
    .MuiAccordionSummary-expandIcon.MuiIconButton-edgeEnd {
        border: none;
        margin-right: 5%;
        
        img {
            width: 20px;
            height: 20px;
        }
    }
    
    .MuiButtonBase-root {
        border-radius: 4px;
        background-color: ${(props) => props.theme.colorGreenLight};
        border-bottom: 1px solid ${(props) => props.theme.colorBlack};
    }
    
    .MuiAccordionSummary-content {
        text-transform: uppercase;
    
        a {
            padding: 16px 0;
            text-decoration: none;
            color: ${(props) => props.theme.colorBlack};
            width: 100%;
        }
    }
    
    .MuiAccordionDetails-root {
        padding: 20px 16px;
        border-bottom: 1px solid ${(props) => props.theme.colorBlack};
    }
    
    .MuiAccordion-root {
        background-color: ${(props) => props.theme.colorGreenLighter};
        
        a {
            color: ${(props) => props.theme.colorBlack};
            text-decoration: none;
            text-transform: uppercase;
            width: 100%;
        }
        
        &.Mui-expanded {
            margin: 0;
        }
    }
`;

const WrapperImg = styled.li`
    position: relative;
    flex-basis: 5%;

    img {
        width: ${(props) => props.height}px;
        height: ${(props) => props.height}px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    
    @media (max-width: 720px) {
        img {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
    }
`;


const StyledWrapperMobile = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const StyledMenuItem = styled.li`
    flex-basis: 18%;
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