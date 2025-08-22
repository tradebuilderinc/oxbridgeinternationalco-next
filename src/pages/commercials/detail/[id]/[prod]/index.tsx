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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let credentials = {
    userId: process.env.userId,
    orgId: process.env.orgId,
    _id: ctx?.query?.id,
    listingId: ctx?.query?.prod,
  };

  const listing: any = await axiosHandler(
    axiosClient().post(
      `${process.env.API_HOST_ADMIN}/getSingleMyListing/properties`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify(credentials),
        },
      }
    )
  );

  let data;
  if (listing?.success) {
    data = {
      listing: listing?.data?.data[0],
      query: ctx?.query,
    };
  } else {
    data = {};
  }

  return {
    props: data,
  };
}

export default function Home({ ...props }) {
  const { listing, query } = props;

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

  console.log("listinglisting", listing);

  return (
    <>
      <HeaderInner></HeaderInner>

      <section className="lis-detail-box">
        <div className="min-container">
          <h3>
            {listing?.streetName}, {listing?.city}
          </h3>
          <div className="owl-carousel owl-theme detail-box">
            <div className="item">
              <div className="inner">
                <img
                  src={
                    listing?.photoUrls
                      ? listing?.photoUrls[0]
                      : "https://oxbridgeinternationalco.com/assets//images/noAvatar.png"
                  }
                  alt={listing?.streetName}
                  className="img-fluid"
                />

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
            <div className="talk-agent">
              <h4>talk to our agent</h4>

{/* <AgentInfo></AgentInfo> */}



              <img
                id="agentimg"
                src="https://oxbridgeinternationalco.com/assets/images/noAvatar.png"
                className="noagentimgdetailpage img-fluid imageLoader"
              />

              <h5 className="border">Steve Becerra</h5>

              <ul>
                <li>LICENSE NUMBER #00838722</li>

                <li>EMAIL sbecerra@oxbridgeinternationalco.com</li>

                <li>OFFICE </li>
                <li>
                  CELL <span className="phoneMask">4088916453</span>{" "}
                </li>
              </ul>

              <div className="form-box">
                <h5>I am interested in North First Street , CA </h5>

                <div id="mainform" className="pt-3">
                  <div className="success-message-becomeprovider alert alert-success"></div>
                  <div id="imli-form-9s4CRGtTMug7tXehQ">Loading...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
