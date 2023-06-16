import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import { HomePage, AboutPage, Projects, Contact } from './pages'
import { CustomCursor, Navbar, Footer } from './components';

import { HashLoader } from 'react-spinners';

import './PortfolioApp.scss';
import "./light.scss";



export const PortfolioApp = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2800)
    }, [])

    const sizeLoader = window.innerWidth < 1920 ? 80 : 150

    return (
        <>

        {
            loading 

            ?
            
            <div className="loader">
                <HashLoader 
                size={sizeLoader} 
                color={"#F4ACB7;"}
                loading={loading} 
                />
            </div>

            :

            <>
                <CustomCursor />
                <Navbar />
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/about" element={ <AboutPage /> } />
                    <Route path="/projects" element={ <Projects /> } />
                    <Route path="/contact" element={ <Contact /> } />  
                </Routes> 
                <Footer />  
            </>
        }
             
        </>
    )
}