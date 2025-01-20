import styled from './icon.module.scss'

type Props = {
    icon : string
    iconSize? : string,
    iconBoxClass?: string
}

export const Icon = ({icon,iconBoxClass,iconSize}: Props) => {
  return (
    <div className={`${styled.iconBox} ${iconBoxClass}`}>
        <i style={{ fontSize: iconSize }}className={`fa-solid ${icon}`}></i>
    </div>
  )
}