import { Welcome } from './Welcome.jsx';
import { TechStack } from './TechStack.jsx';

export const Overview = () => {
  return (
    <>
      <div className="overview-container border mt-8 w-full lg:mr-20 md:mr-5 lg:ml-10 md:ml-5 py-3 px-4 rounded-lg">
        <Welcome />
        <TechStack />
      

      </div>
    </>
  );
};
