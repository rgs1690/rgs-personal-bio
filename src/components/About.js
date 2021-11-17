import React from 'react';
import { Accordion, AccordionItem, AccordionHeader } from 'reactstrap';

export default function About() {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/78558344?v=4"
        className="img-fluid"
        alt="headShot"
      />
      <div>
        <Accordion
          open="1"
          // eslint-disable-next-line react/jsx-no-bind
          toggle={function noRefCheck() {}}
        >
          <AccordionItem>
            <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
            <AccordionItem accordionId="1">
              <strong>This is the first items accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. Its also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionItem>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionItem accordionId="2">
              <strong>This is the second items accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. Its also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionItem>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionItem accordionId="3">
              <strong>This is the third items accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. Its also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionItem>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
