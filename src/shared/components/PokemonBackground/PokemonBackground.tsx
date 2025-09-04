import classNames from 'classnames';

export const PokemonBackground = ({
  children,
  bodyClassName
}: {
  children: React.ReactNode | React.ReactNode[];
  bodyClassName?: string;
}) => (
  <section>
    <img
      src="/pokemon-battleground.webp"
      alt="hello"
      className="fixed will-change-scroll left-0 right-0 top-0 bottom-0 z-0 h-full w-full object-cover"
    />
    <div className="fixed will-change-scroll left-0 right-0 top-0 bottom-0 z-10 h-full w-full bg-black opacity-25" />
    <div className={classNames('relative z-20', bodyClassName)}>
      {children}
    </div>
  </section>
);
