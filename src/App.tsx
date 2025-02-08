import {Outlet} from 'react-router';
import {Navigation} from './components/navigation/Navigation';
import {SkillsProvider} from './context/SkillsContext';

export const App = () => {
  return (
    <>
      <Navigation />
      <SkillsProvider>
        <Outlet />
      </SkillsProvider>
    </>
  );
};
