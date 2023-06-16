import React from 'react';
import TitleComp from '../../components/Title/TitleComp';
import PortfolioContent from './PortfolioContent';
import './Projects.scss';

export const Projects = () => {
    return (
    <>
        <div className="bd-container" id="portfolio">
            <TitleComp title={"proyectos"} span={"proyectos"}/>
            <PortfolioContent />
        </div>
    </>
    );
};