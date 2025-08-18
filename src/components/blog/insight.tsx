import FilterUrl from "@components/helper/FilterUrl";
import ReadableDate from "@components/helper/ReadableDate";
import SplitDescription from "@components/helper/splitDescription";
import { apiBaseURL } from "@config/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { GoArrowUpRight } from "react-icons/go";
function Insight() {
  const [blogs, setBlogs] = useState([]);

  const getBlog = async () => {
    const response = await fetch(
      `${apiBaseURL}/v1/posts/${process.env.userId}/${process.env.orgId}?limit=3&skip=0`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const dataBlog = await response.json();
    if (dataBlog.success) {
      setBlogs(dataBlog?.data?.posts);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    slidesToShow: 3,
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
          dots: false,
          arrow:true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrow:true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrow:true,
          
        },
      },
    ],
  };

  return (
    <div className="hblogsec">
      <Slider {...settings}>
        {blogs &&
          blogs?.slice(0, 6)?.map((blog: any, index: any) => {
            return (
              <div className="blogsec" key={index}>





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
                    <div className="ser-car-desc">
                    <div className="blogdate">
                        <ReadableDate datedata={blog?.createdAt} />
                      </div>
                      <div className="blogtitle">{blog?.title}</div>

                      {/* <div className="hblogcont">
                        <p>
                          <SplitDescription des={blog?.body} limit={15} />
                        </p>
                      </div> */}
{/* 
                      <div className="learnMoreblog">
                      Continue Reading
                    <span><GoArrowUpRight></GoArrowUpRight></span>  
                      </div> */}
                     
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
export default Insight;
