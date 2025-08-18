import ReadableDate from "@components/helper/ReadableDate";
import SplitDescription from "@components/helper/splitDescription";
import { apiBaseURL } from "@config/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import FormatPrice from "@components/helper/FormatPrice";
import { Image } from "react-bootstrap";
import { axiosClient, axiosHandler } from "@utils/axios";
import { MdArrowOutward } from "react-icons/md";

function Locations({ ...props }) {
  /* Office */
  const [officeData, setOfficeData]: any = useState();

  async function primeryMenu() {
    const primery = await axiosHandler(
      axiosClient().get(
        `${process.env.API_HOST_ADMIN}/api/location-dropdown-menus?populate=*&populate=offices,offices.officeImage`
      )
    );

    setOfficeData(primery?.data);
  }
  useEffect(() => {
    primeryMenu();
  }, []);

  

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 1,
    mobileFirst: false,
    arrows: true,
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
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          arrow: true,
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

  let locationMain: any = [];

  for (let i: any = 0; i < officeData?.data?.length; i++) {
    // some code
    // locationMain[i].push(officeData?.data);
    for (
      let a: any = 0;
      a < officeData?.data[i]?.attributes?.offices?.length;
      a++
    ) {
      // locationMain[i + a].push('officeData?.data?.attributes?.Officeslength?.Offices[a]');

      locationMain = [
        ...locationMain,
        {
          stateName: officeData?.data[i]?.attributes?.locationUrl,
          locationName:
            officeData?.data[i]?.attributes?.offices[a]?.locationName,
          MainLocationName: officeData?.data[i]?.attributes?.MainLocationName,
          locationDescription:
            officeData?.data[i]?.attributes?.offices[a]?.locationDescription,
          locationAddress:
            officeData?.data[i]?.attributes?.offices[a]?.locationAddress,
          phoneWithCountryCode:
            officeData?.data[i]?.attributes?.offices[a]?.phoneWithCountryCode,
          phoneWithFormat:
            officeData?.data[i]?.attributes?.offices[a]?.phoneWithFormat,
          getDirection:
            officeData?.data[i]?.attributes?.offices[a]?.getDirection,
          locationUrl: officeData?.data[i]?.attributes?.offices[a]?.locationUrl,
          officeImage:
            officeData?.data[i]?.attributes?.offices[a]?.officeImage?.data
              ?.attributes?.url,

          openingHours:
            officeData?.data[i]?.attributes?.offices[a]?.openingHours,
        },
      ];
    }
  }





  return (
    <>
      <div className="slidertypefirst services-slider">
        <Slider {...settings}>
          {locationMain.map((item: any, index: any) => (
            <div className="sersec" key={index}>
              <div className="serviceimg">
                <Link
                  href={`/locations/${
                    item?.locationUrl ? item?.locationUrl : "#"
                  }`}
                >
                  {item?.officeImage && (
                    <img
                      className="img-fluid b-radius"
                      src={process.env.API_HOST_ADMIN + item?.officeImage}
                      alt={item?.locationName}
                      height="250"
                    />
                  )}

                  {!item?.officeImage && (
                    <img
                      className="img-fluid b-radius"
                      src={`${process.env.imagePath}About.png`}
                      height="250"
                    />
                  )}
                </Link>
              </div>
              {/* <div className="servicecont">
                <h3>{item?.locationName}</h3>
                <p>
                  {item?.locationAddress}
                  <br />{" "}
                  <Link
                    href={`tel:${
                      item?.phoneWithCountryCode
                        ? item?.phoneWithCountryCode
                        : "#"
                    }`}
                  >
                    {" "}
                    {item?.phoneWithFormat}
                  </Link>
                  <br />
                  {item?.openingHours}
                </p>
                <Link
                  className="readmore"
                  target="_blank"
                  href={item?.getDirection ? item?.getDirection : "#"}
                  // href={`/doctor/${item?._id}`}
                >
                  Get Direction
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default Locations;
