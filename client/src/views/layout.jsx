import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import '../styles/layout.css'
console.log('7')
const Layout = (props) => {
    return (
        <>
            <Header />
            <div className="children">{props.children}</div>
            <Footer />
        </>
    );
};

export default Layout;