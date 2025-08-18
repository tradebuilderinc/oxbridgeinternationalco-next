
import { FaStar } from "react-icons/fa";
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';

function HRFaqs({ ...props }) {

  return (
    <>
      <div className="pagehead text-md-left faqheading pb-0">
        <h2>FAQs</h2>
      </div>
      <div className="pageinnercontent">
        <div className="accord">
        <Accordion allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              <h3>How can you assist with recruitment and hiring for my dental practice?</h3>  
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>We provide expert assistance with recruitment and hiring processes, including sourcing candidates, conducting interviews, 
                and facilitating the hiring process to ensure you find the best fit for your practice.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>What is involved in time management services for dental practices?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Our time management services help dental practices optimize staff schedules, reduce inefficiencies, and improve productivity, ultimately leading to better patient care and practice performance.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>How do you handle contract negotiation for dental professionals?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>We specialize in negotiating contracts on behalf of dental professionals, ensuring fair and favorable terms regarding compensation, benefits, and other employment arrangements.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>What is dental credentialing, and why is it important for my practice?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Dental credentialing involves verifying the qualifications and credentials of dental professionals to ensure they meet industry standards and regulatory requirements. It's essential for maintaining quality of care and compliance with insurance providers and regulatory bodies.</p>
            </AccordionItemPanel>
          </AccordionItem>

          </Accordion>

        </div>
      </div>
    </>
  );
}
export default HRFaqs;
