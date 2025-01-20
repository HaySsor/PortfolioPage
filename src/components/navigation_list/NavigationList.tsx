import {Link, NavLink} from 'react-router';
import styled from './navigation-list.module.scss';
import * as motion from 'motion/react-client';
import {navigationListMotion} from './animation';

type navLink = {
  name: string;
  link: string;
  icon?: string;
  customClass?: string;
};

type Props = {
  isOpen: boolean;
};

export const NavigationList = ({isOpen}: Props) => {
  const navLinks: navLink[] = [
    {
      name: 'Strona glowna',
      link: '#',
      icon: 'fa-house-chimney',
    },
    {
      name: 'Projekty',
      link: '#',
      icon: 'fa-diagram-project',
    },
  ];
  return (
    <motion.div
      variants={navigationListMotion}
      initial={'hidden'}
      animate={isOpen ? 'show' : 'hidden'}
      className={styled.navigationListWrapper}>
      <ul className={styled.navigationList}>
        <h3>Strony</h3>
        {navLinks.map((el) => {
          return (
            <NavLink
              to={el.link}
              className={`${el?.customClass} ${styled.navigationItem}`}>
              <div className={styled.navigationIconBox}>
                <i className={`${el.icon} fa-solid`}></i>
              </div>
              <span>{el.name}</span>
            </NavLink>
          );
        })}
      </ul>
      <div className={styled.navigationFooter}>
        <h3>Linki</h3>
        <Link to='https://www.linkedin.com/in/przemys%C5%82aw-hussar/' className={styled.navigationFooterItem}>
          <i className='fa-brands fa-linkedin'></i>
          <span>Linkedin</span>
        </Link>
        <Link to='https://github.com/HaySsor' className={styled.navigationFooterItem}>
        <i className="fa-brands fa-github"></i>
          <span>Github</span>
        </Link>
      </div>
    </motion.div>
  );
};
