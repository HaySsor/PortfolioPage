import { Hero } from './hero/Hero'
import styled from './main.module.scss'


export const Main = () => {
  return (
    <div className={styled.mainWrapper}>
      <Hero />
    </div>
  )
}