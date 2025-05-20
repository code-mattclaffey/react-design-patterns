import { useState } from 'react';
import { Button } from '@shared/components/Button/Button.component';

interface IComponentProps {
  username: string;
}

export const ComponentOne = (props: IComponentProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = () => {
    setIsAuthenticated(true);
  };

  const onLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <header>
      {/* Other components */}
      {!isAuthenticated && <Button onClick={onLogin}>Login</Button>}
      {isAuthenticated && (
        <>
          <Button onClick={onLogout}>Logout</Button>
          <h1>Welcome {props.username}</h1>
        </>
      )}
    </header>
  );
};
