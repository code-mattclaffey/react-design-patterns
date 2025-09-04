import { Analytics } from '@vercel/analytics/react';
import { LandingPage } from './app/LandingPage';

const App = () => {
  return (
    <>
      <LandingPage />
      <Analytics />
    </>
  );
};

export default App;
