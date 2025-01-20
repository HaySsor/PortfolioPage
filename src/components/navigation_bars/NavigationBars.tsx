import styled from './navigation-bars.module.scss'
import * as motion from "motion/react-client"
import { firstBar, secondBar ,thirdBar } from './animation'

type Props = {
    isOpen: boolean,
    openFunction: () => void
}

export const NavigationBars = ({isOpen,openFunction}: Props) => {
  return (
    <div onClick={openFunction} className={styled.navigationBarBox}>
        <motion.div
            className={`${styled.navigationBar}`}
            variants={firstBar}
            animate={isOpen ? 'show' : 'hidden'}
        ></motion.div>
        <motion.div
            className={`${styled.navigationBar}`}
            variants={secondBar}
            animate={isOpen ? 'show' : 'hidden'}
        ></motion.div>
        <motion.div
            className={`${styled.navigationBar}`}
            variants={thirdBar}
            animate={isOpen ? 'show' : 'hidden'}
        ></motion.div>
    </div>
  )
}   