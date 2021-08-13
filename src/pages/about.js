import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import Head from '../components/head';


const aboutPage = () => {
    return(
        <div>
            <Layout>
                <Head title="About" />
                <h1>About Me</h1>
                <p>Here is some text that is all about me.<Link to="/contact">Contact me!</Link> There will be more text here later.</p>
            </Layout>
        </div>
    )
}

export default aboutPage;