
import React, { useState, useEffect } from 'react'
import Header from "./components/Header.js"
import "./Global.css"
import "./Home.css"

const Home: React.FC = () => {
    return (
        <div className="home-body">
            <Header />
        </div>
    );
};

export default Home;