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
      listing: listing?.data?.data,
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

console.log("ctx", props);


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
      gggg
      <Footer></Footer>
    </>
  );
}
