import { Accordion, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaqsJsonData } from "@components/data/faqs";
import { useEffect, useState } from "react";

function FaqsHome({ ...props }) {


  const mainData = [
    {
      title: 'What should you expect during your first visit?',
      description: 'During your first visit, we’ll perform a thorough examination, including x-rays, if necessary, and discuss any concerns or goals you have for your dental health. We aim to create a personalized treatment plan that meets your needs.',
      
    },
    {
      title: 'Does Island Dental accept insurance?',
      description: 'Yes, we accept most major dental insurance plans. Our friendly staff can help you understand your coverage and work with you to make the most of your benefits.',
     
    },
    {
      title: 'How do we ensure patient comfort during treatments?',
      description: 'We prioritize your comfort by creating a relaxing, welcoming environment and using advanced technology to make treatments as gentle and efficient as possible. We also offer sedation options for patients with dental anxiety',
     
    },
    {
      title: 'Do we offer emergency dental services?',
      description: 'Yes, we provide emergency dental care for issues such as toothaches, broken teeth, or other urgent dental concerns. Contact us immediately if you need prompt assistance.',
     
    },
    {
      title: 'Are our treatments suitable for children and families?',
      description: 'Absolutely! We offer comprehensive dental care for patients of all ages, making us a family-friendly dental practice. From pediatric dentistry to adult treatments, we ensure everyone receives the best care.',
     
    },
    {
      title: 'How often should I visit the dentist?',
      description: 'We recommend visiting the dentist every six months for routine cleanings and check-ups. Regular visits help prevent dental issues and keep your oral health in top shape.',
     
    }
  ];

  return (
    <>
      <div className="pagehead text-md-left pb-5" >
      <div className="row d-flex align-items-center" >
              <div className="col-xl-4 mb-4 mb-xl-0">
              <p className="our-plain" style={{margin:'0'}}>Questions?</p>
              </div>
              <div className="col-xl-8">
                <p className="our-des" style={{margin:'0'}}>If you have questions, we have answers for you here. In case we don't, please feel free to<br/>reach out to us on info@islandsmilesdental.com </p>
              </div>
            </div>
      </div>
      {/* <div className="pageinnercontent">
        <div className="accord">
          <Accordion defaultActiveKey="0">
            {props?.data &&
              props?.data?.slice(0, 8)?.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    {index == 0 && (
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{item?.title}</Accordion.Header>
                        <Accordion.Body>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                    )}

                    {index !== 0 && (
                      <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{item?.title}</Accordion.Header>
                        <Accordion.Body>
                          {" "}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                    )}
                  </div>

                  <div key={index}>
                  {index == 0 && (
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</Accordion.Header>
                      <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                      </Accordion.Body>
                    </Accordion.Item>
                  )}

                  {index !== 0 && (
                    <Accordion.Item eventKey={index} key={index}>
                      <Accordion.Header>Lorem ipsum dolor sit amet, consectetuer adipiscing elit?</Accordion.Header>
                      <Accordion.Body>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
                      </Accordion.Body>
                    </Accordion.Item>
                  )}
                </div>

                );
              })}
          </Accordion>
        </div>
        {!props?.detail && (
          <>
             <div className=" text-md-left contbtn"> 
           <Link href="" className="btn btn-primary">
                {" "}
                Schedule an Appointment
                <span>
                  <GrFormNext />
                </span>
              </Link> 
            </div> 
          </>
        )}
      </div> */}

<div className="pageinnercontent">
        <div className="accord">
          <Accordion defaultActiveKey="0">
            {mainData.map((item: any, index: any) => (
              <div key={index}>
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>
                    {item.description}
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            ))}
          </Accordion>
        </div>
        </div>

    </>
  );
}
export default FaqsHome;
