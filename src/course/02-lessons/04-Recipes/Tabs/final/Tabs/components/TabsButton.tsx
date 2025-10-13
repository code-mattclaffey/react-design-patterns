import { useEffect, useRef, useState } from 'react';

export interface ITabsButtonProps {
  ariaControls?: string;
  id?: string;
  isSelected?: boolean;
  onClick?: () => void;
  children: React.ReactNode | React.ReactNode[];
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  className?: string;
  activeClassName?: string;
}

export const TabsButton = ({
  ariaControls,
  id,
  isSelected,
  onClick,
  children,
  onKeyUp,
  className = ''
}: ITabsButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isSelected && isMounted) {
      buttonRef.current?.focus();
    }
  }, [isSelected]);

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={ariaControls}
      id={id}
      onClick={onClick}
      ref={buttonRef}
      tabIndex={isSelected ? 0 : -1}
      className={className}
      onKeyUp={onKeyUp}
    >
      {children}
    </button>
  );
};
