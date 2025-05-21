import { HTMLAttributes } from 'react';

/**
 * Exercise: Refactor the Heading component to correctly use the polymorphic pattern.
 *
 * 🤔 Observations of this file
 * In the current component you can see that the as prop is a string so if a developer in a team uses the wrong element they would just get the h2 element.
 * Font sizes are clearly defined to the element so there is no flexibility in sizes which can lead to developers pleasing designers but... breaking accessibility or vice versa where designs do not look the same as what was provided.
 *
 * We need to tackle this in stages...
 *
 * Stage one - Refactoring the component to use Polymorphic style so we remove the switch statement.
 * Stage two - decouple the font size to the element
 * Stage three - allow for developers to have a size medium breakpoint for special designs.
 *
 */

// 🧑🏻‍💻 1.a - Create a type called allowedHTMLElements

// 🧑🏻‍💻 2.a - Create a type called FontSizes and it's a union of 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  // 🧑🏻‍💻 1.b - Update the type of string to be the type you defined as part of 1.a
  as?: string;
  // 🧑🏻‍💻 2.b - Create a new prop called size?: FontSizes;
  // 🧑🏻‍💻 3.a - Create a new prop called sizeMd?: FontSizes;
  children?: React.ReactNode | React.ReactNode[];
}

const Heading = ({
  // 🧑🏻‍💻 1.c - add : Element = 'h2' what this will do is redefine the prop to be a capital variable which can be used as a React Component.
  as = 'h2',
  // 🧑🏻‍💻 2.c - Create a new prop called size
  // 🧑🏻‍💻 3.b - Create a new prop called sizeMd
  children,
  ...rest
}: IHeading) => {
  // 🧑🏻‍💻 1.d - Create a variable called elementFontSize which uses useMemo to return a string from an object key mapping. For example: useMemo(() => ({ h1: 'text-3xl' }[Element]), [Element]);
  // 🧑🏻‍💻 2.d - In the useMemo add the size as a dependency and then check if size exists. If it does, return `text-${size}` if not, return what was there previously. Move onto 3.a.

  // 🧑🏻‍💻 3.c - create another useMemo for largeFontSizes where we find an array of md:text-(sm-3xl) and we need to "find" which one in that array "includes" sizeMd props value.

  // 🧪 3.d Head down to the storybook Exercise Component and add a few more variants in.

  // 🧑🏻‍💻 1.e return the Element with the className={classNames('mb-3 font-semibold', elementFontSize)} don't forget the ...rest
  // 💣 1.f remove the old code below. Move onto step 2.a.
  if (as)
    switch (as) {
      case 'h1':
        return (
          <h1 {...rest} className="text-3xl mb-3 font-semibold">
            {children}
          </h1>
        );
      case 'h3':
        return (
          <h3 {...rest} className="text-xl mb-3 font-semibold">
            {children}
          </h3>
        );
      case 'h4':
        return (
          <h4 {...rest} className="text-lg mb-3 font-semibold">
            {children}
          </h4>
        );
      case 'h5':
        return (
          <h5 {...rest} className="text-md mb-3 font-semibold">
            {children}
          </h5>
        );
      case 'h6':
        return (
          <h6 {...rest} className="text-sm mb-3 font-semibold">
            {children}
          </h6>
        );
      default:
        return (
          <h2 {...rest} className="text-2xl mb-3 font-semibold">
            {children}
          </h2>
        );
    }
};

export const Exercise = () => (
  <article>
    <Heading as="h1">Heading One</Heading>
    <Heading as="h2">Heading Two</Heading>
    <Heading as="h3">Heading Three</Heading>
    <Heading as="h4">Heading Four</Heading>
    <Heading as="h5">Heading Five</Heading>
    <Heading as="h6">Heading Six</Heading>
    {/* 3.e 👨🏻‍💻 Implement a heading as h2 and size sm */}

    {/* 3.e 👨🏻‍💻 Implement a heading as h2 and size sm and sizeMd is 3xl */}

    {/* 3.e 👨🏻‍💻 Implement a heading as h2 and sizeMd is 3xl */}
  </article>
);
