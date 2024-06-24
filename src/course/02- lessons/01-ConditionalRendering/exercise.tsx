interface IComponentProps {
  username: string;
}

const buttonClasses = 'middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';

// 1g - 💣 The ignore lint rules can be removed now
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ComponentOne = (props: IComponentProps) => {
  // 1a - 👨🏻‍💻 add a useState that has false as default. Name the variable [isAuthenticated, setIsAuthenticated]

  // 1b - 👨🏻‍💻 create me a onLogin function which setIsAuthenticated to be true

  // 1c - 👨🏻‍💻 create me a onLogout function which setIsAuthenticated to be false

  // 1d - 👨🏻‍💻 if authenticated, return a button called "Logout" with the onClick of onLogout
  // 1e - 👨🏻‍💻 if authenticated, return some text called "Welcome {props.username}"

  // 1f - 👨🏻‍💻 add onClick function onLogin to the button
  return <button type="button" className={buttonClasses}>Login</button>;
};
