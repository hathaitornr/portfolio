import React from 'react';
import { Header, Footer } from '..';
const Layout = props => {
    return (
        <div>
            <Header/>
            <div>
                {props.children}
            </div>
            <br></br>
            <Footer/>
        </div>
    )
};

export default Layout;