import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Header } from "@layouts/Header";
import { Footer } from "@layouts/Footer";
import Insight from "@components/blog/insight";
import { useWindowSize } from "@hooks/useWindowSizeNew";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import AOS from "aos";
import Slider from "react-slick";
import ReviewSlider from "@components/reviewSlider";
import { Listing } from "@components/Listing/Index";
import { GetServerSidePropsContext } from "next";
import { axiosClient, axiosHandler } from "@utils/axios";
import { ListingData } from "@components/ListingData/Index";
import Bookappointment from "@components/bookappointment";
import { HeaderInner } from "@layouts/HeaderInner";
import FormatPrice from "@components/helper/FormatPrice";
import AgentInfo from "@components/AgentInfo";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let credentials2 = {
    userId: process.env.userId,
    orgId: process.env.orgId,
    _id: ctx?.query?.id,
    listingId: ctx?.query?.prod,
  };

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
      country: "united states",
    },
  };

  const Alllisting: any = await axiosHandler(
    axiosClient().post(
      `${process.env.API_HOST_ADMIN}/getAllMyListings/properties`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify(credentials),
        },
      }
    )
  );

  const listing: any = await axiosHandler(
    axiosClient().post(
      `${process.env.API_HOST_ADMIN}/getSingleMyListing/properties`,
      credentials2,
      {
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify(credentials2),
        },
      }
    )
  );

  console.log("listing?.data", listing);

  let data;
  if (listing?.success) {
    data = {
      listing: listing?.data?.data[0],
      query: ctx?.query,
      Alllisting: Alllisting?.data,
    };
  } else {
    data = {};
  }

  return {
    props: data,
  };
}

export default function Home({ ...props }) {
  const { listing, query, Alllisting } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/talktoouragent.js";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => setIsLoaded(false);
    script.onerror = () => setError(true);
    return () => {
      document.head.removeChild(script);
    };
  }, ["/js/talktoouragent.js"]);

  console.log("Alllisting", Alllisting);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
      arrow: true,
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
          dots: false,
          arrow: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrow: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrow: true,
        },
      },
    ],
  };

  var settingLists = {
    dots: false,
     arrow: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 1,
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
          slidesToShow: 1,
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
      <HeaderInner></HeaderInner>

  

      <section className="lis-detail-box  slidertypefirst  homeblog bluebg  blogbg ">
        <div className="min-container">
          <h3>
            {listing?.streetName}, {listing?.city}
          </h3>
          <div className="owl-carousel owl-theme detail-box">
            <div className="item">
              <div className="inner">
                {listing?.photoUrls?.length >= 2 ? (
                  <>
                    <Slider {...settingLists}>
                      {listing?.photoUrls &&
                        listing?.photoUrls?.map((item: any, index: any) => {
                          return (
                            <div key={index}>
                              <img
                                src={item}
                                alt={listing?.streetName}
                                className="img-fluid"
                              />
                            </div>
                          );
                        })}
                    </Slider>
                  </>
                ) : (
                  <>
                    {" "}
                    <img
                      src={
                        listing?.photoUrls
                          ? listing?.photoUrls[0]
                          : "/images/noAvatar.png"
                      }
                      alt={listing?.streetName}
                      className="img-fluid"
                    />
                  </>
                )}

                <div className="img-txt">
                  <div className="d-flex justify-content-between bd-highlight mb-3">
                    <span className="second">{listing?.mlsStatus}</span>
                  </div>
                </div>

                <h6>
                  {" "}
                  {listing?.streetName}, {listing?.stateOrProvince}{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-container property-type">
        <div className="row">
          <div className="col-md-7">
            <div className="first-box border">
              <h5>property type</h5>
              <h6>{listing?.propertySubType}</h6>
            </div>

            <div className="first-box border">
              <h5>property status</h5>
              <h6>{listing?.mlsStatus}</h6>
            </div>

            <div className="second-box border">
              <h5>features</h5>
              {listing?.publicRemarks}
            </div>

            <div className="second-box">
              <h5>specifications</h5>
              <p> {listing?.salesNotes}</p>
            </div>
          </div>
          <div className="col-md-5">
  <AgentInfo></AgentInfo>  

       
          </div>
        </div>
      </section>

      <section className="blog-news slidertypesecond  homeblog bluebg  blogbg">
        <div className="min-container">
          <h3>SIMILAR Properties</h3>
          <div className="pageinnercontent ">
            <div className="hblogsec">
              {Alllisting?.total >= 2 ? (
                <Slider {...settings}>
                  {Alllisting?.data &&
                    Alllisting?.data?.map((item: any, index: any) => {
                      return (
                        <div className="blogsec" key={index}>
                          <Link
                            href={`/commercials/detail/${item?._id}/${item?.listingId}`}
                          >
                            <div className="mainblog">
                              <div className="serviceDesc">
                                <div className="card">
                                  <img
                                    src={
                                      item?.photo
                                        ? item?.photo
                                       : "/images/noAvatar.png"
                                    }
                                    alt={item?.city}
                                    className="img-responsive imageLoader"
                                  />
                                  <div className="card-body">
                                    <div className="text-info">
                                      {item?.propertySubType}
                                      <h4>Pescadero, CA 94060</h4>
                                      <p>
                                        {item?.listPrice == "0" ||
                                        item?.listPrice == "1" ||
                                        item?.listPrice == "00" ||
                                        item?.listPrice == 0 ? (
                                          <span>
                                          <br/>  Call for Price
                                          </span>
                                        ) : (
                                          <FormatPrice
                                            price={item?.listPrice}
                                          />
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </Slider>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
