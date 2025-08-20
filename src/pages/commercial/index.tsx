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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  console.log("ctx", ctx?.query?.city);

  let proCity: any;

  if (ctx?.query?.city) {
    proCity = ctx?.query?.city;
  } else {
    proCity = "";
  }

  let credentials = {
    userId: process.env.userId,
    orgId: process.env.orgId,
    type: "photo",
    limit: 100,
    originatingSystemName: "myListings",
    skip: 0,
    filter: {
      uri: "listings",
      propertySubType: [
        "Industrial",
        "Office",
        "Hotel & Motel",
        "Land",
        "Agricultural",
        "Multi-Family",
      ],
      city: ctx?.query?.city,
      country: "united states",
    },
  };

  const listing: any = await axiosHandler(
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

  let data;
  if (listing?.success) {
    data = {
      listing: listing?.data,
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
    script.src = "/js/contact.js";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => setIsLoaded(false);
    script.onerror = () => setError(true);
    return () => {
      document.head.removeChild(script);
    };
  }, ["/js/contact.js"]);

  const [selectedProperty, setSelectedProperty] = useState("commercial");
  const [selectedCountry, setSelectedCountry] = useState("united states");
  const [selectedCity, setSelectedCity] = useState(query?.city);
  const handleChange = (event: any) => {
    setSelectedProperty(event.target.value); // Update state with the selected value
  };
  const handleCity = (event: any) => {
    setSelectedCity(event.target.value); // Update state with the selected value
  };

  console.log("selectedCity", selectedCity);

  return (
    <>
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
                    <option value="commercial">Commercial</option>
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
                {/* <button
                  type="button"
                  className="button"
                  id="homepropertybutton"
                >
                  Go
                </button> */}
                <a
                  href={`/${selectedProperty}?city=${selectedCity}&country=${selectedCountry}`}
                  className="button"
                  id="homepropertybutton"
                >
                  Go
                </a>
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
            <ListingData data={listing} />
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

 <Bookappointment></Bookappointment>

      <Footer></Footer>
    </>
  );
}
