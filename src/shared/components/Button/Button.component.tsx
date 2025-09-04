import classNames from 'classnames';
import { HTMLAttributes } from 'react';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
}

const buttonClasses =
  'middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none';

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
