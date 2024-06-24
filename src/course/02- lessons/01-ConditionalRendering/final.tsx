import { useState } from "react";

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
      {!isAuthenticated && (
        <button type="button" onClick={onLogin}>
          Login
        </button>
      )}
      {isAuthenticated && (
        <>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
          <h1>Welcome {props.username}</h1>
        </>
      )}
    </header>
  );
};
