import React from 'react';
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

const AppWrapper = ({Component}) => {
    return (
        <>
            <Header />
            {Component}
            <Footer />
        </>
    )
}

export default AppWrapper;