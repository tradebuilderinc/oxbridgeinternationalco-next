import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Header } from "@layouts/Header";
import { Footer } from "@layouts/Footer";
import Insight from "@components/blog/insight";
import { useWindowSize } from "@hooks/useWindowSizeNew";
import ReviewSlider from "@components/reviewSlider";
import { Listing } from "@components/Listing/Index";
import Bookappointment from "@components/bookappointment";
import { LandProperties } from "@components/Listing/land";
import PageMeta from "@components/PageMeta";

export default function Home({ ...props }) {
  const [selectedProperty, setSelectedProperty] = useState("commercials");
  const [selectedCountry, setSelectedCountry] = useState("united states");
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event: any) => {
    setSelectedProperty(event.target.value); // Update state with the selected value
  };

  const handleCity = (event: any) => {
    setSelectedCity(event.target.value); // Update state with the selected value
  };

  return (
    <>
      <PageMeta />

      <Header></Header>

      <div className="select-list home-select-list">
        <div className="min-container">
          <form className="search-form">
            <div className="row">
              <div className="col-md-4">
                <div className="select-box">
                  <select
                    className="form-control"
                    value={selectedProperty}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Property Type
                    </option>
                    <option value="commercials">Commercial</option>
                    <option value="residentials">Lands and Projects</option>
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
                  <select
                    className="form-control"
                    name="city"
                    value={selectedCity}
                    onChange={handleCity}
                  >
                    <option value="">Select City</option>
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
                <Link
                  href={`/${selectedProperty}?city=${selectedCity}&country=${selectedCountry}`}
                  className="button"
                  id="homepropertybutton"
                >
                  Go
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Listing />

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

      <LandProperties />

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

      <Bookappointment></Bookappointment>

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
