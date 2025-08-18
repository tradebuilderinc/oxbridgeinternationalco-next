
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

function GrowthFaqs({ ...props }) {

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
              <h3>How can a practice assessment benefit my dental practice?</h3>  
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>A practice assessment helps identify strengths, weaknesses, and opportunities for improvement within your practice, serving as a roadmap for strategic growth and development.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>What is involved in practice growth services?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Practice growth services involve implementing strategies and initiatives to increase revenue, expand patient base, and enhance practice efficiency, ultimately driving overall practice growth and success.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>How do you assist with practice expansion?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>We provide guidance and support throughout the practice expansion process, including market analysis, location selection, financing options, and operational planning, to ensure a smooth and successful expansion.</p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
               <h3>Can you help with practice valuation and sale?</h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Yes, we offer practice valuation services to determine the fair market value of your practice, as well as assistance with the sale process, including marketing, negotiations, and transition planning, to maximize the value of your practice sale.</p>
            </AccordionItemPanel>
          </AccordionItem>

          </Accordion>

        </div>
      </div>
    </>
  );
}
export default GrowthFaqs;
