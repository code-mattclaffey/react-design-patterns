import { Input } from '../../../shared/components/Input/Input.component';
import { Label } from '../../../shared/components/Label/Label.component';
import { ErrorMessage } from '../../../shared/components/ErrorMessage/ErrorMessage.component';
import { HTMLAttributes } from 'react';

export interface ITextFieldProps {
  hasError: boolean;
  errorMessage?: string;
  id: string;
  name: string;
  label: string;
  input: HTMLAttributes<HTMLInputElement> & { required?: boolean };
}

export const TextFieldComponent = ({
  hasError,
  errorMessage,
  input,
  id,
  name,
  label
}: ITextFieldProps) => (
  <div className="flex flex-col gap-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} name={name} hasError={hasError} {...input} />
    {errorMessage && hasError && (
      <ErrorMessage message={errorMessage} />
    )}
  </div>
);
