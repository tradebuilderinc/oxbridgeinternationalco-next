import { FaStar, FaYoutube } from "react-icons/fa";
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
import { BsPlayCircle } from "react-icons/bs";

function Testimonials() {
  // const CommentsData: any = CommentsJsonData();
  let path: string = "video,video.featuredImage";

  const [commentsData, setCommentsData]: any = useState([]);
  const getTestimonial = async () => {
    const response = await fetch(
      `${process.env.API_HOST_ADMIN}/api/review-videos/?populate=*&populate=${path}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const reviews = await response.json();



    setCommentsData(reviews?.data[0]?.attributes?.video);
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
    slidesToShow: 2,
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

  const [videoUrl, setVideoUrl] = useState<string>("pO1uC8ENUX4");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow(url: string) {
    setVideoUrl(url);
    setShow(true);
  }

  return (
    <>
      <div className="testimonialmodal1">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="testimonialmodal"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="videoWrapper">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <div className="happy-customer">
        {commentsData && commentsData.length >= 3 && (
          <Slider {...settingskuk}>
            {commentsData?.map((item: any, index: any) => (
              <div className="success-card-test">
                <div className="success-box">
                  <div className="story-img ">
                    <div className="imgborder">
                    <Button
                    className="playbtn"
                        variant="text"
                        onClick={(e) => handleShow(item?.buttonUrl)}
                      >
                        <FaYoutube />
                      </Button>
                      <Image
                        src={
                          item?.featuredImage?.data?.attributes?.url
                            ? process.env.API_HOST_ADMIN +
                              item?.featuredImage?.data?.attributes?.url
                            : `${process.env.imagePath}About.png`
                        }
                        alt={
                          item?.featuredImage?.data?.attributes?.alternativeText
                        }
                      />

                     
                    </div>{" "}
                  </div>

                  {/* <div className="story-title-name">{item?.title}</div> */}
                  {/* <div className="story-title-star">
                      <img src={`${process.env.imagePath}rate.jpg`} />
                    </div> */}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}
export default Testimonials;
