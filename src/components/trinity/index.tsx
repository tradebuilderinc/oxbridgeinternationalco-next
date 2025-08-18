import { Accordion, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { FaqsJsonData } from "@components/data/faqs";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { useWindowSize } from "@hooks/useWindowSizeNew";
import Slider from "react-slick";

function Trinity({ ...props }) {
 
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

  const { widthType } = useWindowSize();

  return (
    <>
    

      {widthType > 1199 ? (
        <>
        <section  className="pagesec home-team">
        <Container>
          <div className="pagehead pb-2" style={{ maxWidth: "790px", }}>

            <span> The PLG Trinity</span>
            <h2>Expert Dental <br></br>
            Practice Consultants
            </h2>
            <p>Running a successful dental practice requires more than just clinical expertise. Our dental practice  <br></br>
            consultants work closely with dentists and practice owners to make your dental business thrive. </p>
          </div>
          <div className="row d-flex align-items-center">
            
            <div className="col-xl-4 mb-3">
              <div className="trinityBox border-radius">
                <div className="trinityContnet">
                <img className="img-fluid" src="/images/plg/Icons-01.png" alt="" />
                <span> Cutting Costs</span>
                <p>Solve financial challenges<br></br>
                  Regulate operational costs <br></br>
                  No more compromises</p>
                  </div>
                  <div className="bottombtn">
                  <Link className="btn btn-primary" href="/about-us">Learn More
                    <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            

            <div className="col-xl-4 mb-3">
              <div className="trinityBox border-radius">
              <div className="trinityContnet">
                <img className="img-fluid" src="/images/plg/Icons-02.png" alt="" />
                <span> Boosting Efficiency
                </span>
                <p> Streamline operations<br></br>
                  Reduce resource wastage<br></br>
                  Optimize workflow</p>
                  </div>
                  <div className="bottombtn">
                  <Link className="btn btn-primary" href="/about-us">Learn More
                    <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 mb-3">
              <div className="trinityBox border-radius">
              <div className="trinityContnet">
                <img className="img-fluid" src="/images/plg/Icons-03.png" alt="" />
                <span> Igniting Growth
                </span>
                <p>Competitive advantage<br></br>
                  Strategic planning<br></br>
                  Industry expertise</p>
                  </div>
                  <div className="bottombtn">
                  <Link className="btn btn-primary" href="/about-us">Learn More
                    <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        
        </Container>
      </section>

        </>
      ) : (
        <>
            <section  className="pagesec home-team slidertypesecond TrinitySliderhome">
        <Container>
          <div className="pagehead pb-2" style={{ maxWidth: "790px", }}>

          <span> The PLG Trinity</span>
            <h2>Expert Dental <br></br>
            Practice Consultants
            </h2>
            <p>Running a successful dental practice requires more than just clinical expertise. Our dental practice  <br></br>
            consultants work closely with dentists and practice owners to make your dental business thrive. </p>
          </div>
          <div className="row d-flex align-items-center">
            <div className="services-slider serviceSliderhome">
          <Slider {...settings}>
            <div className="col-xl-4 mb-3">
              <div className="trinityBox border-radius">
                <div className="trinityContnet">
                <img className="img-fluid" src="/images/plg/Icons-01.png" alt="" />
                <span> Cutting Costs</span>
                <p>Solve financial challenges<br></br>
                  Regulate operational costs <br></br>
                  No more compromises</p>
                  </div>
                  <div className="bottombtn">
                  <Link className="btn btn-primary" href="/about-us">Learn More
                    <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            

            <div className="col-xl-4 mb-3">
              <div className="trinityBox border-radius">
              <div className="trinityContnet">
                <img className="img-fluid" src="/images/plg/Icons-02.png" alt="" />
                <span> Boosting Efficiency
                </span>
                <p> Streamline operations<br></br>
                  Reduce resource wastage<br></br>
                  Optimize workflow</p>
                  </div>
                  <div className="bottombtn">
                  <Link className="btn btn-primary" href="/about-us">Learn More
                    <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 mb-3">
              <div className="trinityBox border-radius">
              <div className="trinityContnet">
                <img className="img-fluid" src="/images/plg/Icons-03.png" alt="" />
                <span> Igniting Growth
                </span>
                <p>Competitive advantage<br></br>
                  Strategic planning<br></br>
                  Industry expertise</p>
                  </div>
                  <div className="bottombtn">
                  <Link className="btn btn-primary" href="/about-us">Learn More
                    <span>

                      <GoArrowUpRight></GoArrowUpRight>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            </Slider>
            </div>
          </div>
        
        </Container>
      </section>
        </>
      )}


    </>
  );
}
export default Trinity;


