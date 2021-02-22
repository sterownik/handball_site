import React from "react";
import styled from "@emotion/styled";
import { Route, Switch } from "react-router-dom";

import Activity from "../molecules/Routers/Activity";
import Clubs from "../molecules/Routers/Clubs";
import Board from "../molecules/Routers/Board";
import BoardVoivodeship from "../molecules/Routers/BoardVoivodeship";
import Field from "../molecules/Routers/Field";
import Referees from "../molecules/Routers/Referees";
import Rules from "../molecules/Routers/Rules";

const Content = () => {
    return (
        <StyledWrapper>
            <Switch>
                <Route path="/clubs" component={Clubs} />
                <Route path="/board" component={Board} />
                <Route path="/boardvoivo" component={BoardVoivodeship} />
                <Route path="/field" component={Field} />
                <Route path="/referees" component={Referees} />
                <Route path="/rules" component={Rules} />
                <Route exact path="/" component={Activity} />
            </Switch>
        </StyledWrapper>
    )
};

const StyledWrapper = styled.div`
    
`;

export default Content;