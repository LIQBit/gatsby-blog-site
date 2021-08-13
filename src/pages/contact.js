import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Head from '../components/head';


const contactPage = () => {
    return(
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Contact Details</h1>
                <p>ph: 444-4444
                    <br />
                    email: man@man.com
                    <br />
                    <a href="https://twitter.com" target="blank">twitter</a>
                </p>
            </Layout>
        </div>
    )
}

export default contactPage;