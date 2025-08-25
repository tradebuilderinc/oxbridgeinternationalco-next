import { Accordion, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaqsJsonData } from "@components/data/faqs";
import { useEffect, useState } from "react";
function AgentInfo({ ...props }) {
  const [agentData, setAgentData]: any = useState([]);
  const faq = async () => {
    const response = await fetch(
      `https://prod.imkloud.com/api/getAgentInfo/00838722?userOrgId=PdgT9y6tZ5XRtWaCb`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const Agent = await response.json();
    setAgentData(Agent?.profile);
    console.log("faqdata", Agent?.profile);
  };

  useEffect(() => {
    faq();
  }, []);

  return (
    <>
      <div className="talk-agent">
        <h4>talk to our agent</h4>

      


{!agentData?.profilePic ? (
                      <img
                       className="noagentimgdetailpage img-fluid imageLoader"
                        src={`${process.env.imagePath}no-images.png`}
                        alt={agentData.firstName}
                      />
                    ) : (
                      <img
                       className="noagentimgdetailpage img-fluid imageLoader"
                        src={agentData.profilePic}
                        alt={agentData?.firstName}
                      />
                    )}




        <h5 className="border"> {agentData?.firstName} {' '}
                        {agentData?.lastName}</h5>

        <ul>
          <li>LICENSE NUMBER {agentData?.license}</li>

          <li>EMAIL {agentData?.email}</li>

          <li>OFFICE </li>
          <li>
            CELL <span className="phoneMask">{agentData?.phone}</span>{" "}
          </li>
        </ul>

        <div className="form-box">
          <h5>I am interested in North First Street , CA </h5>

          <div id="mainform" className="pt-3">
            <div className="success-message-becomeprovider alert alert-success"></div>
            <div id="imli-form-9s4CRGtTMug7tXehQ">Loading...</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AgentInfo;
