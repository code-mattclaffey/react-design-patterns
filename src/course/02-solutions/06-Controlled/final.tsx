import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';

interface IModal {
  isVisible: boolean;
  onClose: () => void;
  id: string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const Modal = ({
  isVisible,
  onClose,
  id,
  title,
  children
}: IModal) => {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && modal.current) {
      modal.current.focus();
    }
  }, [isVisible]);

  const onModalPress = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div
      className={classNames(
        'bg-modal-bg fixed top-0 left-0 right-0 bottom-0 justify-center items-center z-10',
        { flex: isVisible, hidden: !isVisible }
      )}
      role="button"
      onClick={onClose}
      tabIndex={0}
    >
      <div
        role="dialog"
        id={id}
        aria-labelledby={`modal_title_${id}`}
        aria-describedby={`modal_body_${id}`}
        aria-modal="true"
        hidden={!isVisible}
        tabIndex={0}
        ref={modal}
        className="bg-white rounded-2xl p-5 relative z-20"
        onClick={onModalPress}
      >
        <FocusLock>
          <div>
            <h2 id={`modal_title_${id}`}>{title}</h2>
            <button
              type="button"
              aria-label="Close dialog"
              onClick={onClose}
            >
              {/* Close SVG */}
            </button>
          </div>
          <div id={`modal_body_${id}`}>{children}</div>
        </FocusLock>
      </div>
    </div>
  );
};

export const Final = () => {
  const button = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onClose = () => {
    setIsVisible(false);

    if (button.current) {
      button.current.focus();
    }
  };

  const onOpen = () => {
    setIsVisible(true);
  };

  return (
    <>
      <button type="button" ref={button} onClick={onOpen}>
        Open Modal
      </button>
      <Modal
        id="modal"
        onClose={onClose}
        isVisible={isVisible}
        title="Modal"
      >
        <p>Hello this is a modal</p>
      </Modal>
    </>
  );
};
