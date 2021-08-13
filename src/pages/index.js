import React from "react"
import { Link } from 'gatsby';


import Layout from "../components/layout";
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>Hi there. I like things and a lot of stuff too.</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}


export default IndexPage;