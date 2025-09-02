import classnames from 'classnames';

interface IFinalProps {
  title: string;
  subText: string;
  cta: {
    text: string;
    url: string;
  };
  image: {
    alt: string;
    images: string[];
  };
  classNames?: {
    container?: string;
    title?: string;
    subText?: string;
    cta?: string;
    image?: string;
  };
}

export const Final = ({
  title,
  subText,
  cta,
  image,
  classNames
}: IFinalProps) => {
  const [mobile, tablet, desktop] = image.images;

  return (
    <article
      className={classnames(
        'max-w-sm rounded overflow-hidden shadow-lg',
        classNames?.container
      )}
    >
      <picture>
        <source srcSet={desktop} media="(min-width: 62rem)" />
        <source srcSet={tablet} media="(min-width: 40rem)" />
        <source srcSet={mobile} media="(min-width: 32rem)" />
        <img
          src={desktop}
          alt={image.alt}
          className={classnames(
            'w-full object-cover h-full',
            classNames?.image
          )}
        />
      </picture>
      <div className="px-6 py-4">
        <h3
          className={classnames(
            'font-bold text-xl mb-2',
            classNames?.title
          )}
        >
          {title}
        </h3>
        <p
          className={classnames(
            'text-gray-700 text-base',
            classNames?.subText
          )}
        >
          {subText}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={cta.url.startsWith('http') ? cta.url : '#'}
          rel="noopener noreferrer"
          target={cta.url.startsWith('http') ? '_blank' : '_self'}
          className={classnames(
            'inline-block bg-gray-200 hover:bg-gray-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2',
            classNames?.cta
          )}
        >
          {cta.text}
        </a>
      </div>
    </article>
  );
};
