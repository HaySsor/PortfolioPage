import styled from './skill-item.module.scss'
import type { Skill } from '../../../types/Skill.ts'


type Props = {
    skill : Skill
}

export const SkillItem = ({skill}: Props) => {
  return (
    <div className={styled.skillItem}>
        <i className={`${skill.icon} ${styled.skillIcon}`}></i>
        <span> {skill.name} </span>
    </div>
  )
}
