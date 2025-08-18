
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

function ServiceFaqs({ ...props }) {

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
              <h3>How does PLG customize its services for different dental practices?</h3>  
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              PLG understands that every dental practice is unique. You have the flexibility to opt 
              for individual services that align with your specific needs, ensuring a tailored solution that suits your practice.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>How does lead nurturing service benefit my dental practice?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              Our lead-nurturing service is designed to cultivate meaningful connections with potential patients. It helps in 
              converting leads into loyal clients by fostering trust and engagement. Discover how this service can boost patient acquisition for your practice.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>What is involved in the Recall and Reactivation service?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              PLG's Recall and Reactivation service efficiently manages patient recall systems, strategically reactivating dormant
              patient relationships, and fostering re-care. Learn how this service can contribute to your practice's revenue 
              by re-engaging with patients who may have lapsed.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>How do you handle our dental practices recruitment & HR needs?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              PLG's dedicated recruitment team actively scouts for talent, conducts thorough screening, and arranges 
              interviews with potential candidates for your dental practice. Once a hiring decision is made, we 
              seamlessly manage the onboarding process, handle contract negotiation, and ensure the completion 
              of employee agreements. This comprehensive approach ensures a smooth and efficient recruitment process, 
              allowing you to focus on delivering outstanding patient care.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          </Accordion>

        </div>
      </div>
    </>
  );
}
export default ServiceFaqs;
