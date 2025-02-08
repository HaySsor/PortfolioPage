import styled from './hero.module.scss'
import {SkillItem} from "../skill-item/SkillItem.tsx";
import {useContext} from "react";
import {SkillsContext} from "../../../context/SkillsContext.tsx";
// type Props = {}

export const Hero = () => {
    const {skillsList} = useContext(SkillsContext)

  return (
    <div className={styled.heroWrapper}>
        <div className={styled.helloSide}>
            <div className={styled.imageCircle}>
                <img src='/hero.png'></img>
            </div>
            <h1>Hello! Nazywam sie Przemek</h1>
        </div>
        <div className={styled.infoSide}>
            <div className={styled.infoSideTop} >
                <h3>Front-End Devloperem </h3>
                <span>Pasjonata samouk z doświadczenem w tworzeniu stron internetowych oraz aplikacji webowych</span>
                <div className={styled.skillsBox}>
                    {skillsList.map(el => (
                        <SkillItem skill={el} key={el.id} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}