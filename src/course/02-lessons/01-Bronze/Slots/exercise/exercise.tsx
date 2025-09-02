import classNames from 'classnames';
import { HTMLAttributes } from 'react';

// 👨🏻‍💻 1A - Add two new types of "iconLeft" & "iconRight"
interface IButton extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const buttonClasses =
  'middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex items-center justify-center';

// 👨🏻‍💻 1B - Extract those types out from the props and then add iconLeft above children and iconRight below
// 💄 1C - styling - icon && <span className="mr-2 w-[1.5em] h-[1.5em]">{icon}</span>
export const Button = ({ className, children, ...rest }: IButton) => {
  return (
    <button
      {...rest}
      type="button"
      className={classNames(buttonClasses, className)}
    >
      {children}
    </button>
  );
};

// 👨🏻‍💻 1D - Add iconLeft={IconOne} from the icons folder to the first button
// 👨🏻‍💻 1E - Add iconRight={IconTwo} from the icons folder to the second button
// 👨🏻‍💻 1F - Add iconRight and iconLeft to the third button.
// Check storybook, you should see some black icons.... Why?
// 💅 2A - head over to ./icons/index.tsx
export const Exercise = () => (
  <div className="grid grid-cols-1 gap-4 w-[300px]">
    <Button>Button one</Button>
    <Button>Button two</Button>
    <Button>Button three</Button>
  </div>
);
