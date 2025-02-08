import {Experience} from './experience/Experience';
import {Hero} from './hero/Hero';
import styled from './main.module.scss';
import {AboutMe} from "./about-me/AboutMe.tsx";

export const Main = () => {
    return (
        <div className={styled.mainWrapper}>
            <Hero/>
            <AboutMe/>
            <Experience/>
        </div>
    );
};
