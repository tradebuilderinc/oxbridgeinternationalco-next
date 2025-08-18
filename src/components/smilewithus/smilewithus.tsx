import FilterUrl from "@components/helper/FilterUrl";
import ReadableDate from "@components/helper/ReadableDate";
import SplitDescription from "@components/helper/splitDescription";
import { apiBaseURL } from "@config/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { GrFormNext } from "react-icons/gr";
import Button from "@components/ui/button";
function Smilewithus() {
  const [whyusData, setWhyusData]: any = useState([]);

  const getTestimonial = async () => {
    let path: string = "whyus,whyus.featuredImage";

    const response = await fetch(
      `${process.env.API_HOST_ADMIN}/api/why-uses/?populate=*&populate=${path}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const whyuses = await response.json();
    setWhyusData(whyuses?.data[0]?.attributes);
  };

  useEffect(() => {
    getTestimonial();
  }, []);

 

  return (
    <div className="home-whyus">
      <div className="pagehead pb-0">
        {/* <h2>{whyusData?.title}</h2> */}
        <p className="our-plain">Smile with us</p>
        <h2>Visit Island 
          Dental Today!
        </h2>
        <p
          className="pb-4 our-des"
          style={{
            maxWidth: "790px",
          }}
        >
          {/* {whyusData?.description} */}
          Ready to get your best smile? Schedule your appointment at<br/>Island Dental, the trusted dentist in Maui, Kahului. 

        </p>
      </div>
      <div className=" contbtn ">
        <div >
          <Button
            //link={whyusData?.buttonUrl ? whyusData?.buttonUrl : "#"}
            link="/contact"
            btnclass="btn btn-primary"
          >
            {/* {whyusData?.buttonName} */}
            Book Your Appointment 

          </Button>
        </div>
      </div>
    </div>
  );
}
export default Smilewithus;
