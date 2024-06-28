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
  required?: boolean;
  validate?: (value: string) => boolean;
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

export const useField = ({
  name,
  required,
  validate
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

  return {
    hasError,
    input: {
      name,
      required,
      onBlur,
      onFocus,
      onChange
    }
  };
};

const Field = ({ required, validate, name }: IFieldProps) => {
  const { hasError, input } = useField({
    name: 'input',
    validate,
    required
  });

  return (
    <TextFieldComponent
      name={input.name}
      label="Enter your name"
      id={name}
      errorMessage="Please enter your name"
      hasError={hasError}
      input={input}
    />
  );
};

export const Final = () => {
  return (
    <form noValidate name="form">
      <Field
        name="input"
        validate={validateTextString}
        required={true}
      />
    </form>
  );
};
