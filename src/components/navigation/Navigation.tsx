import {useState} from 'react';
import {NavigationBars} from '../navigation_bars/NavigationBars';
import styled from './navigation.module.scss';
import { NavigationList } from '../navigation_list/NavigationList';

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () =>{
    setMenuOpen((prevVale) => !prevVale)
  }

  return (
    <div className={styled.navigationWrapper}>
      <div className={styled.leftSide}>
        <a className={styled.navigationIconBox}>
          <i className='fa-solid fa-cubes-stacked'></i>
        </a>
      </div>
      <div className={styled.rightSide}>
        <NavigationBars isOpen={menuOpen} openFunction={handleOpenMenu} />
      </div>
      <NavigationList isOpen={menuOpen} />
    </div>
  );
};
