import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { contactData } from "../../../redux/reducers/contactSlice";

const TopFooter = () => {
    const contacts = useSelector(contactData);

    return (
        <>
            <StyledWrapper>
                <StyledFlexBox>
                    <StyledItem>
                      <span>e-mail: </span> {contacts.email}
                    </StyledItem>

                    <StyledItem>
                        <span>telefon: </span> {contacts.telephone}
                    </StyledItem>

                    <StyledItem>
                        <span>adres: </span> {contacts.address}
                    </StyledItem>
                </StyledFlexBox>
            </StyledWrapper>
        </>
    )
};

const StyledWrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colorBlackLight};
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
    padding: 10px 0;
    
    span {
        color: ${(props) => props.theme.colorGrey};
        font-size: 15px;
    }
`;



export default TopFooter;