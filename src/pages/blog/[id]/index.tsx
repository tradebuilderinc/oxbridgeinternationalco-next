import Head from "next/head";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Button, Card, Stack } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiBaseURL } from "@config/api";
import { useWindowSize } from "@hooks/useWindowSize";
import { Footer } from "@layouts/Footer";
import { HeaderInner } from "@layouts/HeaderInner";
import { GetServerSidePropsContext } from "next";
import { axiosClient, axiosHandler } from "@utils/axios";

import Sidebar from "@components/blog/sidebar";
import { Header } from "@layouts/Header";
import ReadableDate from "@components/helper/ReadableDate";
import SplitDescription from "@components/helper/splitDescription";
import RecentBlog from "@components/blog/recentBlog";
import Category from "@components/blog/category";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

  if (ctx?.query?.id == "get_paid,_keep_smiling:_mastering_payroll_for_your_dental_squad") {
    return {
      redirect: {
        permanent: false,
        destination: `/blog/get-paid-keep-smiling-mastering-payroll-for-your-dental-squad?p=eF9k4QSy7annyQtq7`,
      },
      props: {},
    };
  }

    if (ctx?.query?.id == "5_common_dental_payroll_mistakes_and_how_to_avoid_them") {
    return {
      redirect: {
        permanent: false,
        destination: `/blog/5-common-dental-payroll-mistakes-and-how-to-avoid-them?p=BELKzchNdPNtwu4mY`,
      },
      props: {},
    };
  }

  if (!ctx?.query?.p) {
    return {
      redirect: {
        permanent: false,
        destination: "/blog",
      },
    };
  } else {
    const blogData = await axiosHandler(
      axiosClient().get(
        `${apiBaseURL}/v1/post/${ctx?.query?.p}/${process.env.userId}/${process.env.orgId}`
      )
    );
    let data;
    if (blogData?.success) {
      data = {
        blog: blogData?.data?.data?.posts,
      };
    }
    return {
      props: data,
    };
  }
}
export default function About({ ...props }) {
  const { blog, apiToken } = props;
  const { width } = useWindowSize();

  const regex = /(<([^>]+)>)/gi;
  const result = blog?.body.replace(regex, "");
  const words = result.split(" ");
  const truncated = words.slice(0, 20);
  const blogDes = truncated.join(" ") + " ...";

  // meta
  const [metaTitle, setMetaTitle] = useState<string>(
    blog?.seoMeta?.tags?.title
  );
  const [metaDescription, SetMetaDescription] = useState<string>(
    blog?.seoMeta?.tags?.meta[0]?.content
  );
  const [metaKeywords, SetMetaKeywords] = useState<string>(
    blog?.seoMeta?.tags?.meta[1]?.content
  );
  const [robots, SetRobots] = useState<string>(
    blog?.seoMeta?.tags?.meta[2]?.content
  );
  const [ogTitle, SetogTitle] = useState<string>(
    blog?.seoMeta?.tags?.meta[3]?.content
  );
  const [ogImage, SetOgImage] = useState<string>(
    blog?.seoMeta?.tags?.meta[4]?.content
  );
  const [ogDescription, SetOgDescription] = useState<string>(
    blog?.seoMeta?.tags?.meta[5]?.content
  );
  const [canonical, SetCanonical] = useState<string>(
    blog?.seoMeta?.tags?.link[0]?.href
  );
  const [alternate, SetAlternate] = useState<string>(
    blog?.seoMeta?.tags?.link[1]?.href
  );

  return (
    <>
      <Head>
        {!metaTitle ? <title>{blog?.title}</title> : <title>{metaTitle}</title>}
        {!metaDescription ? (
          <meta name="description" content={blogDes} />
        ) : (
          <meta name="description" content={metaDescription} />
        )}
        {!metaKeywords ? (
          <meta name="keywords" content={"smileselectdental"} />
        ) : (
          <meta name="keywords" content={metaKeywords} />
        )}
        {!ogTitle ? (
          <meta property="og:title" content={blog?.title} />
        ) : (
          <meta property="og:title" content={ogTitle} />
        )}
        {!ogDescription ? (
          <meta property="og:description" content={blogDes} />
        ) : (
          <meta property="og:description" content={ogDescription} />
        )}
        {!ogImage ? (
          <meta property="og:image" content={blog?.featuredImage} />
        ) : (
          <meta property="og:image" content={ogImage} />
        )}
        {canonical && <link rel="canonical" href={canonical} />}
        {alternate && <link rel="alternate" hrefLang="en" href={alternate} />}
        {robots && <meta name="robots" content={robots} />}
      </Head>
      <>
        <Header />
        <section className="pagesec">
          <Container>
            <div className="pageinnercontent blogdetailpage">
              <div className="row">
              <div className="pagehead innerhead  pb-3" >
                        <div className="row">
                        <div className="blogdate pb-2" style={{fontSize:"14px", color:'#2c50d6' }}>
                        <ReadableDate datedata={blog?.createdAt} />
                      </div>
                        <h1 className="subheading mt-0 pb-0">{blog?.title}</h1>
                      
                        </div>


                    </div>
                <div className="col-xl-8">
                  <div className="blogdetails pb-4">
                 
                    <div className="rationimage pb-3">
                      {!blog?.featuredImageThumb ? (
                        <>
                          {" "}
                          <Card.Img
                            variant="top"
                            src={"/images/noimg.png"}
                            alt={blog?.title}
                          />
                        </>
                      ) : (
                        <>
                          {" "}
                          <Card.Img
                            variant="top"
                            src={blog?.featuredImageThumb}
                            alt={blog?.title}
                          />
                        </>
                      )}
                    </div>
                    
                    <div
                      className="blogsingledeatils pt-2"
                      dangerouslySetInnerHTML={{
                        __html: `${blog?.body}`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-xl-1"></div>



                 <div className="col-md-3">
              <div className="blogrightbox">
                <div className="recent-box">
                  <h3>Must Read</h3>
                  <RecentBlog />
                </div>
              </div>
            </div>
              </div>
            </div>{" "}
          </Container>
        </section>

        <Footer />
      </>
    </>
  );
}
