import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { IconOne, IconTwo } from '../icons';

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode | React.ReactNode[];
}

const buttonClasses =
  'middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex items-center justify-center';

export const Button = ({
  className,
  children,
  iconLeft,
  iconRight,
  ...rest
}: IButton) => {
  return (
    <button
      {...rest}
      type="button"
      className={classNames(buttonClasses, className)}
    >
      {iconLeft && (
        <span className="mr-2 w-[1.5em] h-[1.5em]">{iconLeft}</span>
      )}
      {children}
      {iconRight && (
        <span className="ml-2 w-[1.5em] h-[1.5em]">{iconRight}</span>
      )}
    </button>
  );
};

export const Final = () => (
  <div className="grid grid-cols-1 gap-4 w-[300px]">
    <Button iconLeft={IconOne}>Button one</Button>
    <Button iconRight={IconTwo}>Button two</Button>
    <Button iconLeft={IconOne} iconRight={IconTwo}>
      Button three
    </Button>
  </div>
);
