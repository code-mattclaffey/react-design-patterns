import { Button } from '../../../shared/components/Button/Button.component';

interface IComponentProps {
  username: string;
}

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
  return <Button>Login</Button>;
};
