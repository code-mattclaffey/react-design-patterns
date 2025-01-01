import classNames from 'classnames';
import { Children, cloneElement, useState } from 'react';
import styles from './Accoridon.module.css';
import { ChevronDown } from './ChevronDown';

interface IAccordion {
  id: string;
  children:
    | React.ReactElement<IAccordionItem>
    | React.ReactElement<IAccordionItem>[];
  title: string;
}

interface IAccordionItem {
  id: string;
  children: React.ReactNode | React.ReactNode[];
  title: string;
  isSelected?: boolean;
  onClick?: VoidFunction;
  onFocus?: VoidFunction;
}

export const Accordion = ({ id, children, title }: IAccordion) => {
  const [selectedAccordion, setSelectedAccordion] =
    useState<number>();

  return (
    <section id={id}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {Children.map(
        children,
        (child: React.ReactElement<IAccordionItem>, index) =>
          cloneElement(child, {
            isSelected: selectedAccordion === index,
            id: `${id}_${child.props.id}_${index}`,
            onClick: () => {
              if (child.props.onClick) {
                child.props.onClick();
              }

              setSelectedAccordion(index);
            },
            onFocus: () => setSelectedAccordion(index)
          })
      )}
    </section>
  );
};

export const AccordionItem = ({
  id,
  title,
  children,
  isSelected,
  onClick,
  onFocus
}: IAccordionItem) => (
  <div
    className={classNames(
      styles.accordionItem,
      'rounded-lg border-[1px] mb-4 overflow-hidden',
      isSelected ? 'border-blue-950' : 'border-blue-100'
    )}
    onFocus={onFocus}
  >
    <h3>
      <button
        type="button"
        aria-expanded={isSelected ? 'true' : 'false'}
        aria-controls={`accordion_panel_${id}`}
        id={`accordion_button_${id}`}
        onClick={onClick}
        className={classNames(
          'p-4 font-semibold text-lg flex justify-between items-center w-full transition-all duration-300',
          styles.accordionButton,
          {
            [styles.accordionButtonSelected]: isSelected
          }
        )}
      >
        {title}
        <span
          className={classNames(
            styles.accordionIcon,
            'w-[1.5em] h-[1.5em] transition-transform duration-300'
          )}
        >
          <ChevronDown />
        </span>
      </button>
    </h3>
    <div
      role="region"
      id={`accordion_panel_${id}`}
      aria-labelledby={`accordion_button_${id}`}
      className={classNames(styles.accordionPanel, {
        [styles.accordionPanelSelected]: isSelected
      })}
    >
      {children}
    </div>
  </div>
);
