import { Accordion, AccordionItem } from './components/Accordion';

export const Final = () => (
  <Accordion id="my-accordion" title="FAQs">
    <AccordionItem
      id="accordion-one"
      title="Accordion Button One"
      onClick={() => {
        console.log('TRACK');
      }}
    >
      <p>
        Per torquent, mus cursus hendrerit id aenean justo auctor
        donec. Turpis magna et, egestas dignissim nascetur. Sapien
        augue nisl varius diam aliquet. Litora velit, tortor at ante.
        Eros lacus faucibus consequat scelerisque proin volutpat. In
        pellentesque est curae; dapibus nisl risus sociosqu penatibus.
        Lobortis pulvinar scelerisque lacus. Elit vel eros facilisi
        dis mauris magna posuere? Cum class viverra bibendum rutrum
        odio scelerisque scelerisque libero, nisl est convallis non.
        Ac convallis odio suspendisse velit mollis libero. Morbi enim
        blandit venenatis <a href="#">lorem!</a>
      </p>
    </AccordionItem>
    <AccordionItem id="accordion-two" title="Accordion Button Two">
      <p>
        Per torquent, mus cursus hendrerit id aenean justo auctor
        donec. Turpis magna et, egestas dignissim nascetur. Sapien
        augue nisl varius diam aliquet. Litora velit, tortor at ante.
        Eros lacus faucibus consequat scelerisque proin volutpat. In
        pellentesque est curae; dapibus nisl risus sociosqu penatibus.
        Lobortis pulvinar scelerisque lacus. Elit vel eros facilisi
        dis mauris magna posuere? Cum class viverra bibendum rutrum
        odio scelerisque scelerisque libero, nisl est convallis non.
        Ac convallis odio suspendisse velit mollis libero. Morbi enim
        blandit venenatis <a href="#">lorem!</a>
      </p>
    </AccordionItem>
    <AccordionItem
      id="accordion-three"
      title="Accordion Button Three"
    >
      <p>
        Per torquent, mus cursus hendrerit id aenean justo auctor
        donec. Turpis magna et, egestas dignissim nascetur. Sapien
        augue nisl varius diam aliquet. Litora velit, tortor at ante.
        Eros lacus faucibus consequat scelerisque proin volutpat. In
        pellentesque est curae; dapibus nisl risus sociosqu penatibus.
        Lobortis pulvinar scelerisque lacus. Elit vel eros facilisi
        dis mauris magna posuere? Cum class viverra bibendum rutrum
        odio scelerisque scelerisque libero, nisl est convallis non.
        Ac convallis odio suspendisse velit mollis libero. Morbi enim
        blandit venenatis <a href="#">lorem!</a>
      </p>
    </AccordionItem>
    <AccordionItem id="accordion-four" title="Accordion Button Four">
      <p>
        Per torquent, mus cursus hendrerit id aenean justo auctor
        donec. Turpis magna et, egestas dignissim nascetur. Sapien
        augue nisl varius diam aliquet. Litora velit, tortor at ante.
        Eros lacus faucibus consequat scelerisque proin volutpat. In
        pellentesque est curae; dapibus nisl risus sociosqu penatibus.
        Lobortis pulvinar scelerisque lacus. Elit vel eros facilisi
        dis mauris magna posuere? Cum class viverra bibendum rutrum
        odio scelerisque scelerisque libero, nisl est convallis non.
        Ac convallis odio suspendisse velit mollis libero. Morbi enim
        blandit venenatis <a href="#">lorem!</a>
      </p>
    </AccordionItem>
  </Accordion>
);
