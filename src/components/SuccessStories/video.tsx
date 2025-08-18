import { FaStar } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
// import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { BsPlayCircle } from "react-icons/bs";
import { useState } from "react";
import { Button, Image, Modal, Container } from "react-bootstrap";
import { VideosJsonData } from "@components/data/video";


function SuccessStoriesVideo() {
  const videoJsonData: any = VideosJsonData();
  const [videoUrl, setVideoUrl] = useState<string>("WAAHk9Cflfs");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  function handleShow(url: string) {
    setVideoUrl(url);
    setShow(true);
  }
  var settingskuk: any = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    // nextArrow: (
    //   <RightArrow
    //     to="next"
    //     className=""
    //     onClick={() => console.log("right arrow")}
    //     customClass="home3 home-arrow-slider-right"
    //   />
    // ),
    // prevArrow: (
    //   <LeftArrow
    //     to="prev"
    //     className=""
    //     onClick={() => console.log("left arrow")}
    //     customClass="home3  home-arrow-slider-left"
    //   />
    // ),

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
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

  return (
    <>
      {/* <div className="testimonialmodal1">
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
    
          
                <source src={`/video/${videoUrl}`} />
               </Player> 
            </div>
          </Modal.Body>
        </Modal>
      </div> */}

      {/* <div className="testvideo pt-4 techniqueswrap">
        <div className="testvideoslider row">
          <Slider {...settingskuk}>
            {videoJsonData &&
              videoJsonData?.slice(0, 15)?.map((item: any, index: any) => {
                return (
                  <div className="col-lg-4 testimonialsection" key={index}>
                    <div className="testinner" key={index}>
                      <div className="testinnerimg">
                        <Image
                          src={`/images/kuksoolwon/${item?.thumbs}`}
                          alt={item?.title}
                          className="rounded"
                        />
                      </div>
                      <div className="videobtn">
                        <Button
                          variant="text"
                          onClick={(e) => handleShow(item?.url)}
                        >
                          <BsPlayCircle />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div> */}
    </>
  );
}
export default SuccessStoriesVideo;
