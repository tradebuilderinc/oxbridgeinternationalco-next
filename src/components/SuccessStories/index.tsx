import { Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import SuccessStoriesVideo from "./video";
import SuccessStoriesComment from "./comments";
import Link from "next/link";
import Testimonials from "./testimonials";
import { GrFormNext } from "react-icons/gr";

function SuccessStories({ ...props }) {
  return (
    <>
     
        <Container>
 
          <div className="pageinnercontent">
            {" "}
            {props?.detail && (
              <div className="testimonialsdetails">
                <Testimonials></Testimonials>
              </div>
            )}
            {!props?.detail && (
              <>
                <SuccessStoriesComment />
                {/* <div className=" text-md-left contbtn pb-5">
                  <Link href="./reviews" className="btn btn-primary">
                    {" "}
                    View All
                    <span>
                      <GrFormNext />
                    </span>
                  </Link>
                </div> */}
              </>
            )}
          </div>
        </Container>
     
    </>
  );
}
export default SuccessStories;
