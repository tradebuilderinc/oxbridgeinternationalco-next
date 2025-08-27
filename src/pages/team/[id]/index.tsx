import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Footer } from "@layouts/Footer";
import { useWindowSize } from "@hooks/useWindowSizeNew";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { HeaderInner } from "@layouts/HeaderInner";
import Team from "@components/Team";
import PageMeta from "@components/PageMeta";
import { Container } from "react-bootstrap";
import Button from "@components/ui/button";
import { GrFormNext } from "react-icons/gr";
import { axiosClient, axiosHandler } from "@utils/axios";
import { apiBaseURL } from "@config/api";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  let paramId: any = ctx?.query?.team;

  if (ctx?.query?.id) {
    paramId = ctx?.query?.id;
  }

  console.log("ctx?.query?.p", ctx?.query);

  const doctorData = await axiosHandler(
    axiosClient().get(`${apiBaseURL}/readMember/${paramId}`)
  );

  console.log("ctx?.query?.p", doctorData);

  let data;

  data = {
    doctor: doctorData?.data?.records,
    url: ctx?.req?.url,
  };

  if (!doctorData?.data?.records) {
    return {
      redirect: {
        permanent: false,
        destination: `/who-we-are`,
      },
    };
  } else {
    if (!ctx?.query?.p && data?.doctor?.profile?.socialLinks?.website) {
      return {
        redirect: {
          permanent: false,
          destination: `/doctor/${data?.doctor?.profile?.socialLinks?.website}?p=${ctx?.query?.id}`,
        },
      };
    }
    return {
      props: data,
    };
  }
}

export default function Home({ ...props }) {
  return (
    <>
      {props?.doctor?.profile?.address?.residential?.state ? (
        <Head>
          {props?.doctor?.profile?.address?.residential?.state && (
            <title>{props?.doctor?.profile?.address?.residential?.state}</title>
          )}
          {props?.doctor?.profile?.address?.residential?.streetAddress && (
            <meta
              name="description"
              content={
                props?.doctor?.profile?.address?.residential?.streetAddress
              }
            />
          )}
          {props?.doctor?.profile?.socialLinks?.yelp && (
            <link
              rel="canonical"
              href={props?.doctor?.profile?.socialLinks?.yelp}
            />
          )}
          {/* Og */}
          {props?.doctor?.profile?.address?.residential?.state && (
            <meta
              property="og:title"
              content={props?.doctor?.profile?.address?.residential?.state}
            />
          )}
          {props?.doctor?.profile?.address?.residential?.streetAddress && (
            <meta
              property="og:description"
              content={
                props?.doctor?.profile?.address?.residential?.streetAddress
              }
            />
          )}
          {props?.doctor?.profile?.profilePic && (
            <meta
              property="og:image"
              content={props?.doctor?.profile?.profilePic}
            />
          )}
          {/* Twitter */}
          {props?.doctor?.profile?.address?.residential?.state && (
            <meta
              property="Twitter:title"
              content={props?.doctor?.profile?.address?.residential?.state}
            />
          )}
          {props?.doctor?.profile?.address?.residential?.streetAddress && (
            <meta
              property="Twitter:description"
              content={
                props?.doctor?.profile?.address?.residential?.streetAddress
              }
            />
          )}
          {props?.doctor?.profile?.profilePic && (
            <meta
              property="Twitter:image"
              content={props?.doctor?.profile?.profilePic}
            />
          )}
          {/* Facebook */}
          {props?.doctor?.profile?.address?.residential?.state && (
            <meta
              property="Facebook:title"
              content={props?.doctor?.profile?.address?.residential?.state}
            />
          )}
          {props?.doctor?.profile?.address?.residential?.streetAddress && (
            <meta
              property="Facebook:description"
              content={
                props?.doctor?.profile?.address?.residential?.streetAddress
              }
            />
          )}
          {props?.doctor?.profile?.profilePic && (
            <meta
              property="Facebook:image"
              content={props?.doctor?.profile?.profilePic}
            />
          )}
        </Head>
      ) : (
        <PageMeta />
      )}

      <HeaderInner></HeaderInner>

      <section className="pagesec">
        <Container>
          <div className="pageinnercontent">
            <div className="row align-items-center1">
              <div className="col-lg-5 pb-3">
                <div className="imgborder">
                  <img
                    className="img-fluid b-radius"
                    src={props?.doctor?.profile?.profilePic}
                    alt={
                      props?.doctor?.profile?.socialLinks?.pinterest
                        ? props?.doctor?.profile?.socialLinks?.pinterest
                        : `${props?.doctor?.profile?.firstName}-${props?.doctor?.profile?.lastName}`
                    }
                  />
                </div>

                <div className="pt-3">
                  <p>
                    <b>LICENSE NUMBER</b> {props?.doctor?.profile?.license}
                    <br />
                    <b> EMAIL </b>
                    <span>{props?.doctor?.profile?.email}</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="leftspe ps-lg-4">
                  <div className="docinfo">
                    <h1 className="">
                      {" "}
                      {props?.doctor?.profile?.firstName}{" "}
                      {props?.doctor?.profile?.lastName}
                    </h1>
                    <h3 className="pb-3">
                      {props?.doctor?.profile?.jobTitle ? (
                        props?.doctor?.profile?.jobTitle
                      ) : (
                        <></>
                      )}
                    </h3>
                    <div
                      className="pb-4 phdata"
                      dangerouslySetInnerHTML={{
                        __html: props?.doctor?.profile?.bio,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer></Footer>
    </>
  );
}
