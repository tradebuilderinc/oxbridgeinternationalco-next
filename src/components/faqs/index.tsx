import { Accordion, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaqsJsonData } from "@components/data/faqs";
import { useEffect, useState } from "react";
function Faqs({ ...props }) {
  const FaqsData: any = FaqsJsonData();
  const [limit, setLimit]: any = useState(4);
  const [faData, setFaData]: any = useState([]);


  const faq = async () => {
    const response = await fetch(
      `${process.env.API_HOST_ADMIN}/api/faqs?populate=*`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    

    const faqdata = await response.json();


   

    setFaData(faqdata?.data[0]?.attributes?.FAQ);




  };

  useEffect(() => {
    faq();
  }, []);

  useEffect(() => {
    if (!props?.detail) {
      setLimit(5);
    } else {
      setLimit(40);
    }
  }, []);






  return (
    <>
      <div className="pageinnercontent">
        <div className="accord">
          <Accordion defaultActiveKey="0">
            {faData &&
              faData?.map((item: any, index: any) => {
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
                );
              })}
          </Accordion>
        </div>
        {!props?.detail && (
          <>
            {/* <div className=" text-md-left contbtn"> */}
            {/* <Link href="" className="btn btn-primary">
                {" "}
                Schedule an Appointment
                <span>
                  <GrFormNext />
                </span>
              </Link> */}
            {/* </div> */}
          </>
        )}
      </div>
    </>
  );
}
export default Faqs;


