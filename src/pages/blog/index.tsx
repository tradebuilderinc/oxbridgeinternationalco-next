import { Inter } from "next/font/google";
import { Fragment, useEffect } from "react";
import { Header } from "@layouts/Header";
import { Footer } from "@layouts/Footer";
import Link from "next/link";
import { axiosClient, axiosHandler } from "@utils/axios";
import { apiBaseURL } from "@config/api";
import { GetServerSidePropsContext } from "next";

import Head from "next/head";
import ReadableDate from "@components/helper/ReadableDate";
import SplitDescription from "@components/helper/splitDescription";
import { useRouter } from "next/router";
import PageList from "@components/pagination/page-list";
import { Card, Container } from "react-bootstrap";
import { MdArrowOutward } from "react-icons/md";
import RecentBlog from "@components/blog/recentBlog";
import FilterUrl from "@components/helper/FilterUrl";
import Mainmeta from "@components/meta";
import PageMeta from "@components/PageMeta";
import AOS from "aos";
import 'aos/dist/aos.css';
import { GoArrowUpRight } from "react-icons/go";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const start =
    Number(ctx.query.page) === 1 ? 0 : (Number(ctx.query.page) - 1) * 13;
  const blogData = await axiosHandler(
    axiosClient().get(
      `${apiBaseURL}/v1/posts/${process.env.userId}/${process.env.orgId}?limit=13&skip=${start}`
    )
  );

  const recentPost = await axiosHandler(
    axiosClient().get(
      `${apiBaseURL}/v1/posts/recent/${process.env.userId}/${process.env.orgId}?limit=4&skip=0`
    )
  );

  const archivesPost = await axiosHandler(
    axiosClient().get(
      `${apiBaseURL}/v1/posts/archives/${process.env.userId}/${process.env.orgId}?limit=4&skip=0`
    )
  );
  const seoData = await axiosHandler(
    axiosClient().get(
      `${process.env.API_HOST_ADMIN}/api/blog/?populate=*&populate=seo,seo.metaImage,seo.metaSocial,seo.metaSocial.image`
    )
  );
  let data;

  if (blogData?.success) {
    data = {
      blog: blogData?.data?.data?.posts,
      recentPost: recentPost?.data?.data?.posts,
      archivesPost: recentPost?.data?.data?.posts,
      seo: seoData?.data?.data,
      page: ctx.query,
      length: blogData?.data?.data?.posts[0]?.postsCount,
    };
  }
  return {
    props: data,
  };
}

export default function Index({ ...props }) {
  useEffect(() => {
    AOS.init();
  }, [])

  let pageNumber: any;
  if (props.page.page == "NaN" || pageNumber == "NaN") {
    pageNumber = 1;
  } else {
    if (props.page.page === undefined) {
      pageNumber = 1;
    } else {
      pageNumber = Number(props.page.page);
    }
  }
  const length = Number(props.length);
  const lastpage = Math.ceil(length / 13);

  let pagenationLink = [];
  for (let i = 1; i <= lastpage; i++) {
    let page_object: any = {};
    page_object.num = i;
    pagenationLink.push(page_object);
  }
  let routers = useRouter();

  function filterUrl(url: string) {
    let ret = url.replace("?", "");
    return ret;
  }

  return (
    <Fragment>
      {/* {props?.seo?.attributes?.seo ? (
        <Mainmeta metaData={props?.seo?.attributes?.seo} />
      ) : (
        <PageMeta />
      )} */}

      <div className="container-fluid home-header innerHeader"

        style={{
          backgroundImage: `url(/images/services/Top-background.jpg)`,
        }}
      >
        <Header></Header>


      </div>
      <section className="pagesec">
        <Container>
          <div className="row">
          <div className="pagehead innerhead text-center pb-3" >
                        <div className="row">
                            <h1>Insights</h1>
                        </div>


                    </div>
            <div className="col-md-8">
              

              <div className="heroblog border-radius">
                {props?.blog.slice(0, 1).map((blog: any, index: any) => {
                  return (
                    <Card key={index}>
                      <div className="blogimg">
                        <div className="imgborder">
                         
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
                         

                          <div className="blogcont">
                            <div className="blogdate">
                              <ReadableDate datedata={blog?.createdAt} />
                            </div>
                            <h2 className="subheading">
                              
                                {blog?.title}
                     
                            </h2>
                            <div className="learnMoreblog">
                            <Link
                                href={
                                  blog?.seoMeta?.tags?.url &&
                                    blog?.seoMeta?.tags?.url !== ""
                                    ? `/blog/${blog?.seoMeta?.tags?.url}?p=${blog._id}`
                                    : `/blog/${FilterUrl(blog?.slug)}?p=${blog._id
                                    }`
                                }
                              >
                                      Continue Reading
                                      <span><GoArrowUpRight></GoArrowUpRight></span>
                                </Link>      
                                    </div>
                            {/* <p>
                          <SplitDescription
                            className="blogtxt"
                            des={blog?.body}
                            limit={60}
                          />{" "}
                        </p> */}

                          </div>
                        </div>
                      </div>


                    </Card>
                  );
                })}
              </div>
              <div className="hblogsec-blog">
                <div className="row homeblog">

                  {props?.blog.slice(0, 30).map((blog: any, index: any) => {
                    return (
                      <>
                        {index === 0 ||
                          blog?.category?._id == "j84GdRRnafXyZ6fBo" ? (
                          <></>
                        ) : (
                          <div className="col-lg-6">
                            <div className="blogsec" data-aos="zoom-in" key={index}>
                              <Link
                                href={
                                  blog?.seoMeta?.tags?.url &&
                                    blog?.seoMeta?.tags?.url !== ""
                                    ? `/blog/${blog?.seoMeta?.tags?.url}?p=${blog._id}`
                                    : `/blog/${FilterUrl(blog?.slug)}?p=${blog._id
                                    }`
                                }
                              >
                                <div className="mainblog">
                                  <div className="blogimg">
                                    <div className="homeblogsec">
                                      {!blog?.featuredImageThumb ? (
                                        <>
                                          {" "}
                                          <img
                                            src={"/images/noimg.png"}
                                            className="img-fluid rounded-border"
                                          />
                                        </>
                                      ) : (
                                        <>
                                          {" "}
                                          <img
                                            src={blog?.featuredImageThumb}
                                            className="img-fluid rounded-border"
                                          />
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  <div className="blogcont">
                                    <div className="blogdate">
                                      <ReadableDate
                                        datedata={blog?.createdAt}
                                      />
                                    </div>
                                    <h4>{blog?.title}</h4>
                                    <div className="learnMoreblog">
                                      Continue Reading
                                      <span><GoArrowUpRight></GoArrowUpRight></span>
                                    </div>

                                    {/* <div className="hblogcont">
                                        <p>
                                          <SplitDescription
                                            des={blog?.body}
                                            limit={15}
                                          />
                                        </p>
                                      </div> */}

                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        )}{" "}
                      </>
                    );
                  })}

                </div>
              </div>


              <div className="col-md-12">
                <nav
                  className={
                    pageNumber >= lastpage ? "hidden disabled" : "pt-5"
                  }
                >
                  <ul className="pagination justify-content-center">
                    <li
                      className={
                        pageNumber <= 1 ? "page-item disabled" : "page-item"
                      }
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          routers.push(`/blogs?page=${pageNumber - 1}`)
                        }
                        disabled={pageNumber <= 1 || pageNumber === "NaN"}
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </button>
                    </li>

                    <PageList items={pagenationLink} />

                    <li
                      className={
                        pageNumber >= lastpage
                          ? "page-item disabled"
                          : "page-item"
                      }
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          routers.push(`/blogs?page=${pageNumber + 1}`)
                        }
                        disabled={pageNumber >= lastpage}
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-1"> </div>

            <div className="col-md-3">
              <div className="blogrightbox">
                <div className="recent-box">
                  <h3>Must Read</h3>
                  <RecentBlog />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}
