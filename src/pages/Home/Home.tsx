import React from 'react';

import Header from '../../components/Header/Header';
import Stories from '../../containers/Stories/Stories';
import Feed from "../../containers/Feed/Feed";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Stories />
            <Feed />
            <Footer />
        </>
    )
}

export default Home;