import { ChangeEvent, useState } from 'react';
import { TextFieldComponent } from '../components';

interface IFieldProps {
  name: string;
  required?: boolean;
  validate?: (value: string) => boolean;
}

const validateTextString = (value: string) =>
  value.trim().length === 0;

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
