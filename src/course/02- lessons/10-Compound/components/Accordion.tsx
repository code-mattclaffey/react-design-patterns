import classNames from 'classnames';
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
  // 👨🏻‍💻 1B - Paste that useState here

  // 👨🏻‍💻 1C - Replacing {children}
  // We need to map the children and apply the props to the AccordionItem here so we can manage the state within the accordion. It looks like this the syntax:
  // Children.map(children, (child: React.ReactElement<IAccordionItem>, index) => cloneElement(child, { PROPS (look at the current props) }))

  // 👨🏻‍💻 1D - Notice how there was an accordion-one in the id of the props on AccordionItem in exercise.tsx?
  // We need to use the index from the children map function as an identifier.
  /*
    isSelected: selectedAccordion === index,
    id: `${id}_${child.props.id}_${index}`,
    onClick: () => setSelectedAccordion(index),
    onFocus: () => setSelectedAccordion(index)
  */

  // Once this is completed return to the exercise.tsx file.

  // 👨🏻‍💻 3B Now where you have the onClick which just does this - onClick: () => setSelectedAccordion(index) atm
  // Make it do this instead
  /*
     onClick: () => {
      if (child.props.onClick) {
        child.props.onClick();
      }

      setSelectedAccordion(index)
     }
  */
  // What is happening here now is that we are checking if the AccordionItem already has a onClick prop and firing that if it does exist as well as managing the local state of the accordion.
  return (
    <section id={id}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
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
