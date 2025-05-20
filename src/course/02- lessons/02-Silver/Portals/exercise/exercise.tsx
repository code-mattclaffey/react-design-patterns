import { useState } from 'react';
import { Modal } from './components/modal';
import { Button } from '@shared/components/Button/Button.component';

// 👨🏻‍💻 1A - have a look at the current implementation of the modal and then go to components/modal.tsx

export const Exercise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const onClose = () => {
    setIsVisible(false);
  };

  const onOpen = () => {
    setIsVisible(true);
  };

  const onCheckout = () => {
    setIsComplete(true);
  };

  return (
    // 🧪 We have z-index 10 on the section and then z-9998 on a div that's purposely there. Our Modal has a z-20 which means:
    // section z-10
    // modal z-20 (but this means z-20 within the z-10) think of it as a sub layer.
    // the bug is 9998 and a css hack for the pay now is 9999
    <section className="z-10 relative h-screen">
      <div className="z-[9998] absolute top-0 left-0 right-0 bottom-0" />
      {isComplete && (
        <>
          <h1 className="text-xl font-semibold">
            Payment Successful
          </h1>
          <p className="text-md mb-2">Well done you did it!</p>
        </>
      )}

      {!isComplete && (
        <>
          <h1 className="text-xl font-semibold">Payment Page</h1>

          <p className="text-md mb-2">
            Please see your selected options from the previous steps
            before continuing.
          </p>

          <section className="my-6">
            <h2 className="text-lg font-semibold mb-2">
              Delivery Details
            </h2>
            <address className="border border-grey-300 rounded-md p-3 mb-2 block">
              <p>12 john doe street, Manchester, M12 3RT</p>
            </address>
          </section>

          <section className="z-[9999] relative">
            <h2 className="text-lg font-semibold mb-2">
              Make Payment
            </h2>
            <Button onClick={onOpen}>Pay now</Button>
          </section>
        </>
      )}
      {isVisible && !isComplete && (
        <Modal
          id="modal"
          onClose={onClose}
          isVisible={isVisible}
          title="Some fancy payment form..."
        >
          <Button onClick={onCheckout}>Pay now</Button>
        </Modal>
      )}
    </section>
  );
};
