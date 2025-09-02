import { useState } from 'react';
import { Accordion, AccordionItem } from './components/Accordion';

/**
 * Exercise: Convert the current accordion implementation to use the compound pattern
 *
 * 🤔 Observations of this file
 * As you can see in this component we have some useState which is managing which accordion item is open at any given time. We need to move this logic into the Accordion component and pass down the props into the AccordionItem that way instead of managing it here in this file.
 *
 */

// 👨🏻‍💻 1A Copy the useState on line 14 and go to ./components/Accordion.tsx
export const Exercise = () => {
  // 💣 2A Remove the useState and the isSelected, id, onClick, onFocus props from all the AccordionItems

  const [selectedAccordion, setSelectedAccordion] =
    useState<string>();

  // 🤔 3A (Bonus round) - now the customer wants to add event tracking when you click ONLY the first accordion item. Since the props now live in the accordion for onClick, we need to persist that onClick to the accordionItem if we specify one at this level. Add an onClick on the first AccordionItem with a console.log('TRACK') and then move over to the Accordion.tsx.
  return (
    <Accordion id="my-accordion" title="FAQs">
      <AccordionItem
        title="Accordion Button One"
        isSelected={selectedAccordion === 'accordion-one'}
        id="accordion-one"
        onClick={() => setSelectedAccordion('accordion-one')}
        onFocus={() => setSelectedAccordion('accordion-one')}
      >
        <p>
          Per torquent, mus cursus hendrerit id aenean justo auctor
          donec. Turpis magna et, egestas dignissim nascetur. Sapien
          augue nisl varius diam aliquet. Litora velit, tortor at
          ante. Eros lacus faucibus consequat scelerisque proin
          volutpat. In pellentesque est curae; dapibus nisl risus
          sociosqu penatibus. Lobortis pulvinar scelerisque lacus.
          Elit vel eros facilisi dis mauris magna posuere? Cum class
          viverra bibendum rutrum odio scelerisque scelerisque libero,
          nisl est convallis non. Ac convallis odio suspendisse velit
          mollis libero. Morbi enim blandit venenatis{' '}
          <a href="#">lorem!</a>
        </p>
      </AccordionItem>
      <AccordionItem
        title="Accordion Button Two"
        isSelected={selectedAccordion === 'accordion-two'}
        id="accordion-two"
        onClick={() => setSelectedAccordion('accordion-two')}
        onFocus={() => setSelectedAccordion('accordion-two')}
      >
        <p>
          Per torquent, mus cursus hendrerit id aenean justo auctor
          donec. Turpis magna et, egestas dignissim nascetur. Sapien
          augue nisl varius diam aliquet. Litora velit, tortor at
          ante. Eros lacus faucibus consequat scelerisque proin
          volutpat. In pellentesque est curae; dapibus nisl risus
          sociosqu penatibus. Lobortis pulvinar scelerisque lacus.
          Elit vel eros facilisi dis mauris magna posuere? Cum class
          viverra bibendum rutrum odio scelerisque scelerisque libero,
          nisl est convallis non. Ac convallis odio suspendisse velit
          mollis libero. Morbi enim blandit venenatis{' '}
          <a href="#">lorem!</a>
        </p>
      </AccordionItem>
      <AccordionItem
        title="Accordion Button Three"
        isSelected={selectedAccordion === 'accordion-three'}
        id="accordion-three"
        onClick={() => setSelectedAccordion('accordion-three')}
        onFocus={() => setSelectedAccordion('accordion-three')}
      >
        <p>
          Per torquent, mus cursus hendrerit id aenean justo auctor
          donec. Turpis magna et, egestas dignissim nascetur. Sapien
          augue nisl varius diam aliquet. Litora velit, tortor at
          ante. Eros lacus faucibus consequat scelerisque proin
          volutpat. In pellentesque est curae; dapibus nisl risus
          sociosqu penatibus. Lobortis pulvinar scelerisque lacus.
          Elit vel eros facilisi dis mauris magna posuere? Cum class
          viverra bibendum rutrum odio scelerisque scelerisque libero,
          nisl est convallis non. Ac convallis odio suspendisse velit
          mollis libero. Morbi enim blandit venenatis{' '}
          <a href="#">lorem!</a>
        </p>
      </AccordionItem>
      <AccordionItem
        title="Accordion Button Four"
        isSelected={selectedAccordion === 'accordion-four'}
        id="accordion-four"
        onClick={() => setSelectedAccordion('accordion-four')}
        onFocus={() => setSelectedAccordion('accordion-four')}
      >
        <p>
          Per torquent, mus cursus hendrerit id aenean justo auctor
          donec. Turpis magna et, egestas dignissim nascetur. Sapien
          augue nisl varius diam aliquet. Litora velit, tortor at
          ante. Eros lacus faucibus consequat scelerisque proin
          volutpat. In pellentesque est curae; dapibus nisl risus
          sociosqu penatibus. Lobortis pulvinar scelerisque lacus.
          Elit vel eros facilisi dis mauris magna posuere? Cum class
          viverra bibendum rutrum odio scelerisque scelerisque libero,
          nisl est convallis non. Ac convallis odio suspendisse velit
          mollis libero. Morbi enim blandit venenatis{' '}
          <a href="#">lorem!</a>
        </p>
      </AccordionItem>
    </Accordion>
  );
};
