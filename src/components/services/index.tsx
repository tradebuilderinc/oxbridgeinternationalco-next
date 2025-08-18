import { apiBaseURL } from "@config/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { Image } from "react-bootstrap";

function Services({ ...props }) {
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

  return (
    <>
      <div className="services-slider">
        {sliderData?.map((item: any, index: any) => (
          <div className="col-md-4 ser-carousel" key={index}>
            <div className="gropserspacing">
              <div className="ser-car-img">
                <div className="imgstyle">
                  <Link
                    href={
                      item?.attributes?.pageUrl
                        ? item.attributes.serviceType == "Group"
                          ? "/services/group/" + item?.attributes?.pageUrl
                          : "/services/" + item?.attributes?.pageUrl
                        : "#"
                    }
                  >
                    {item?.attributes?.sliderImage?.data?.attributes?.url && (
                      <Image
                        className="img-fluid  b-radius"
                        src={
                          process.env.API_HOST_ADMIN +
                          item?.attributes?.sliderImage?.data?.attributes?.url
                        }
                        alt={
                          item?.attributes?.sliderImage?.data?.attributes
                            ?.alternativeText
                        }
                      />
                    )}

                    {!item?.attributes?.sliderImage?.data?.attributes?.url && (
                      <Image
                        src={`${process.env.imagePath}smileselectdental.png`}
                        alt={process.env.siteName}
                      />
                    )}
                  </Link>
                </div>
              </div>
              {/* <div className="ser-car-cont titlestyle">
                          <Link
                            href={
                              item?.attributes?.pageUrl
                                ? item.attributes.serviceType == "Group"
                                  ? "/services/group/" +
                                    item?.attributes?.pageUrl
                                  : "/services/" + item?.attributes?.pageUrl
                                : "#"
                            }
                          >
                            {item?.attributes?.serviceTitle && (
                              <div
                                className="ser-car-cont"
                                dangerouslySetInnerHTML={{
                                  __html: item?.attributes?.serviceTitle,
                                }}
                              ></div>
                            )}
                          </Link>
                        </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Services;
