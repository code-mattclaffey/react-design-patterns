interface ILabel {
  htmlFor: string;
  children: React.ReactNode;
}

export const Label = ({ htmlFor, children }: ILabel) => (
  <label
    htmlFor={htmlFor}
    className="block text-gray-700 text-sm font-bold"
  >
    {children}
  </label>
);
