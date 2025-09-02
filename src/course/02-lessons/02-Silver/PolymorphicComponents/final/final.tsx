import classNames from 'classnames';
import { HTMLAttributes, useMemo } from 'react';

type AllowedHTMLElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type FontSizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

// 💅 could use conditional types here to use the correct element but for the sake of the example we can keep heading element.
interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  as?: AllowedHTMLElements;
  size?: FontSizes;
  sizeMd?: FontSizes;
  children?: React.ReactNode;
}

const Heading = ({
  as: Element = 'h2',
  size,
  sizeMd,
  children,
  ...rest
}: IHeading) => {
  const elementFontSize = useMemo(
    () =>
      size
        ? `text-${size}`
        : {
            h1: 'text-3xl',
            h2: 'text-2xl',
            h3: 'text-xl',
            h4: 'text-lg',
            h5: 'text-md',
            h6: 'text-sm'
          }[Element],
    [Element, size]
  );

  const largeFontSize = useMemo(
    () => {
      const sizeMap: Record<FontSizes, string> = {
        sm: 'md:text-sm',
        md: 'md:text-md',
        lg: 'md:text-lg',
        xl: 'md:text-xl',
        '2xl': 'md:text-2xl',
        '3xl': 'md:text-3xl'
      };
      return sizeMd ? sizeMap[sizeMd] : undefined;
    },
    [sizeMd]
  );

  return (
    <Element
      {...rest}
      className={classNames(
        elementFontSize,
        largeFontSize,
        'font-semibold mb-3'
      )}
    >
      {children}
    </Element>
  );
};

export const Final = () => (
  <article>
    <Heading as="h1">Heading One</Heading>
    <Heading as="h2">Heading Two</Heading>
    <Heading as="h3">Heading Three</Heading>
    <Heading as="h4">Heading Four</Heading>
    <Heading as="h5">Heading Five</Heading>
    <Heading as="h6">Heading Six</Heading>
    <Heading as="h2" size="sm">
      Heading Two (sm size)
    </Heading>
    <Heading as="h2" size="sm" sizeMd="3xl">
      Heading Two (sm size mobile and md breakpoint 3xl)
    </Heading>
    <Heading as="h2" sizeMd="3xl">
      Heading Two (md breakpoint 3xl)
    </Heading>
  </article>
);
