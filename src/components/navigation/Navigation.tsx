import { Button } from '../ui/button/Button';
import styled from './navigation.module.scss';

export const Navigation = () => {
  return (
    <div className={styled.navigationWrapper}>
      <div className={styled.leftSide}>
        <a className={styled.navigationIconBox}>
          <i className='fa-solid fa-cubes-stacked'></i>
        </a>
      </div>
      <div className={styled.rightSide}>
        <Button isFull={true}>Moje projekty</Button>
      </div>
    </div>
  );
};
