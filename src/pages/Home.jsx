import React from "react";
import Announce from "../components/Announce";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetters from "../components/NewsLetters";
import Product from "../components/Product";
import Slider from "../components/Slider";

const Home = ()=>{
    return(
        <div>
            <Announce/>
            <Navbar/>
            <Slider/>
            <Category/>
            <Product/>
            <NewsLetters/>
            <Footer/>
        </div>
    )
}

export default Home;