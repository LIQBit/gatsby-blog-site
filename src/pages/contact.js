import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Head from '../components/head';


const contactPage = () => {
    return(
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>CONTACT US</h1>
                <p>ph: +44 7976 210101
                    <br />
                    email: survivingdecember@outlook.com
                    <br />
                    <a href="https://twitter.com" target="blank">twitter</a>
                </p>
            </Layout>
        </div>
    )
}

export default contactPage;