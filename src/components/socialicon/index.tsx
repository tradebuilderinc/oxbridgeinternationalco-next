import Link from "next/link";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp, FaYoutube } from "react-icons/fa";
import { Image } from "react-bootstrap";
function SocialIcon({ ...props }) {


  return (
    <>
      {props?.SocialLink ? (
        <>
          {/* {props?.SocialLink?.map((item: any, index: any) => (
           
             

                  <Link
                  key={index}
                  className={
                    " order-" +
                    item?.attributes?.orderNumber +
                    " " +
                    "f-menu-style-" +
                    item?.attributes?.menuTitle
                  }
               href={item?.socialUrl}
                target="_blank"
              >
                <Image
               src={
                   item?.image
                   ?.data?.attributes
                      ?.url
                      ? process.env.API_HOST_ADMIN +
                      item?.image
                      ?.data
                          ?.attributes?.url
                      : `${process.env.imagePath}About.png`
                  }
                  alt={
                    item?.image?.data?.attributes
                    ?.alternativeText
                  }
                  />



              </Link>

              
          
          ))} */}


          {/*<Link href="https://www.facebook.com/discoverplg" target="_blank">
        {" "}
        <FaFacebookF></FaFacebookF>
      </Link>
      <Link href="https://www.instagram.com/discover.plg/" target="_blank">
        {" "}
        <FaInstagram></FaInstagram>
      </Link>*/}

      <Link
        href="https://www.linkedin.com/company/practice-leadership-and-growth/"
        target="_blank"
      >
        {" "}
        <FaLinkedinIn />
      </Link>

      {/* <Link href="https://twitter.com/discoverplg2023" target="_blank">
        {" "}
        <Image src="/images/x.png" alt="111" />
      </Link> */}

     
        
          {/* <Link href="#" target="_blank">
            {" "}
            <img
              src={`${process.env.imagePath}meta.png`}
              alt={process.env.siteName}
            />
          </Link>{" "} */}
        </>
      ) : (
        <> </>
      )}
    </>
  );
}
export default SocialIcon;
