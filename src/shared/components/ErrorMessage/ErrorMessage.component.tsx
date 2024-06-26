interface IErrorMessage {
  message: string;
}

export const ErrorMessage = ({ message }: IErrorMessage) => (
  <span role="alert" className="block text-red-700 text-sm">
    {message}
  </span>
);
