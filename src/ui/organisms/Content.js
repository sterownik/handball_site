import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Activity from "../molecules/Content/Activity";
import Clubs from "../molecules/Content/Clubs";
import Board from "../molecules/Content/Board";
import BoardVoivodeship from "../molecules/Content/BoardVoivodeship";
import Field from "../molecules/Content/Field";
import Referees from "../molecules/Content/Referees";
import Rules from "../molecules/Content/Rules";

const Content = () => {
    return (
        <StyledWrapper>
            <Switch>
                <Route exact path="/" component={Activity} />
                <Route path="/clubs" component={Clubs} />
                <Route path="/board" component={Board} />
                <Route path="/boardvoivo" component={BoardVoivodeship} />
                <Route path="/field" component={Field} />
                <Route path="/referees" component={Referees} />
                <Route path="/rules" component={Rules} />
            </Switch>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
    
`;

export default Content;