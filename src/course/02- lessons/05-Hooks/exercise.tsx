import { ChangeEvent, useState } from 'react';
import { ITextFieldProps, TextFieldComponent } from './components';

/*
 * Observations
 * 💅 The current implementation uses the Render Props Pattern
 * Don't worry about the UI in the components file.
 */

interface IFieldProps {
  name: string;
  validate?: (value: string) => boolean;
  required?: boolean;

  // 1B 💣 - remove these four params and references in the function.
  id: string;
  label: string;
  errorMessage?: string;
  children: (props: ITextFieldProps) => React.ReactNode;
}

const validateTextString = (value: string) =>
  value.trim().length === 0;

// 1A 👨🏻‍💻 - We need to refactor this to be called useField
export const Field = ({
  name,
  required,
  validate,
  // 1B 💣 - remove these four params and references in the function.
  label,
  id,
  errorMessage,
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

  // 1C 👨🏻‍💻 - Just return the object instead of children.
  return children({
    // 1D 👨🏻‍💻 - move name into input
    name,
    input: {
      required,
      onBlur,
      onFocus,
      onChange
    },
    hasError,
    // 1B 💣 - remove these three params and references in the function.
    label,
    id,
    errorMessage
  });
};

// 2A 🤔 - What if we wanted to make multiple Fields? Our current solution would
// require us to call useField multiple times in the same component. Let's refactor
// what we have done into a field component which uses IFieldProps as params.

export const Exercise = () => {
  // 1E 👨🏻‍💻 - call the useField and pass the { name: "input", validate: validateTextString, required: true }
  return (
    <form noValidate name="form">
      {/* 1F 💣 - Remove the Field component and pull the values required for TextFieldComponent to run */}
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
            // This will be input.name now.
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
