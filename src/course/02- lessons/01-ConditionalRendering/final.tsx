import { useState } from "react";

interface IComponentProps {
  username: string;
}

const buttonClasses = 'middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';


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
        <button type="button" className={buttonClasses} onClick={onLogin}>
          Login
        </button>
      )}
      {isAuthenticated && (
        <>
          <button type="button" className={buttonClasses} onClick={onLogout}>
            Logout
          </button>
          <h1>Welcome {props.username}</h1>
        </>
      )}
    </header>
  );
};
