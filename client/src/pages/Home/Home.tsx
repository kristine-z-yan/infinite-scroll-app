import React from 'react';

import Header from '../../components/Header/Header';
import Stories from '../../features/stories/Stories';
import Posts from "../../features/posts/Posts";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Stories />
            <Posts page='home'/>
            <Footer />
        </>
    )
}

export default Home;