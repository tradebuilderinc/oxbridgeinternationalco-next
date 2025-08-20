import Link from "next/link";
import { GrFormNext } from "react-icons/gr";
import { Image } from "react-bootstrap";
import SocialIcon from "@components/socialicon";
import { Accordion } from "react-bootstrap";
import { axiosClient, axiosHandler } from "@utils/axios";

import { SyntheticEvent, useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";
import { useRouter } from "next/dist/client/router";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Newsletter from "@components/newsletter";
import { useWindowSize } from "@hooks/useWindowSizeNew";

const Footer = () => {
  const { widthType } = useWindowSize();

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/newsletter.js";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => setIsLoaded(false);
    script.onerror = () => setError(true);
    return () => {
      document.head.removeChild(script);
    };
  }, ["/js/newsletter.js"]);


  return (
    <>


    <footer>
    <div className="footer-width">
    
        <div className="mainfooter">
            <div className="subscribe-box">
                      <h3>Subscribe to our Newsletters</h3>
                  <div className="appointment-success-message"></div>
                  <div id="imli-form-4WBsFF9BkN5pJcSTo"></div>
                {/* <form id="newsletterForm" className="has-validation-callback">
                    <div className="alert hidden" id="news-message"></div>
              <h3>Subscribe to our Newsletters</h3>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" name="firstName"
                            data-validation="required" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address" name="emailId"
                            data-validation="email" required/>
                    </div>
                    <button type="submit">SUBSCRIBE</button>
                </form> */}
            </div>


            <div className="divide-box">
                <ul>
                    <li><Link href="/commercial">Commercial</Link> | </li>
                    <li><Link href="/land">Land and Development</Link> | </li>
                    <li><Link href="/team">Team</Link> | </li> 
                    <li><Link href="/blog">Insights</Link> | </li>
                    <li><Link href="/about">About</Link> | </li>
                    <li><Link href="/join-us">Join Us</Link></li>
                </ul>
                <ul>
                    <li>
                        <a href="tel:408-404-5754">(408) 404-5754</a> |
                    </li>
                    <li>
                        <a href="mailto:sbecerra@oxbridgeinternationalco.com">sbecerra@oxbridgeinternationalco.com</a>
                    </li>
                </ul>
            </div>
        </div>


        <div className="copyright">
            <ul>
                <li>
                    <a href="JavaScript:void(0);">© 2025 Oxbridge International All rights reserved</a>
                </li>

            </ul>
        </div>
    </div>
</footer>



    </>
  );
};

export { Footer };
