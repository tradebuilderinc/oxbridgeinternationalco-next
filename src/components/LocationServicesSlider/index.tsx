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
import { useRouter } from "next/dist/client/router";

function LocationServices({ ...props }) {
  const [sliderData, setSliderData]: any = useState();


  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  useEffect(() => {
    if (props?.detail == "detail") {
      setSliderData(props?.data);
    } else {
      setSliderData(props?.details);
    }
  }, []);
  const router = useRouter();





  return (
    <>
      <div className="slidertypefirst services-slider locationslider pt-3 ">
        <div className="nosliderlengthh">
          <Slider {...settings}>
            {sliderData?.map((item: any, index: any) => (
              <div className="sersec">
                <div className="serviceimg">
                  {item.attributes.serviceType == "Group" && (
                    <Link
                      className="bcolor"
                      href={
                        item?.attributes?.pageUrl
                          ? `/locations/services/${
                              item?.attributes?.urlLocation &&
                              item?.attributes?.urlLocation !== "" &&
                              item?.attributes?.urlLocation !== undefined
                                ? item?.attributes?.urlLocation
                                : "group"
                            }/${router?.query?.id}/${
                              item?.attributes?.pageUrl
                            }`
                          : "#"
                      }
                    >
                      {item?.attributes?.featuredImage?.data && (
                        <img
                          className="img-fluid  b-radius"
                          src={
                            process.env.API_HOST_ADMIN +
                            item?.attributes?.featuredImage?.data?.attributes
                              ?.url
                          }
                          alt={item?.attributes?.title}
                          height="250"
                        />
                      )}
                      {!item?.attributes?.featuredImage?.data && (
                        <Image
                        src={`${process.env.imagePath}About.png`}
                           alt={item?.attributes?.title}
                        />
                      )}
                    </Link>
                  )}
                  {item.attributes.serviceType == "Single" && (
                    <>
                      {item?.attributes?.seo?.thirdParty ? (
                        <Link
                          className="servicelink"
                          href={
                            item?.attributes?.seo?.thirdParty
                              ? `/${item?.attributes?.seo?.thirdParty}`
                              : `/locations/service/${router?.query?.id}/${item?.attributes?.pageUrl}`
                          }
                        >
                          {item?.attributes?.featuredImage?.data[0]?.attributes
                            ?.url && (
                            <img
                              className="img-fluid  b-radius"
                              src={
                                process.env.API_HOST_ADMIN +
                                item?.attributes?.featuredImage?.data[0]
                                  ?.attributes?.url
                              }
                              alt={
                                item?.attributes?.featuredImage?.data[0]
                                  ?.attributes?.alternativeText
                              }
                              height="250"
                            />
                          )}

                          {item?.attributes?.featuredImage?.data?.attributes
                            ?.url && (
                            <img
                              className="img-fluid  b-radius"
                              src={
                                process.env.API_HOST_ADMIN +
                                item?.attributes?.featuredImage?.data
                                  ?.attributes?.url
                              }
                              alt={
                                item?.attributes?.featuredImage?.data
                                  ?.attributes?.alternativeText
                              }
                              height="250"
                            />
                          )}

                          {!item?.attributes?.featuredImage?.data[0]?.attributes
                            ?.url &&
                            !item?.attributes?.featuredImage?.data?.attributes
                              ?.url && (
                              <Image
                              src={`${process.env.imagePath}About.png`}
                                alt="smileselectdental"
                              />
                            )}
                        </Link>
                      ) : (
                        <Link
                          className="servicelink"
                          href={
                            item?.attributes?.pageUrl
                              ? `/locations/service/${router?.query?.id}/${item?.attributes?.pageUrl}`
                              : "#"
                          }
                        >
                          {item?.attributes?.featuredImage?.data[0]?.attributes
                            ?.url && (
                            <img
                              className="img-fluid  b-radius"
                              src={
                                process.env.API_HOST_ADMIN +
                                item?.attributes?.featuredImage?.data[0]
                                  ?.attributes?.url
                              }
                              alt={
                                item?.attributes?.featuredImage?.data[0]
                                  ?.attributes?.alternativeText
                              }
                              height="250"
                            />
                          )}

                          {item?.attributes?.featuredImage?.data?.attributes
                            ?.url && (
                            <img
                              className="img-fluid  b-radius"
                              src={
                                process.env.API_HOST_ADMIN +
                                item?.attributes?.featuredImage?.data
                                  ?.attributes?.url
                              }
                              alt={
                                item?.attributes?.featuredImage?.data
                                  ?.attributes?.alternativeText
                              }
                              height="250"
                            />
                          )}

                          {!item?.attributes?.featuredImage?.data[0]?.attributes
                            ?.url &&
                            !item?.attributes?.featuredImage?.data?.attributes
                              ?.url && (
                              <Image
                              src={`${process.env.imagePath}About.png`}
                                alt="smileselectdental"
                              />
                            )}
                        </Link>
                      )}
                    </>
                   
                  )}
                </div>
                {/* <div className="servicecont">
                  {item.attributes.serviceType == "Group" && (
                    <Link
                      className="bcolor"
                      href={
                        item?.attributes?.pageUrl
                          ? `/locations/services/${
                              item?.attributes?.urlLocation &&
                              item?.attributes?.urlLocation !== "" &&
                              item?.attributes?.urlLocation !== undefined
                                ? item?.attributes?.urlLocation
                                : "group"
                            }/${router?.query?.id}/${
                              item?.attributes?.pageUrl
                            }`
                          : "#"
                      }
                    >
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: item?.attributes?.sortTitle,
                        }}
                      ></h3>
                    </Link>
                  )}
                  {item.attributes.serviceType == "Single" && (
                    <>
                      {item?.attributes?.seo?.thirdParty ? (
                        <Link
                          className="servicelink"
                          href={
                            item?.attributes?.seo?.thirdParty
                              ? `/${item?.attributes?.seo?.thirdParty}`
                              : `/locations/service/${router?.query?.id}/${item?.attributes?.pageUrl}`
                          }
                        >
                          {item?.attributes?.serviceTitle && (
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: item?.attributes?.serviceTitle,
                              }}
                            ></h3>
                          )}
                          {!item?.attributes?.serviceTitle && (
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: item?.attributes?.sortTitle,
                              }}
                            ></h3>
                          )}
                        </Link>
                      ) : (
                        <Link
                          className="servicelink"
                          href={
                            item?.attributes?.pageUrl
                              ? `/locations/service/${router?.query?.id}/${item?.attributes?.pageUrl}`
                              : "#"
                          }
                        >
                          {item?.attributes?.serviceTitle && (
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: item?.attributes?.serviceTitle,
                              }}
                            ></h3>
                          )}
                          {!item?.attributes?.serviceTitle && (
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: item?.attributes?.sortTitle,
                              }}
                            ></h3>
                          )}
                        </Link>
                      )}
                    </>
                    // <Link
                    //   className="servicelink"
                    //   href={
                    //     item?.attributes?.seo?.URL
                    //       ? `/locations/service/${
                    //           item?.attributes?.seo?.URL
                    //         }?l=${router?.query?.l}&o=${
                    //           router?.query?.o
                    //             ? router?.query?.o
                    //             : router?.query?.id
                    //         }`
                    //       : "#"
                    //   }
                    // >
                    //   <h3
                    //     dangerouslySetInnerHTML={{
                    //       __html: item?.attributes?.sortTitle,
                    //     }}
                    //   ></h3>
                    // </Link>
                  )}
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default LocationServices;
