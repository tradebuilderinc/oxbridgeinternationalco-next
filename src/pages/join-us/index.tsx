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
import { HeaderInner } from "@layouts/HeaderInner";
import PageMeta from "@components/PageMeta";


export default function Home({ ...props }) {
  const { widthType } = useWindowSize();
  useEffect(() => {
    AOS.init();
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
      <section className="join">
        <div className="min-container">
          <h5 className="main-title">JOIN US</h5>
          <h6 className="main-describ">We are a team of specialists who work hard each day to put our best foot forward. Our clients
            admire us for our zest, and we are sure you would too. Join us to embark on this path of personal excellence and
            experience the pleasure of working with some of the most skilled minds in the industry. </h6>
          <div className="main-box">
            <img src="/images/white-logo.png" className="img-fluid" />
            <p>Oxbridge empowers you to take your career to new heights</p>
          </div>
          <h5 className="inner-txt">Get an Oxbridge Edge:</h5>
          <ul className="inner-list">
            <li>
              Over 40 years of experience in Commercial Real Estate
            </li>
            <li>
              Build expertise in assets including hospitality, office, retail, multifamily, industrial
            </li>
            <li>
              Caters to best in className commercial, luxury residential, and land and development projects
            </li>
          </ul>
          <h5 className="inner-txt tem-tp">Services</h5>
        
          <p className="main-describ second-desc">Nothing can stop you if you have the will to outshine at every given job. Contact
            us to become a part of our team; we have plenty of opportunities waiting for you!
          </p>
          <div className="cta-join">
            <Link href="/contact" className="know-more">Join Us</Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
