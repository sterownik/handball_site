import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { contactData } from "../../../redux/reducers/contactSlice";

const TopFooter = () => {
    const contacts = useSelector(contactData);

    return (
            <StyledWrapper>
                <StyledFlexBox>
                    <StyledItem>
                      <span>e-mail: </span><p>{contacts.email}</p>
                    </StyledItem>
                    <StyledItem>
                        <span>telefon: </span><p>{contacts.telephone}</p>
                    </StyledItem>
                    <StyledItem>
                        <span>adres: </span> <p>{contacts.address}</p>
                    </StyledItem>
                </StyledFlexBox>
            </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colorBlackLight};
    z-index: 1;
    position: relative;
`;

const StyledFlexBox = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const StyledItem = styled.div`
    flex-basis: 30%;
    color: ${(props) => props.theme.colorWhite};
    text-align: center;
    
    p {
        padding: 5px 0;
        margin: 0;
        display: inline;
    }
    
    @media (max-width: 720px) {
        p {
            font-size: 12px;
            display: block;
            padding: 5px;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    
    span {
        color: ${(props) => props.theme.colorGrey};
        font-size: 15px;
        
        @media (max-width: 720px) {
            display: none;
        }
    }
`;

export default TopFooter;