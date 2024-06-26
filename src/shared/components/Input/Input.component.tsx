import classNames from 'classnames';
import { HTMLAttributes } from 'react';

interface IInput extends HTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  required?: boolean;
  hasError?: boolean;
}

export const Input = ({
  name,
  id,
  required,
  hasError,
  ...rest
}: IInput) => (
  <input
    {...rest}
    name={name}
    id={id}
    required={required}
    className={classNames(
      'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
      { 'border border-red-700 border-solid': hasError }
    )}
  />
);
