import classNames from 'classnames';
// 💣 You can get rid of this eslint error comment when finished.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { Button } from '../../../shared/components/Button/Button.component';

interface IModal {
  isVisible: boolean;
  onClose: () => void;
  id: string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

// For the full guide to making an accessible modal you can follow below to get every instance
// ♿️ WCAG Modal Resource: https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/examples/alertdialog/
// 💣 You can get rid of this eslint error comment when finished.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Modal = ({
  isVisible,
  // 💣 You can get rid of this eslint error comment when finished.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose,
  id,
  title,
  children
}: IModal) => {
  // 2a 👨🏻‍💻 Create a useRef<HTMLDivElement> and bind the ref to the div on line 58

  useEffect(() => {
    // ✍🏻 When a modal is visible you want to navigate the focus from
    // the actioner (what caused the modal to open) to the content
    // ♿️ It helps the screenreader not get lost on the page
    // 2b - 👨🏻‍💻 Check if isVisible is true and the modal.current is defined before setting focus to the modal
  }, [isVisible]);

  // 💣 You can get rid of this eslint error comment when finished.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onModalPress = (event: React.MouseEvent) => {
    // You may have noticed how we have added an onClose event to the container
    // and that is because customers normally click out of the modal to leave,
    // but if they click within the modal happens. The event "bubbles" up to
    // the container div and it closes the modal. Which is janky behaviour
    // 🧪 When you finish, remove the onModal press from the modal and try to click inside the modal then add it back
    // ✍🏻 Stop propagation prevents an event from bubbling to the top.
    // ✍🏻 https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div
      className={classNames(
        'bg-modal-bg fixed top-0 left-0 right-0 bottom-0 justify-center items-center z-10'
        // 2c - 💄 Add an object as the second param with flex: isVisible and hidden !isVisible
      )}
      role="button"
      //  2d - 👨🏻‍💻 Pass the onClose event from the props to the onClick event.
      tabIndex={0}
    >
      <div
        id={id}
        // 2e - Add the following HTML attributes to the div:
        // * ♿️ role="dialog" - this changes how the screenreader understands the html element
        // * ♿️ aria-labelledby={`modal_title_${id}`} - so when focus lands the title is read out
        // * ♿️ aria-describedby={`modal_body_${id}`} - so when focus lands the content is read out
        // 🤔 ⬆️ It's always good to make these unique with an id prop so you have unique ids on the page
        // * ♿️ aria-modal="true" - indicates whether an element is modal when displayed.
        // * ♿️ hidden={!isVisible} - we do not want the screenreader to pick this up when it's hidden
        // * ♿️ tabIndex={0} - allows the browser to focus on it via a keyboard
        // * onClick={onModalPress} - description in onModalPress.
        className="bg-white rounded-2xl p-5 relative z-20"
      >
        {/* ✍🏻 SUPER important for meeting the WCAG quidelines is that you need focus, but locked within this div */}
        {/* When focus is landed in this box with a keyboard you can no longer get out so make sure you have a close button */}
        {/* ♿️ Another requirement is to return focus to the actioner, but FocusLock does that for us when this component unmounts! 🦸🏻‍♀️ */}
        <FocusLock>
          <div>
            {/* 2f - 👨🏻‍💻♿️ Add id={`modal_title_${id}`} - this creates the relationship between the title and modal */}
            <h2>{title}</h2>
            {/* 2g - 👨🏻‍💻 Add onClick={onClose} going back to the pattern, we want outside to control the visibility of the modal */}
            <Button>Close Dialog</Button>
          </div>
          {/* 2h - 👨🏻‍💻♿️ Add id={`modal_body_${id}`} - this creates the relationship between the title and modal */}
          <div>{children}</div>
        </FocusLock>
      </div>
    </div>
  );
};

export const Exercise = () => {
  // 1a 👨🏻‍💻 Create a state hook variable with isVisible and setIsVisible

  // 1b 👨🏻‍💻 Create an onClose event that sets isVisible to false

  // 1c 👨🏻‍💻 Create an onOpen event that sets isVisible to true

  return (
    <>
      {/* 1d 👨🏻‍💻 Add the onClick={onOpen} event to the button 
      ✍🏻 This is an example of a Controlled component but in a HTML context.
      As a developer, we are providing the button with those props for the button
      to behave how we want it to behave, otherwise, it does nothing. */}
      <button type="button">Open Modal</button>
      {/* 1e 👨🏻‍💻 Check if isVisible (💅 Conditional Render Pattern) to render the Modal */}
      {/* Map the isVisible and onClose props to the Modal. The other props can be whatever you want */}
    </>
  );
};
