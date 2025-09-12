import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Header } from "@layouts/Header";
import { Footer } from "@layouts/Footer";
import { GetServerSidePropsContext } from "next";
import { axiosClient, axiosHandler } from "@utils/axios";
import { ListingData } from "@components/ListingData/Index";
import Bookappointment from "@components/bookappointment";
import { MainNav } from "@layouts/Header/Nav";
import Insight from "@components/blog/insight";
import PageMeta from "@components/PageMeta";
import { Listing } from "@components/Listing/Index";
import { ListingWithFilter } from "@components/ListingWithFilter/Index";

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
      mlsStatus: "active",
      propertySubType: [
        "Industrial",
        "Retail",
        "Office",
        "Hotel & Motel",
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

  console.log('listing', listing?.data);

  let data;
  if (listing?.success) {
    data = {
      listing: listing?.data,
       query: ctx?.query,
       //credentials: credentials,
    };
  } else {
    data = {};
  }

  return {
    props: data,
  };
}

export default function Home({ ...props }) {

  const { listing, query, credentials } = props;
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

  const [selectedProperty, setSelectedProperty] = useState("commercials");
  const [selectedCountry, setSelectedCountry] = useState("united states");

  const [selectedCity, setSelectedCity] = useState(query?.city);

  const handleChange = (event: any) => {
    setSelectedProperty(event.target.value); // Update state with the selected value
  };
  const handleCity = (event: any) => {
    setSelectedCity(event.target.value); // Update state with the selected value
  };

  // console.log("selectedCity", selectedCity);

  return (
    <>
      {/* <Header></Header> */}

      <PageMeta />
      <header className="commercial-bg ddd">
        <MainNav></MainNav>
        <div className="main-heading">COMMERCIAL</div>
        <div className="view">
          <div className="container">
            <span className="first">VIEW OUR LISTINGS</span>
            <span className="second">LIST WITH US</span>
          </div>
        </div>
      </header>

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

      <ListingWithFilter listingData={props} />

      <section className="custom-crausal comm-5">
        <div className="min-container">
          <h3>SERVICES</h3>

          <div className="row">
            <div className="col-xl-4 serviceDesc">
              <Link href="/commercials">
                <div className="card">
                  <img
                    src="images/commercial-min.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="text-info">
                      <h4>Commercial</h4>
                      <p>
                        Join Oxbridge's Advisory Team that specializes in
                        Commercial Real Estate.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 serviceDesc">
              <Link href="/lands">
                <div className="card">
                  <img
                    src="images/Land and Projects.jpg"
                    className="img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <div className="text-info">
                      <h4>Land and Development</h4>
                      <p>
                        Join Oxbridge's Land and Development Team if that is
                        your passion.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Bookappointment></Bookappointment>

      <section className="blog-news slidertypesecond  homeblog bluebg  blogbg mb-5">
        <div className="min-container">
          <h3>news &amp; blogs</h3>
          <div className="pageinnercontent ">
            {" "}
            <Insight />
          </div>
        </div>
      </section>

      <section className="custom-crausal join">
        <div className="min-container">
          <h5 className="inner-txt">Get an Oxbridge Edge:</h5>
          <ul className="inner-list">
            <li>Over 40 years of experience in Commercial Real Estate</li>
            <li>
              Build expertise in assets including hospitality, office, retail,
              multifamily, industrial
            </li>
            <li>
              Caters to best in className commercial, luxury residential, and
              land and development projects
            </li>
          </ul>
        </div>
      </section>
      <section className="follow-us">
        <div className="min-container">
          <h5>For more real estate news and updates,</h5>
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
      </section>

      <Footer></Footer>
    </>
  );
}
