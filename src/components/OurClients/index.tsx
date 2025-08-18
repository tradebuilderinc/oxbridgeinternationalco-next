import { apiBaseURL } from "@config/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { Image } from "react-bootstrap";
import path from "path";
import { url } from "inspector";
import { GoArrowUpRight } from "react-icons/go";

function OurClientSlider({ ...props }) {
  const [sliderData, setSliderData]: any = useState();



  var settings = {
    dots: false,
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          arrow: true,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrow: true,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (props?.detail == "detail") {
      setSliderData(props?.data);
    } else {
      setSliderData(props?.details);
    }
  }, []);



  return (
    <>


      <div className="services-slider serviceSliderhome ">
        <Slider {...settings}>

          <div className="ser-carousel">
            <div className="gropserspacing">
              <div className="ser-car-img01">
                <div className="imgstyle">

                  <img src="/images/plg/qorts.png" alt="111" />
                 
                  <p>
                    Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit,
                    sed diam nonummy nibh
                    euismod tincidunt ut laoreet
                    dolore </p>
                    <div className="clientInfo">
                   <div className="clientImg">
                    <img src="/images/plg/cirImg.png" alt="111" />
                    </div>
                    <div className="clientName">
                    Client Name<br></br>
                   <span> Director</span>
                    </div>

                
                    </div>
                  {/* <div className="btn-service">
                    <Link className="learnmore" href="#">Learn More <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span></Link>
                  </div> */}

                </div>
              </div>
            </div>
          </div>

          <div className="ser-carousel">
            <div className="gropserspacing">
              <div className="ser-car-img01">
                <div className="imgstyle">

                  <img src="/images/plg/qorts.png" alt="111" />
                 
                  <p>
                    Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit,
                    sed diam nonummy nibh
                    euismod tincidunt ut laoreet
                    dolore </p>
                    <div className="clientInfo">
                   <div className="clientImg">
                    <img src="/images/plg/cirImg.png" alt="111" />
                    </div>
                    <div className="clientName">
                    Client Name<br></br>
                   <span> Director</span>
                    </div>

                
                    </div>
                  {/* <div className="btn-service">
                    <Link className="learnmore" href="#">Learn More <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span></Link>
                  </div> */}

                </div>
              </div>
            </div>
          </div>

          <div className="ser-carousel">
            <div className="gropserspacing">
              <div className="ser-car-img01">
                <div className="imgstyle">

                  <img src="/images/plg/qorts.png" alt="111" />
                 
                  <p>
                    Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit,
                    sed diam nonummy nibh
                    euismod tincidunt ut laoreet
                    dolore </p>
                    <div className="clientInfo">
                   <div className="clientImg">
                    <img src="/images/plg/cirImg.png" alt="111" />
                    </div>
                    <div className="clientName">
                    Client Name<br></br>
                   <span> Director</span>
                    </div>

                
                    </div>
                  {/* <div className="btn-service">
                    <Link className="learnmore" href="#">Learn More <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span></Link>
                  </div> */}

                </div>
              </div>
            </div>
          </div>








        </Slider>
      </div>
    </>
  );
}
export default OurClientSlider;
