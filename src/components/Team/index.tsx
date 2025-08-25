import { useEffect, useState } from "react";
import SplitDescription from "../helper/splitDescription";
import Link from "next/link";
import { apiBaseURL } from "@config/api";
import AdditionalInfo from "@components/MeetTeam/AdditionalInfo";

function Team({ ...props }) {
  const [additionInfo, setAdditionInfo]: any = useState([]);
  //   console.log("props", props);

  const Info = async () => {
    const response = await fetch(
      `https://prod.imkloud.com/api/v1/user-groups/?apiKey=4MrokA3pBgjfsguf2M9aymTQDREqnE`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const faqdata = await response.json();
    setAdditionInfo(faqdata?.data[0]?.userData);
  };

  useEffect(() => {
    Info();
  }, []);

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
      orgId: "PdgT9y6tZ5XRtWaCb",
      apiKey: "4MrokA3pBgjfsguf2M9aymTQDREqnE",
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

    console.log("ffe2", ourDoctor?.data);

    const featured = await fetch(
      `${apiBaseURL}/user-groups/v2/retrieve/featured/${props?.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    const featuredDoctor = await featured.json();

    // setFeatDoctor(featuredDoctor?.data);

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

    const mergedArr = [...featuredDoctor?.data, ...ourDoctor?.data];

    const result: any = mergedArr.reduce((accumulator: any, current: any) => {
      let exists: any = accumulator.find((item: { _id: any }) => {
        return item._id === current._id;
      });

      if (!exists) {
        accumulator = accumulator.concat(current);
      }

      return accumulator;
    }, []);

    console.log("result", result);
    setFeatDoctor(result);
  };

  useEffect(() => {
    doctorsGroups();
  }, []);

  console.log("featDoctor", featDoctor);

  return (
    <>
      <div className="row">
        {featDoctor &&
          featDoctor?.slice(0, 80)?.map((item: any, index: any) => {
            return (
              <div className="teammember2" key={index}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="inner text-right">
                      <h5>
                        {item?.profile?.firstName}
                        {item?.profile?.lastName}
                        {item?.profile?.jobTitle && (
                          <span>, {item?.profile?.jobTitle}</span>
                        )}
                        {/* Steve Becerra / Founder &amp; CEO */}
                      </h5>

                      <div className="custom-readmore">
                        <p></p>
                        <p>
                          {item?.profile?.bio && (
                            <div className="team-card-info">
                              <SplitDescription des={item?.profile?.bio} />
                            </div>
                          )}
                        </p>
                      </div>

                      <ul>
                        <li>LICENSE NUMBER {item?.profile?.license}</li>
                        <li>
                          EMAIL <span>{item?.profile?.email}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {!item?.profile?.profilePic ? (
                      <img
                        className="img-fluid user-width"
                        src={`${process.env.imagePath}no-images.png`}
                        alt={item?.profile?.firstName}
                      />
                    ) : (
                      <img
                        className="img-fluid user-width"
                        src={item?.profile?.profilePic}
                        alt={item?.profile?.firstName}
                      />
                    )}
                  </div>
                  <div className="col-md-12">
                    <div className="custom-readless">
                      {item?.profile?.bio}
                      <a href="javascript:void(0)" className="readless">
                        Read less
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`addition ${item?._id}`}>
                  <AdditionalInfo dataId={item?._id} mainData={additionInfo} />
                </div>

                {/* <div className="team-list">
                  <h5>SPECIALITIES</h5>
                  <ul>
                    <li>Commercial</li>
                    <li>Luxury Residential</li>
                  </ul>
                </div>

                <div className="team-list">
                  <h5>Asset Type</h5>
                  <ul>
                    <li>Hospitality</li>
                    <li>Office</li>
                    <li>Land sales, acquisitions, and development</li>
                    <li>Multifamily</li>
                    <li>Industrial</li>
                  </ul>
                </div>

                <div className="team-list">
                  <h5>ACCREDITATIONS</h5>
                  <ul>
                    <li>Certified Negotiator</li>
                    <li>Closed over 200 REO transactions</li>
                    <li>Costar Powerbroker 2018</li>
                  </ul>
                </div>

                <div className="team-list border-none">
                  <h5>EDUCATION</h5>
                  <ul>
                    <li>
                      Bachelor of Business Administration from San Jose State
                      University
                    </li>
                  </ul>
                </div>

                <div className="custom-show-link">
                  <h5 className="available-txt">properties available</h5>
                  <a
                    href="/"
                    className="show-link"
                  >
                    show
                  </a>
                </div> */}
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Team;
