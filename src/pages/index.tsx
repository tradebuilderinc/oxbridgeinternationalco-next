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

  return (
    <>
      <Header></Header>

      <div className="select-list home-select-list">
        <div className="min-container">
          <form className="search-form">
            <div className="row">
              <div className="col-md-4">
                <div className="select-box">
                  <select className="form-control" id="homeprotype">
                    <option value="" disabled>
                      Property Type
                    </option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Lands and Projects</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="select-box">
                  <select
                    className="form-control"
                    name="country"
                    id="homeprocountry"
                  >
                    <option value="" disabled>
                      Country
                    </option>
                    <option value="united states" selected>
                      united states
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="select-box">
                  <select className="form-control" name="city" id="homeprocity">
                    <option value="San Jose">San Jose</option>
                    <option value="Burlingame">Burlingame</option>
                    <option value="Palo Alto">Palo Alto</option>
                    <option value="Ono">Ono</option>
                    <option value="Hayward">Hayward</option>
                    <option value="Half Moon Bay">Half Moon Bay</option>
                    <option value="Morgan Hill">Morgan Hill</option>
                    <option value="Pescadero">Pescadero</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Cottonwood">Cottonwood</option>
                    <option value="Monrovia">Monrovia</option>
                    <option value="Oakhurst, CA">Oakhurst, CA</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <button
                  type="button"
                  className="button"
                  id="homepropertybutton"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="min-container home-list featured-homelist">
        <h5 className="main-ti">Oxbridge Listings</h5>
        <h6 className="main-pa">COMMERCIAL</h6>

        <div className="selectboxx">
          <select>
            <option value="Active">Active Listings</option>
            <option value="">All Listings</option>
            <option value="Sale Pending">Pending/InContract</option>
            <option value="Recently Sold">Recently Sold</option>
            <option value="Closed">Off Market</option>
            <option value="Featured">Featured</option>
          </select>
        </div>

        <div id="member_table2">
          <div className="rooms">

<Listing/>


            
          </div>
        </div>

        <div className="d-flex justify-content-between bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <a href="/commercials" className="listing-btn">
              ALL LISTINGS
            </a>
          </div>
        </div>
      </div>

      <section className="meet-team">
        <div className="container">
          <div className="row">
            <div className="col-md-4 hometeam">
              <div className="team-img teamorder0">
                <img
                  src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1615467990069"
                  className="img-fluid"
                />
                <span>Steve Becerra / Founder &amp; CEO</span>
              </div>

              <div className="team-img teamorder1">
                <img
                  src="https://imk.storage.googleapis.com/file/rFbv8364wyXCthuZS/file_file_1613768785731"
                  className="img-fluid"
                />
                <span>Rachel Becerra / President</span>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/images/white-logo.png" className="img-fluid user" />
              <p className="p">
                “Great things in a business are never done by one person. They
                are done by a team of people.”
              </p>
              <p>
                Our team of experts are experienced, proficient and believe in
                giving the best outputs. We have scaled and delivered projects
                for some established brands across industries.
              </p>
              <Link href="/team" className="team-btn">
                MEET THE TEAM
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="min-container home-list homeslide">
        <h5 className="main-ti">Oxbridge Listings</h5>
        <h6 className="main-pa">Land and Development</h6>

        <div className="pageinnercontent slidertypefirst">
          <Slider {...settings}>
            <div className="propList">
              <div className="item">
                <div className="inner">
                  <a href="https://www.oxbridgeinternationalco.com/lands/detail/DhRZKs59pFr4CfjH8/MYL1613881733593">
                    <div className="property-tag button alt featured">
                      pending
                    </div>
                    <img
                      src="https://eauto.storage.googleapis.com/rFbv8364wyXCthuZS/img_ZknYC/file_hayward---rendering2.jpg"
                      data-src="https://eauto.storage.googleapis.com/rFbv8364wyXCthuZS/img_ZknYC/file_hayward---rendering2.jpg"
                      alt="29312 Mission Blvd &amp; 648 Overhill Dr.  Hayward "
                      className="img-responsive imageLoader"
                    />
                  </a>
                  <div className="img-info">
                    <h5> Hayward ,CA 94544</h5>
                    <h5>$13,000,000</h5>
                    <ul>
                      <li>Land</li>|<li>Development Project</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="propList">
              <div className="item">
                <div className="inner">
                  <a href="https://www.oxbridgeinternationalco.com/lands/detail/EbLcZgFo2Sfa5y6qP/MYL1613876870824">
                    <div className="property-tag button alt featured">
                      active
                    </div>
                    <img
                      src="https://eauto.storage.googleapis.com/STfP6amrXCQrctzSX/img_xDTHf/file_79915_CVR-Pic-69.jpg"
                      data-src="https://eauto.storage.googleapis.com/STfP6amrXCQrctzSX/img_xDTHf/file_79915_CVR-Pic-69.jpg"
                      alt="00 Beauregard Rd San Jose"
                      className="img-responsive imageLoader"
                    />
                  </a>
                  <div className="img-info">
                    <h5> San Jose,CA95140</h5>
                    <h5>$21,000,000</h5>
                    <ul>
                      <li>Land</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="propList">
              <div className="item">
                <div className="inner">
                  <a href="https://www.oxbridgeinternationalco.com/lands/detail/YsnsxrjRzXEbb7TW5/MYL1684188561576">
                    <div className="property-tag button alt featured">
                      closed
                    </div>
                    <img
                      src="https://eauto.storage.googleapis.com/rFbv8364wyXCthuZS/img_xAEmZ/file_Woodward Pic 1.jpg"
                      data-src="https://eauto.storage.googleapis.com/rFbv8364wyXCthuZS/img_xAEmZ/file_Woodward Pic 1.jpg"
                      alt="Finley Ridge  Morgan Hill "
                      className="img-responsive imageLoader"
                    />
                  </a>
                  <div className="img-info">
                    <h5> Morgan Hill ,CA95037</h5>
                    <h5>$3,888,000</h5>
                    <ul>
                      <li>Land</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="propList">
              <div className="item">
                <div className="inner">
                  <a href="https://www.oxbridgeinternationalco.com/lands/detail/ZgSGkg5NqQucu9drT/MYL1620931483059">
                    <div className="property-tag button alt featured">
                      closed
                    </div>
                    <img
                      src="https://eauto.storage.googleapis.com/rFbv8364wyXCthuZS/img_Z9sZ7/file_PIC 4.jpg"
                      data-src="https://eauto.storage.googleapis.com/rFbv8364wyXCthuZS/img_Z9sZ7/file_PIC 4.jpg"
                      alt="Uvas Road Morgan Hill"
                      className="img-responsive imageLoader"
                    />
                  </a>
                  <div className="img-info">
                    <h5> Morgan Hill,CA95037</h5>
                    <h5>$6,800,000</h5>
                    <ul>
                      <li>Land</li>|<li>Ranch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="propList">
              <div className="item">
                <div className="inner">
                  <a href="https://www.oxbridgeinternationalco.com/lands/detail/gLErCMcWJJkWEzrjc/MYL1613878788568">
                    <div className="property-tag button alt featured">
                      active
                    </div>
                    <img
                      src="https://eauto.storage.googleapis.com/rFbv8364wyXCthuZS/img_bR2Ty/file_Cottonwood  (50 of 92).jpg"
                      data-src="https://eauto.storage.googleapis.com/rFbv8364wyXCthuZS/img_bR2Ty/file_Cottonwood  (50 of 92).jpg"
                      alt="McAuliffe Family Ranch  Ono "
                      className="img-responsive imageLoader"
                    />
                  </a>
                  <div className="img-info">
                    <h5> Ono ,CA </h5>
                    <h5>$18,900,000</h5>
                    <ul>
                      <li>Land</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="d-flex justify-content-between bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <a
              href="https://www.oxbridgeinternationalco.com/lands"
              className="listing-btn"
            >
              ALL LISTINGS
            </a>
          </div>
        </div>
      </div>

      <section className="review">
        <div className="container">
          <h4>Testimonials</h4>
          <div className="pageinnercontent slidertypefirst">
            <ReviewSlider></ReviewSlider>
          </div>
        </div>
      </section>

      <section className="video">
        <div className="min-container">
          <h3>VIRTUAL REAL ESTATE TOUR</h3>
          <div className="row">
            <div className="col-md-5">
              <img
                src="/images/Oxbridge-min.png"
                className="img-fluid video-pic"
              />
            </div>
            <div className="col-md-6">
              <p>
                Take a virtual tour of our latest property to get a real-life
                experience. This video will explain details of the space through
                3D graphics to help you understand the utilization of the area.
              </p>
              <div className="follow-us">
                <h5>To stay updated on real estate news and insights,</h5>
                <h5>follow us on</h5>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/76742267/admin/"
                      target="_blank"
                    >
                      <img src="/images/linked.png" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/oxbridgeintco/"
                      target="_blank"
                    >
                      <img src="/images/insta.png" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/Oxbridge-International-Co-110421454470740"
                      target="_blank"
                    >
                      <img src="/images/facebook.png" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/OxbridgeIntCo" target="_blank">
                      <img src="/images/twitt.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book-appointment">
        <div className="container">
          <div className="inner">
            <h3>SCHEDULE AN APPOINTMENT</h3>
            <form id="appointmentForm" className="has-validation-callback">
              <div className="alert hidden" id="appointment-message"></div>
              <div className="form-group has-error">
                <input
                  type="text"
                  className="form-control error"
                  placeholder="Name"
                  name="firstName"
                  data-validation="required"
                  style={{ borderColor: " rgb(185, 74, 72)" }}
                />
                <span className="help-block form-error">
                  This is a required field
                </span>
              </div>
              <div className="form-group has-error">
                <input
                  type="text"
                  className="form-control error"
                  placeholder="Email Address"
                  data-validation="email"
                  name="emailId"
                  style={{ borderColor: " rgb(185, 74, 72)" }}
                />
                <span className="help-block form-error">
                  You have not given a correct e-mail address
                </span>
              </div>
              <div className="form-group has-error">
                <input
                  type="text"
                  className="form-control phoneMask error"
                  placeholder="Cellphone Number"
                  name="contactNumber"
                  data-force-validation-if-hidden="true"
                  data-validation="required, custom"
                  data-validation-regexp="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
                  style={{ borderColor: " rgb(185, 74, 72)" }}
                />
                <span className="help-block form-error">
                  This is a required field
                </span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="message"
                />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="message1" />
              </div>
              <button type="submit">SCHEDULE NOW</button>
            </form>
          </div>
        </div>
      </section>

      <section className="blog-news slidertypesecond  homeblog bluebg  blogbg">
        <div className="min-container">
          <h3>news &amp; blogs</h3>
          <div className="pageinnercontent ">
            {" "}
            <Insight />
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
