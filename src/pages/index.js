import React, {useState} from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import {homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data";
import HeroSection from '../components/HeroSection';
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";



const Home = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
    setIsOpen(!isOpen);
    };

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    );
};

export default Home;