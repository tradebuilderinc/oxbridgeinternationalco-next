import { useEffect, useState } from "react";
import Slider from "react-slick";
import SplitDescription from "../helper/splitDescription";
import Link from "next/link";
import { apiBaseURL } from "@config/api";

function Doctors({ ...props }) {
  const [doctors, setDoctors]: any = useState([]);
  const [featDoctor, setFeatDoctor]: any = useState([]);
  // let credentials = {
  //   auth: {
  //     orgId: process.env.orgId,
  //     apiKey: process?.env.apiKey,
  //     type: "apiKey",
  //   },
  //   pagination: {
  //     limit: 30,
  //     skip: 0,
  //   },
  // };
  let credentials = {
    auth: {
      orgId: "gxmHWuL6xPXQXnuxg",
      apiKey: "cuSocDmsZuz5qwKnDDiroBr9pYrg8S",
      type: "apiKey",
    },
    pagination: {
      limit: 30,
      skip: 0,
    },
  };
  const doctorsGroups = async () => {
    const response = await fetch(
      `${apiBaseURL}/user-groups/v2/retrieve/${props?.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    const ourDoctor = await response.json();





    const featured = await fetch(
      `${apiBaseURL}/user-groups/v2/retrieve/featured/${props?.id}`,
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
  };
  useEffect(() => {
    doctorsGroups();
  }, []);
  var settings3 = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,


        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,


        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,


        },
      },
    ],
  };
  return (
    <>

        {featDoctor &&
          featDoctor?.slice(0, 2)?.map((item: any, index: any) => {
            return (
          
                <div className="team-card col-xl-4" key={index}>
                  <div className="team-card-img">
                    {!item?.profile?.profilePic ? (
                      <img
                        className="img-fluid rounded-border"
                        src={`${process.env.imagePath}no-images.png`}
                        alt={item?.profile?.firstName}
                      />
                    ) : (
                      <img
                        className="rounded-border"
                        src={item?.profile?.profilePic}
                        alt={item?.profile?.firstName}
                      // style={{ maxWidth: "405px" }}
                      />
                    )}
                    <div className="ser-car-desc">
                      <h4 className="heading-01">
                        {" "}
                        {item?.profile?.firstName} {""} {item?.profile?.lastName} <br></br>
                        {item?.profile?.jobTitle && (
                          <span> {item?.profile?.jobTitle}</span>
                        )}{" "}
                      </h4>
{/* 
                      {item?.profile?.bio && (
                        <p>
                          <SplitDescription des={item?.profile?.bio} limit={10} />
                        </p>
                      )} */}

                      <div className="team-card-more">
                        {item?.profile?.bio && (
                          <Link className="readmore" href={`/doctors/${item?._id}`}>
                        
                           Learn More
                          </Link>
                        )}
                      </div>
                    </div>


                  </div>



                </div>
             
            );
          })}
        {/* {doctors &&
          doctors?.map((item: any, index: any) => {
            return (
              <div key={index}>
                <div className="team-card">
                  <div className="team-card-img">
                    {!item?.profile?.profilePic ? (
                      <img
                        className="img-fluid rounded-border"
                        src={`${process.env.imagePath}no-images.png`}
                        alt={item?.profile?.firstName}
                      />
                    ) : (
                      <img
                        className="rounded-border"
                        src={item?.profile?.profilePic}
                        alt={item?.profile?.firstName}
                      // style={{ maxWidth: "405px" }}
                      />
                    )}

                    <div className="ser-car-desc">
                      <h4 className="heading-01">
                        {" "}
                        {item?.profile?.firstName} {""} {item?.profile?.lastName}
                        {item?.profile?.jobTitle && (
                          <span>, {item?.profile?.jobTitle}</span>
                        )}{" "}
                      </h4>

                      {item?.profile?.bio && (
                        <p>
                          <SplitDescription des={item?.profile?.bio} limit={10} />
                        </p>
                      )}

                      <div className="team-card-more">
                        {item?.profile?.bio && (
                          <Link className="readmore" href={`/doctors/${item?._id}`}>
                            Learn more

                          </Link>
                        )}
                      </div>

                    </div>
                  </div>


                </div>

               
              </div>
            );
          })} */}
   
    </>
  );
}
export default Doctors;
