import { ChangeEvent, HTMLAttributes, useState } from 'react';
import { Input } from '../../../shared/components/Input/Input.component';
import { Label } from '../../../shared/components/Label/Label.component';
import { ErrorMessage } from '../../../shared/components/ErrorMessage/ErrorMessage.component';

interface ITextFieldProps {
  hasError: boolean;
  errorMessage?: string;
  id: string;
  name: string;
  label: string;
  input: HTMLAttributes<HTMLInputElement> & { required?: boolean };
}

interface IFieldProps {
  name: string;
  id: string;
  label: string;
  required?: boolean;
  errorMessage?: string;
  validate?: (value: string) => boolean;
  children: (props: ITextFieldProps) => React.ReactNode;
}

const validateTextString = (value: string) =>
  value.trim().length === 0;

const TextFieldComponent = ({
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

export const Field = ({
  name,
  label,
  id,
  required,
  errorMessage,
  validate,
  children
}: IFieldProps) => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (required && validate) {
      setHasError(validate(event.target.value));
    }

    setValue(event.target.value!);
  };

  const onFocus = () => {
    if (isTouched) {
      setHasError(false);
    }

    setIsTouched(true);
  };

  const onBlur = () => {
    if (value && validate && validate(value)) {
      setHasError(true);
    }
  };

  return children({
    name,
    label,
    id,
    errorMessage,
    hasError,
    input: {
      required,
      onBlur,
      onFocus,
      onChange
    }
  });
};

export const Final = () => {
  return (
    <form noValidate name="form">
      <Field
        name="input"
        id="input"
        label="Enter your name"
        required
        errorMessage="Please enter your name"
        validate={validateTextString}
      >
        {({ name, label, id, errorMessage, hasError, input }) => (
          <TextFieldComponent
            name={name}
            label={label}
            id={id}
            errorMessage={errorMessage}
            hasError={hasError}
            input={input}
          />
        )}
      </Field>
    </form>
  );
};
