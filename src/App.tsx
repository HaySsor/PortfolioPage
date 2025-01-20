import {Outlet} from 'react-router';
import {Navigation} from './components/navigation/Navigation';

export const App = () => {
  return (
    <>
      <Navigation />
      <div className='app-wrapper' >
        <Outlet />
      </div>
    </>
  );
};
