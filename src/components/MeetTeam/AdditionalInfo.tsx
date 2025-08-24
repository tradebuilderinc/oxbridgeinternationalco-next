import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { Image } from "react-bootstrap";
import { GetServerSidePropsContext } from "next";
import { apiBaseURL } from "@config/api";

function AdditionalInfo({ ...props }) {
  //   const [additionInfo, setAdditionInfo]: any = useState([]);
  // //   console.log("props", props);

  //   const Info = async (aid: any) => {
  //     const response = await fetch(
  //       `https://prod.imkloud.com/api/v1/user-groups/?apiKey=4MrokA3pBgjfsguf2M9aymTQDREqnE`,
  //       {
  //         method: "GET",
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );
  //     const faqdata = await response.json();
  //     setAdditionInfo(faqdata?.data[0]?.userData);
  //     console.log("faqdata", additionInfo);
  //   };

  const GlobalUser: any = props?.mainData.filter(
    (event: any) => event._id && props?.dataId
  );

  console.log("GlobalUser22", GlobalUser);
  // console.log("additionInfo", additionInfo);
  // console.log("GlobalUser", GlobalUser);

  //   useEffect(() => {
  //     if (props?.dataId) {
  //       Info(props?.dataId);
  //     }
  //   }, []);

  return (
    <>
      {GlobalUser &&
        GlobalUser?.map((item: any, index: any) => {
          return (
            <div className={`teammember2 ${item._id}`} key={index}>
              <div className="team-list">
                <h5>SPECIALITIES</h5>
                <ul>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item?.additionalInfo?.speciality}`,
                    }}
                  />
                </ul>
              </div>

              <div className="team-list">
                <h5>Asset Type</h5>
                <ul>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item?.additionalInfo?.assetType}`,
                    }}
                  />
                </ul>
              </div>

              <div className="team-list">
                <h5>ACCREDITATIONS</h5>
                <ul>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item?.additionalInfo?.accreditations}`,
                    }}
                  />
                </ul>
              </div>

              <div className="team-list border-none">
                <h5>EDUCATION</h5>
                <ul>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item?.additionalInfo?.education}`,
                    }}
                  />
                </ul>
              </div>

              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a href="/" className="show-link">
                  show
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
}
export default AdditionalInfo;
