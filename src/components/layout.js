import React from 'react';

import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import*as layoutStyles from './layout.module.scss';

import bandpic from '/static/images/bandwebsitepic.png';


const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.container}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;