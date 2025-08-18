import { Container } from "react-bootstrap";
import Button from "@components/ui/button";
function ContactInfo() {
    return (
        <>




<section className="pagesec ">
        <Container>
          <div className="row " data-aos="fade-right">
            <div className="col-xl-4">
              <div className="getFreeLeft">
                <h2 >Find Us</h2>
                <div className="heading-5 mb-5">and Get the Care You Need</div>
                <p>Island Dental is located in the heart of Kahului. We’re dedicated to providing you with the highest standard of care in a comfortable and friendly environment.</p>
                <div className="bottombtn">
                  <Button
                    link="https://www.google.com/maps/dir//Island+Smiles+Dental+Care:+Eric+Stanley+DMD,+74+Lono+Ave+SUITE+210,+Kahului,+HI+96732,+United+States/@20.888062,-156.469606,15z/"
                    btnclass="btn btn-primary"
                  >
                    Get Directions

                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
            <div className="getContactinfo">
                  <div className="getContacticon">
                    <img
                      src="/images/islandsmiles/icon.png"
                      alt=""
                    />
                  </div>
                  <div className="getContactadd">
                    <p className="mb-1">Island Dental</p>
                    <p>
                      74 Lono Ave Suite 210<br></br>
                      Kahului, HI 96732</p>



                  </div>
                  <div className="getContactmob">
                    <p> (808) 877-7661<br></br>
                      info@islandsmilesdental.com</p>
                      <p>Monday - Friday : 7:00 AM - 7:00 PM<br></br>
                      Saturday Availability Available!</p>
                  </div>
                </div>
            </div>

            <div className="col-xl-4" data-aos="fade-left">
              <div className="getFreeRight">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.6026128336466!2d-156.47218112391442!3d20.888061680726388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954d2de639e6821%3A0xb80c3ef43cd4ac71!2sIsland%20Smiles%20Dental%20Care%3A%20Eric%20Stanley%20DMD!5e0!3m2!1sen!2sin!4v1726216147240!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>

            

              </div>

            </div>

          </div>
        </Container>
      </section>




        </>
    );
}
export default ContactInfo;
