import styled from './button.module.scss'
import { ReactElement } from 'react'

type Props = {
    onClick? : () => void,
    isFull: boolean
    children?: ReactElement | string
}

export const Button = ({onClick, isFull, children}: Props) => {
  return (
    <button onClick={onClick} 
    className={`${styled.systemButton} ${isFull ? styled.systemFullButton : styled.systemBorderButton}`}>
      {children}
    </button>
  )
}