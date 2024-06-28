import classNames from 'classnames';

interface ISkeleton {
  height: string;
  width?: string;
  className?: string;
}

export const Skeleton = ({ width, height, className }: ISkeleton) => (
  <div
    className={classNames(
      'block mb-2 animate-pulse bg-gray-200 rounded-lg',
      height,
      width,
      className
    )}
  />
);
