import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdPhone } from "react-icons/md";
import { Image } from "react-bootstrap";
import { apiBaseURL } from "@config/api";
import FormatPrice from "@components/helper/FormatPrice";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import Slider from "react-slick";


function LandProperties({ ...props }) {
  const [list, setList] = useState([]);

  const ListingData = async () => {
    let credentials = {
      userId: process.env.userId,
      orgId: process.env.orgId,
      type: "photo",
      limit: 100,
      originatingSystemName: "myListings",
      skip: 0,
      filter: {
        uri: "listings",
        mlsStatus: "",
        propertySubType: ["Land"],
      },
    };

    const response = await fetch(`${apiBaseURL}/getAllMyListings/properties`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    console.log('data?.data', data);
    setList(data?.data);
  };

  useEffect(() => {
    ListingData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 2,
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
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };





  return (
    <>
      <div className="min-container home-list homeslide">
        <h5 className="main-ti">Oxbridge Listings</h5>
        <h6 className="main-pa">Land and Development</h6>

        <div className="pageinnercontent slidertypefirst">
          <Slider {...settings}>
            {list &&
              list?.slice(0, 30)?.map((item: any, index: any) => {
                return (
                  <div className="full" key={index}>
                    <div className="item">
                      <div className="inner">
                         <Link href={`lands/detail/${item?._id}/${item?.listingId}`}>
                          <div className="property-tag button alt featured">
                            {item?.mlsStatus}
                          </div>

                          <img
                            src={
                              item?.photo
                                ? item?.photo
                                : "https://oxbridgeinternationalco.com/assets//images/noAvatar.png"
                            }
                            alt={item?.city}
                            className="img-responsive imageLoader"
                          />
                        </Link>
                        <div className="img-info">
                          <h5>
                            {" "}
                            {item?.city}{" "}
                            {`${item?.stateOrProvince}${item?.postalCode}`}
                          </h5>
                          <h5>
                            <FormatPrice price={item?.listPrice} />
                          </h5>
                          <ul>
                            <li>{item?.propertySubType}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>

        <div className="d-flex justify-content-between bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <a
              href="/lands"
              className="listing-btn"
            >
              ALL LISTINGS
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { LandProperties };
