import React from 'react';
import { Link } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import MessageRow from '../components/MessageRow';
import SectionFour from '../components/SectionFour';
import SectionFive from '../components/SectionFive';
import Footer from '../components/Footer';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout className="container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <MessageRow />
        <SectionFive />
        <SectionFour />
        <Footer />
      </Layout>
    );
  }
}
