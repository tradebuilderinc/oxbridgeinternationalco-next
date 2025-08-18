

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { Image } from "react-bootstrap";
import { GetServerSidePropsContext } from "next";
import { apiBaseURL } from "@config/api";






function MainStore({ ...props }) {

  const [doctors, setDoctors]: any = useState([]);
  const [featDoctor, setFeatDoctor]: any = useState([]);
  let credentials = {
    auth: {
      orgId: process.env.orgId,
      apiKey: process?.env.apiKey,
      type: "apiKey",
    },
    pagination: {
      limit: 30,
      skip: 0,
    },
  };
  const doctorsGroups = async () => {
    const response = await fetch(
      `${apiBaseURL}/user-groups/v2/retrieve/FGkR9XxaLJwzK2Ry3`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    const ourDoctor = await response.json();
    const featured = await fetch(
      `${apiBaseURL}/user-groups/v2/retrieve/featured/FGkR9XxaLJwzK2Ry3`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    const featuredDoctor = await featured.json();
    setFeatDoctor(featuredDoctor?.data);
    let userGroups: any = ourDoctor?.data;
    for (let i = 0; i < userGroups.length; i++) {
      for (let j = 0; j < featuredDoctor?.data?.length; j++) {
        if (
          userGroups[i] &&
          userGroups[i]._id === featuredDoctor?.data[j]._id
        ) {
          userGroups.splice(i, 1);
        }
      }
    }
    setDoctors(userGroups);
    console.log(featDoctor, doctors);
  };
  useEffect(() => {
    doctorsGroups();
    console.log(featDoctor, doctors);
  }, []);
  const { pageData } = props;
  const { apiToken } = props;

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    mobileFirst: true,
    nextArrow: (
      <RightArrow
        to="next"
        className=""
        onClick={() => console.log("right arrow")}
        customClass="home3 home-arrow-slider-right"
      />
    ),
    prevArrow: (
      <LeftArrow
        to="prev"
        className=""
        onClick={() => console.log("left arrow")}
        customClass="home3  home-arrow-slider-left"
      />
    ),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>

  
       
          {featDoctor &&
            featDoctor?.map((item: any, index: any) => {
              return (
                <div className="col-lg-4 teamsec mb-4" key={index}>
                  <div className="sersec">
                    <div className="service-img">
                      <div className="serviceimg">
                        <Image src={item?.profile?.profilePic}
                      alt="Marketing" />
                       
                      </div>
                    </div>
                    <div className="servicecont meetTeam">
                      <div className="team-head">
                        <span>
                          {item?.profile?.jobTitle} 
                   
                        </span>
                        {item?.profile?.firstName} {item?.profile?.lastName}
                      </div>
                      <p>
                        {item?.profile?.shortBio}
                       
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}


         
         
       
      

    </>
  );
}
export default MainStore;
