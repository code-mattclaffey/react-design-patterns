import classnames from 'classnames';

/*

  1a👨🏻‍💻 group the following together:

  * image - imageAltText, imageUrlMobile, imageUrlTablet, imageUrlDesktop
  * cta - ctaText, ctaUrl
  * classNames - containerClassName, titleClassName, subTextClassName, ctaClassName, imageClassName

*/
interface IExerciseProps {
  title: string;
  subText: string;
  ctaText: string;
  ctaUrl: string;
  imageAltText: string;
  imageUrlMobile: string;
  imageUrlTablet: string;
  imageUrlDesktop: string;
  containerClassName?: string;
  titleClassName?: string;
  subTextClassName?: string;
  ctaClassName?: string;
  imageClassName?: string;
}

/*
  1b👨🏻‍💻 Update the props to match the new types defined above.
*/
export const Exercise = ({
  title,
  subText,
  ctaText,
  ctaUrl,
  imageAltText,
  imageUrlMobile,
  imageUrlTablet,
  imageUrlDesktop,
  containerClassName,
  titleClassName,
  subTextClassName,
  ctaClassName,
  imageClassName
}: IExerciseProps) => {
  /*
    2a 🤔 Could we destructure the image to be [mobile, tablet, desktop]?
  */
  /*
    1c👨🏻‍💻 Update the props in the jsx
  */
  return (
    <article
      className={classnames(
        'max-w-sm rounded overflow-hidden shadow-lg',
        containerClassName
      )}
    >
      <picture>
        {/* ✍🏻 picture elements are a great way to display responsive images */}
        {/* ✍🏻 Using rem instead of pixels will change the image when you zoom in the page */}
        {/* ✍🏻 Link: https://web.dev/learn/design/picture-element */}
        <source srcSet={imageUrlDesktop} media="(min-width: 62rem)" />
        <source srcSet={imageUrlTablet} media="(min-width: 40rem)" />
        <source srcSet={imageUrlMobile} media="(min-width: 32rem)" />
        <img
          src={imageUrlDesktop}
          alt={imageAltText}
          className={classnames(
            'w-full object-cover h-full',
            imageClassName
          )}
        />
      </picture>
      <div className="px-6 py-4">
        <h3
          className={classnames(
            'font-bold text-xl mb-2',
            titleClassName
          )}
        >
          {title}
        </h3>
        <p
          className={classnames(
            'text-gray-700 text-base',
            subTextClassName
          )}
        >
          {subText}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={ctaUrl}
          className={classnames(
            'inline-block bg-gray-200 hover:bg-gray-300 transition-colors rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2',
            ctaClassName
          )}
        >
          {ctaText}
        </a>
      </div>
    </article>
  );
};
