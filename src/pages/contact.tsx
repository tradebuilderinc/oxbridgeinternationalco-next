import { Inter } from "next/font/google";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Header } from "@layouts/Header";
import { Footer } from "@layouts/Footer";
import Link from "next/link";
import { axiosClient, axiosHandler } from "@utils/axios";
import { GetServerSidePropsContext } from "next";
import { Container } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import 'aos/dist/aos.css';
import { HeaderInner } from "@layouts/HeaderInner";



export default function Faqs({ ...props }) {
  useEffect(() => {
    AOS.init();
  }, [])






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

  return (
    <Fragment>


      <HeaderInner></HeaderInner>

      <section className="join contact">
        <div className="container">
          <h5 className="main-title mb-3" >Contact Us</h5>
          <h6 className="main-describ">Do you have questions about what we do? How can our services help you? Or how can you
            become one of us? Our team is here to help you with all this and more! </h6>
          <h6 className="main-describ">Drop in your query, and we will get back to you shortly. All the inquiries will be
            answered in detail, so write away today! </h6>
        </div>

      </section>

      <section >
        <Container>
         

          <div className="pageinnercontent">


            <div className="row ">
              <div className="col-lg-6"  >
                <div className="contactleft" id="appointment" >
                  <div className="pagehead pb-2" style={{ maxWidth: "790px", }}>

                    <span>Have Questions?</span>
                    <h2> Send us a Message
                    </h2>

                  </div>

                  <div className="appointment-success-message"></div>
                  <div id="imli-form-EvDyrhXyyKHnFBhav"></div>
                </div>
              </div>

              <div className="col-lg-5" >
                <div className="contactright">
                  <div className="getFreeRight">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3173.050041083297!2d-121.95026592413775!3d37.31764232210404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlaza%20West%2C%203031%20Tisch%20Way%2C%20San%20Jose%2C%20CA%2095128!5e0!3m2!1sen!2sin!4v1707918832683!5m2!1sen!2sin"
                      width="100%" height="450"
                      loading="lazy"
                    ></iframe>

                    <h3>Practice Leadership and Growth</h3>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="contactinfo">
                          <div className="continfo iconadd">
                            <div className="icon">
                              <FaMapMarkerAlt />
                            </div>

                            <p>
                              Plaza West, 3031 Tisch Way,
                              <br /> San Jose, CA 95128
                            </p>
                          </div>
                          <div className="continfo iconphone">
                            <div className="icon">
                              <FaPhoneAlt />
                            </div>
                            <Link href="tel:+18443254754" className="call">
                              {" "}
                              +1 (844) 325-4754
                            </Link>
                          </div>
                          <div className="continfo iconemail">
                            <div className="icon">
                              <MdEmail />
                            </div>
                            <Link href="mailto:info@discoverplg.com" className="call">
                              info@discoverplg.com
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
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
