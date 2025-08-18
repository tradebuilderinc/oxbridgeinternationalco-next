
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

function TechnologyFaqs({ ...props }) {

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
              <h3>What types of practice support do you offer?</h3>  
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>We offer comprehensive practice support services, including training, implementation assistance, 
                and ongoing guidance to ensure seamless integration of technology into your dental practice.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>Can you develop custom web and app solutions for our practice?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Yes, our team specializes in developing custom web and app solutions tailored to the unique 
                needs of dental practices. Whether you need a patient portal, appointment scheduling system, 
                or practice management software, we can create a solution that meets your requirements.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>How do you handle practice set-up and migration?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Our practice set-up and migration services are designed to make the transition to new technology 
                as smooth as possible. We handle everything from initial setup to data migration, ensuring minimal 
                disruption to your practice's operations.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>What kind of support do you provide for practice automation?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>We offer comprehensive support for practice automation, including implementing automated workflows, 
                integrating digital tools, and providing training to maximize efficiency and productivity in your practice.</p>
            </AccordionItemPanel>
          </AccordionItem>

          </Accordion>

        </div>
      </div>
    </>
  );
}
export default TechnologyFaqs;
