import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Header } from "@layouts/Header";
import { Footer } from "@layouts/Footer";
import { GetServerSidePropsContext } from "next";
import { axiosClient, axiosHandler } from "@utils/axios";
import { ListingData } from "@components/ListingData/Index";
import Bookappointment from "@components/bookappointment";
import PageMeta from "@components/PageMeta";

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
      minPrice: ctx?.query?.minPrice ? ctx?.query?.minPrice : "",
      maxPrice: ctx?.query?.maxPrice ? ctx?.query?.maxPrice : "",

      uri: "listings",
      propertySubType: ["Residential"],
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

  const [selectedProperty, setSelectedProperty] = useState("residentials");
  const [selectedCountry, setSelectedCountry] = useState("united states");
  const [selectedCity, setSelectedCity] = useState(query?.city);

  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");

  const handleChange = (event: any) => {
    setSelectedProperty(event.target.value); // Update state with the selected value
  };
  const handleCity = (event: any) => {
    setSelectedCity(event.target.value); // Update state with the selected value
  };

  const handleMinPrice = (event: any) => {
    setMinPrice(event.target.value); // Update state with the selected value
  };

  const handleMaxPrice = (event: any) => {
    setMaxPrice(event.target.value); // Update state with the selected value
  };

  console.log("event", selectedCity);

  return (
    <>
      <PageMeta />
      <Header></Header>

      <div className="select-list home-select-list" id="searchmain">
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
                    <option selected value="residentials">
                      Lands and Projects
                    </option>
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

              {/*  */}

              <div className="col-md-4">
                <div className="select-box">
                  <select
                    className="form-control"
                    name="min"
                    value={minPrice}
                    onChange={handleMinPrice}
                  >
                    <option value="">Price Min</option>
                    <option value="25000">$25,000</option>
                    <option value="50000">$50,000</option>
                    <option value="75000">$75,000</option>
                    <option value="100000">$100,000</option>
                    <option value="125000">$125,000</option>
                    <option value="150000">$150,000</option>
                    <option value="175000">$175,000</option>
                    <option value="200000">$200,000</option>
                    <option value="225000">$225,000</option>
                    <option value="250000">$250,000</option>
                    <option value="275000">$275,000</option>
                    <option value="300000">$300,000</option>
                    <option value="325000">$325,000</option>
                    <option value="350000">$350,000</option>
                    <option value="375000">$375,000</option>
                    <option value="400000">$400,000</option>
                    <option value="425000">$425,000</option>
                    <option value="450000">$450,000</option>
                    <option value="475000">$475,000</option>
                    <option value="500000">$500,000</option>
                    <option value="525000">$525,000</option>
                    <option value="550000">$550,000</option>
                    <option value="575000">$575,000</option>
                    <option value="600000">$600,000</option>
                    <option value="625000">$625,000</option>
                    <option value="650000">$650,000</option>
                    <option value="675000">$675,000</option>
                    <option value="700000">$700,000</option>
                    <option value="725000">$725,000</option>
                    <option value="750000">$750,000</option>
                    <option value="775000">$775,000</option>
                    <option value="800000">$800,000</option>
                    <option value="825000">$825,000</option>
                    <option value="850000">$850,000</option>
                    <option value="875000">$875,000</option>
                    <option value="900000">$900,000</option>
                    <option value="925000">$925,000</option>
                    <option value="950000">$950,000</option>
                    <option value="975000">$975,000</option>
                    <option value="1000000">$1,000,000</option>
                    <option value="1100000">$1,100,000</option>
                    <option value="1200000">$1,200,000</option>
                    <option value="1250000">$1,250,000</option>
                    <option value="1300000">$1,300,000</option>
                    <option value="1400000">$1,400,000</option>
                    <option value="1500000">$1,500,000</option>
                    <option value="1600000">$1,600,000</option>
                    <option value="1700000">$1,700,000</option>
                    <option value="1750000">$1,750,000</option>
                    <option value="1800000">$1,800,000</option>
                    <option value="1900000">$1,900,000</option>
                    <option value="2000000">$2,000,000</option>
                    <option value="2250000">$2,250,000</option>
                    <option value="2500000">$2,500,000</option>
                    <option value="2750000">$2,750,000</option>
                    <option value="3000000">$3,000,000</option>
                    <option value="3250000">$3,250,000</option>
                    <option value="3500000">$3,500,000</option>
                    <option value="3750000">$3,750,000</option>
                    <option value="4000000">$4,000,000</option>
                    <option value="4250000">$4,250,000</option>
                    <option value="4500000">$4,500,000</option>
                    <option value="4750000">$4,750,000</option>
                    <option value="5000000">$5,000,000</option>
                    <option value="6000000">$6,000,000</option>
                    <option value="7000000">$7,000,000</option>
                    <option value="8000000">$8,000,000</option>
                    <option value="9000000">$9,000,000</option>
                    <option value="10000000">$10,000,000</option>
                    <option value="15000000">$15,000,000</option>
                    <option value="20000000">$20,000,000</option>
                    <option value="25000000">$25,000,000</option>
                    <option value="30000000">$30,000,000</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="select-box">
                  <select
                    className="form-control"
                    name="min"
                    value={maxPrice}
                    onChange={handleMaxPrice}
                  >
                    <option value="">Price Max</option>
                    <option value="25000">$25,000</option>
                    <option value="50000">$50,000</option>
                    <option value="75000">$75,000</option>
                    <option value="100000">$100,000</option>
                    <option value="125000">$125,000</option>
                    <option value="150000">$150,000</option>
                    <option value="175000">$175,000</option>
                    <option value="200000">$200,000</option>
                    <option value="225000">$225,000</option>
                    <option value="250000">$250,000</option>
                    <option value="275000">$275,000</option>
                    <option value="300000">$300,000</option>
                    <option value="325000">$325,000</option>
                    <option value="350000">$350,000</option>
                    <option value="375000">$375,000</option>
                    <option value="400000">$400,000</option>
                    <option value="425000">$425,000</option>
                    <option value="450000">$450,000</option>
                    <option value="475000">$475,000</option>
                    <option value="500000">$500,000</option>
                    <option value="525000">$525,000</option>
                    <option value="550000">$550,000</option>
                    <option value="575000">$575,000</option>
                    <option value="600000">$600,000</option>
                    <option value="625000">$625,000</option>
                    <option value="650000">$650,000</option>
                    <option value="675000">$675,000</option>
                    <option value="700000">$700,000</option>
                    <option value="725000">$725,000</option>
                    <option value="750000">$750,000</option>
                    <option value="775000">$775,000</option>
                    <option value="800000">$800,000</option>
                    <option value="825000">$825,000</option>
                    <option value="850000">$850,000</option>
                    <option value="875000">$875,000</option>
                    <option value="900000">$900,000</option>
                    <option value="925000">$925,000</option>
                    <option value="950000">$950,000</option>
                    <option value="975000">$975,000</option>
                    <option value="1000000">$1,000,000</option>
                    <option value="1100000">$1,100,000</option>
                    <option value="1200000">$1,200,000</option>
                    <option value="1250000">$1,250,000</option>
                    <option value="1300000">$1,300,000</option>
                    <option value="1400000">$1,400,000</option>
                    <option value="1500000">$1,500,000</option>
                    <option value="1600000">$1,600,000</option>
                    <option value="1700000">$1,700,000</option>
                    <option value="1750000">$1,750,000</option>
                    <option value="1800000">$1,800,000</option>
                    <option value="1900000">$1,900,000</option>
                    <option value="2000000">$2,000,000</option>
                    <option value="2250000">$2,250,000</option>
                    <option value="2500000">$2,500,000</option>
                    <option value="2750000">$2,750,000</option>
                    <option value="3000000">$3,000,000</option>
                    <option value="3250000">$3,250,000</option>
                    <option value="3500000">$3,500,000</option>
                    <option value="3750000">$3,750,000</option>
                    <option value="4000000">$4,000,000</option>
                    <option value="4250000">$4,250,000</option>
                    <option value="4500000">$4,500,000</option>
                    <option value="4750000">$4,750,000</option>
                    <option value="5000000">$5,000,000</option>
                    <option value="6000000">$6,000,000</option>
                    <option value="7000000">$7,000,000</option>
                    <option value="8000000">$8,000,000</option>
                    <option value="9000000">$9,000,000</option>
                    <option value="10000000">$10,000,000</option>
                    <option value="15000000">$15,000,000</option>
                    <option value="20000000">$20,000,000</option>
                    <option value="25000000">$25,000,000</option>
                    <option value="30000000">$30,000,000</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                {/* <button
                  type="button"
                  className="button"
                  id="homepropertybutton"
                >
                  Go
                </button> */}
                <Link
                  href={`/${selectedProperty}?city=${
                    selectedCity ? selectedCity : ""
                  }&minPrice=${minPrice ? minPrice : ""}&maxPrice=${
                    maxPrice ? maxPrice : ""
                  }&country=${
                    selectedCountry ? selectedCountry : "united states"
                  }#searchmain`}
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

      <div className="min-container home-list featured-homelist">
        {/* <h5 className="main-ti">Oxbridge Listings</h5>
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
        </div> */}

        <div id="member_table2">
          <div className="rooms">
            <ListingData data={listing} page="residentials" />
          </div>
        </div>
      </div>

      <Bookappointment></Bookappointment>

      <Footer></Footer>
    </>
  );
}
