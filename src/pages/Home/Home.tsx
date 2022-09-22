import React from 'react';

import Header from '../../components/Header/Header';
import Stories from '../../features/stories/Stories';
import Feed from "../../features/feed/Feed";
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