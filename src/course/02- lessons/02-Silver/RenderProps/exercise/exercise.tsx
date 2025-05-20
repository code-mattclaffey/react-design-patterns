import { ChangeEvent, useState } from 'react';
import { Input } from '@shared/components/Input/Input.component';
import { Label } from '@shared/components/Label/Label.component';
import { ErrorMessage } from '@shared/components/ErrorMessage/ErrorMessage.component';

export interface ITextInputFieldProps {
  name: string;
  id: string;
  label: string;
  required?: boolean;
  errorMessage?: string;
}

/*
  * Observations
  * 💅 The current implementation uses the Controlled Component Pattern
  * The UI is already split into small components

  * Tasks
  * 1A 👨🏻‍💻 - Refactor the UI layer into its own component and setup the interface for its types to be:
  * hasError: boolean;
  * errorMessage?: string;
  * id: string;
  * name: string;
  * label: string;
  * input: HTMLAttributes<HTMLInputElement> & { required?: boolean };
  *
  * 1B 👨🏻‍💻 - Add these new types to the TextInputField
  * validate?: (value: string) => boolean;
  * children: (props: ITextFieldProps) => React.ReactNode;
  *
  * 1C 👨🏻‍💻 - Replace the return of TextInput field with the children prop we have defined.
  * 💅 You need to call children and pass down the props you need (the types above are the hint)
  *
  * 1D 👨🏻‍💻 - In the Exercise component you want to add the UI component in as children.
  * 💅 - The children should look like this {(props) => <UIComponent {...props} />}
*/

const validateTextString = (value: string) =>
  value.trim().length === 0;

export const TextInputField = ({
  name,
  label,
  id,
  required,
  errorMessage
}: ITextInputFieldProps) => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (required) {
      setHasError(validateTextString(event.target.value));
    }

    setValue(event.target.value);
  };

  const onFocus = () => {
    if (isTouched) {
      setHasError(false);
    }

    setIsTouched(true);
  };

  const onBlur = () => {
    if (value && validateTextString(value)) {
      setHasError(true);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        hasError={hasError}
      />
      {errorMessage && hasError && (
        <ErrorMessage message={errorMessage} />
      )}
    </div>
  );
};

export const Exercise = () => {
  return (
    <form noValidate name="form">
      <TextInputField
        name="input"
        id="input"
        label="Enter your name"
        required
        errorMessage="Please enter your name"
      />
    </form>
  );
};
