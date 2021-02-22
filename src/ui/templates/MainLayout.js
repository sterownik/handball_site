import React from "react";
import styled from "@emotion/styled";
import Header from "../organisms/Header";
import Content from "../organisms/Content";
import { BrowserRouter as Router } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Router basename={process.env.PUBLIC_URL}>
                <Header />
                <Content />
            </Router>
        </>
    )
};

export default MainLayout;