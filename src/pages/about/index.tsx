import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Footer } from "@layouts/Footer";

import { useWindowSize } from "@hooks/useWindowSizeNew";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";

import Slider from "react-slick";
import ReviewSlider from "@components/reviewSlider";
import { Listing } from "@components/Listing/Index";
import { HeaderInner } from "@layouts/HeaderInner";
import PageMeta from "@components/PageMeta";

export default function Home({ ...props }) {
  const { widthType } = useWindowSize();


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

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/contact.js";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => setIsLoaded(false);
    script.onerror = () => setError(true);
    return () => {
      document.head.removeChild(script);
    };
  }, ["/js/contact.js"]);

  return (
    <>
      <PageMeta />
      <HeaderInner></HeaderInner>

      <section className="about">
        <div className="min-container">
          <div className="img-txt">
            <img src="/images/about.jpg" className="img-fluid" />
            <h5>Oxbridge</h5>
            <h6>international co.</h6>
          </div>

          <p className="second">
            The landscape of the Commercial Real Estate market is vastly
            changing. Oxbridge International Co. is the latest and remarkable
            part of this development. With over 40 years of experience in our
            brokerage arena, we have developed International Network
            Syndications expanding in China, United Kingdom, and Dubai. Our team
            consists of expert negotiators who specialize in asset classNamees
            like hospitality, office, retail, multifamily, industrial and land
            and development. We utilize the latest technology and data to
            analyze and predict market trends to optimize returns for our
            clients.
          </p>
          <p className="second">
            Oxbridge International Co. engages their international and domestic
            affiliates to help secure ties and alliances in all global markets.
            We also have established domestic affiliations including Austin,
            Chicago, Seattle, and Miami. Over the years our team members have
            been a vital source for acquisitions and portfolio management for
            our international and domestic clients.{" "}
          </p>

          <p className="second">
            Commercial Real Estate is going to reach newer heights in the coming
            years. If you desire to maximize or expand your real estate
            portfolio, allow Oxbridge International to become an integral part
            of your team.{" "}
          </p>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
