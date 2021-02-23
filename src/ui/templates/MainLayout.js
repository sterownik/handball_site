import React from "react";
import styled from "@emotion/styled";
import Header from "../organisms/Header";
import Content from "../organisms/Content";
import { BrowserRouter as Router } from "react-router-dom";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const MainLayout = () => {
    return (
        <>
            <ScrollUpButton style={{border: "none", backgroundColor: 'inherit', zIndex: 2}} />
            <Router basename={process.env.PUBLIC_URL}>
                <Header />
                <Content />
            </Router>
        </>
    )
};

export default MainLayout;