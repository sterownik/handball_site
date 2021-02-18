import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Activity from "../molecules/Content/Activity";
import Clubs from "../molecules/Content/Clubs";

const Content = () => {
    return (
        <StyledWrapper>
            <Switch>
                <Route exact path="/" component={Activity} />
                <Route path="/clubs" component={Clubs} />
            </Switch>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
    
`;

export default Content;