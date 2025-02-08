import {createContext, ReactNode, useState} from 'react';
import type {Skill} from '../types/Skill';

type SkillsContextType = {
  skillsList: Skill[];
  selectSkill : Skill | null
  handleSetSkill: (el : Skill) => void
};

export const SkillsContext = createContext<SkillsContextType>({
  skillsList: [],
  selectSkill : null,
  handleSetSkill: () => {},
});

type PropsProvider = {
  children: ReactNode;
};

export const SkillsProvider = ({children}: PropsProvider) => {
  const [selectSkill, setSelectSkill] = useState<Skill | null>(null);


  const handleSetSkill = (el: Skill) => {
    setSelectSkill(el)
  }

  const skillsList: Skill[] = [
    {name: 'HTML', id: 1, icon: "fa-brands fa-html5"},
    {name: 'CSS', id: 2, icon: "fa-brands fa-css3-alt"},
    {name: 'SCSS', id: 3, icon: "fa-brands fa-sass"},
    {name: 'JavaScript', id: 4, icon: "fa-brands fa-square-js"},
    {name: 'TypeScript', id: 5, icon: "fa-solid fa-code"},
    {name: 'Vue', id: 5, icon: "fa-brands fa-vuejs"},
    {name: 'React', id: 5, icon: "fa-brands fa-react"},
    {name: 'Cypress', id: 5, icon: "fa-solid fa-code"},
  ];

  const value = {skillsList, selectSkill, handleSetSkill}
  return (
      <SkillsContext.Provider value={value}>
        {children}
      </SkillsContext.Provider>
  );
};
