import { FaStar } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { CommentsJsonData } from "@components/data/comments";
// import loading from "@components/assets/images/Star.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Button, Image, Modal, Container } from "react-bootstrap";
import { VideosJsonData } from "@components/data/video";

function SuccessStoriesComment() {
  // const CommentsData: any = CommentsJsonData();

  const [commentsData, setCommentsData]: any = useState([]);
  const getTestimonial = async () => {
    const response = await fetch(
      `${process.env.API_HOST_ADMIN}/api/review-comments?populate=*`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const reviews = await response.json();






    setCommentsData(reviews?.data[0]?.attributes?.reviewcomment);
  };

  useEffect(() => {
    getTestimonial();
  }, []);





  var settingskuk: any = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
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
          slidesToShow: 1,
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



  const mainData = [
    {
      image: '/images/Testimonial.png',
      title: 'R Ridgell',
      description: 'Highest regard to the level of service and skill at this practice. My dental hygienist was the most tactful and comprehensive I have experienced since leaving my holistic hygienist on Oahu. Finding this level of care here in Maui is such a comfort. Mahalo for making me feel comfortable and cared for.',
      
    },
    {
      title: 'Alice Duran',
      description: 'I had 2 caps replaced today.  I was able to get an appointment right away. I like Dr. Brooks. He was very good about letting me know what to expect during the procedure and kept me informed about what he was doing before he transitioned to each part of the procedure. It helped decrease any anxiety. His technician, Casey was so sweet and caring. All the way to the ladies running the front desk, I felt very comfortable and confident with my care. Thank you, Island Dental! 😁',
     
    },
    {
      title: 'Fatima Atregenio',
      description: 'My sisters referred me to Island Dental so I set up an initial appointment to try them out. I had to reschedule, but they were able to fit me into a last-minute appointment when I called again. The entire process of getting X-rays and the cleaning with Dr. Stanley went well. He was attentive to my concerns and dental history. I have to go back to get some work done, but I\'m happy it was discovered when it was',
     
    }
  ];


  return (
    <>
   
      {/* <div className="happycustomer">
        <div className="testvideoslider row">
          {commentsData && commentsData.length >= 3 && (
            <Slider {...settingskuk}>
              {commentsData?.map((item: any, index: any) => (
                <div className="success-card">
                  <div className="success-box">
                    <div className="story-des">
                    {item?.htmlSection && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.htmlSection,
                              }}
                            />
                          )}
                          <p>Lorem ipsum dolor sit amet, consectetuer 
adipiscing elit, sed diam nonummy nibh 
euismod tincidunt ut laoreet dolore magna 
aliquam erat volutpat.</p>
                    </div>
                     <div className="story-title-star">
                      <img src={`${process.env.imagePath}star.jpg`} />
                    </div> 
                   <div className="story-title-name">
                   Lorem ipsum <span> Dolor sit</span>
                    {item?.title}
                    </div> 
                    <div className="story-title-star">
                      <img src={`${process.env.imagePath}rate.jpg`} />
                    </div>
                  </div>
                  
                </div>

              ))}
            </Slider>
          )}

          {commentsData && commentsData.length < 3 && (
            <div className="row">
              {commentsData &&
                commentsData?.slice(0, 3)?.map((item: any, index: any) => {
                  return (
                    <div key={index} className="success-card col-lg-6">
                      <div className="success-box">
                        <div className="story-des">
                          {item?.htmlSection && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.htmlSection,
                              }}
                            />
                          )}
                        </div>
                        <div className="story-title-name">{item?.title}</div> 
                        <div className="story-title-star">
                         
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div> */}

<div className="happycustomer">
        <div className="testvideoslider row">
          {commentsData && commentsData.length >= 3 && (
            <Slider {...settingskuk}>
              {mainData?.map((item: any, index: any) => (
                <div className="success-card">
                  <div className="success-box" style={{minHeight:'310px'}}>
                    <div className="story-des">
                    {/* {item?.htmlSection && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.htmlSection,
                              }}
                            />
                          )} */}
                          <p> <img src="/images/Testimonial.png"/> {item.description}</p>
                    </div>
                     {/* <div className="story-title-star">
                      <img src={`${process.env.imagePath}star.jpg`} />
                    </div>  */}
                   <div className="story-title-name">
                   {/* Lorem ipsum <span> Dolor sit</span> */}
                    {item?.title}
                    </div> 
                    {/* <div className="story-title-star">
                      <img src={`${process.env.imagePath}rate.jpg`} />
                    </div> */}
                  </div>
                  
                </div>

              ))}
            </Slider>
          )}

          {commentsData && commentsData.length < 3 && (
            <div className="row">
              {commentsData &&
                commentsData?.slice(0, 3)?.map((item: any, index: any) => {
                  return (
                    <div key={index} className="success-card col-lg-6">
                      <div className="success-box">
                     
                        <div className="story-des">
                     
                          {item?.htmlSection && (
                        
                            <p 
                              dangerouslySetInnerHTML={{
                                __html: item?.htmlSection,
                              }}
                            />
                          )}
                        </div>
                        <div className="story-title-name">{item?.title}</div> 
                        <div className="story-title-star">
                         
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default SuccessStoriesComment;
