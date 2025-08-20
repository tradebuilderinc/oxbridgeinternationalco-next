import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
function Bookappointment() {
    
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


        <>



            <section className="book-appointment">
                <div className="container">
                    <div className="inner">
                        <h3>SCHEDULE AN APPOINTMENT</h3>

                        <div className="appointment-success-message"></div>
                        <div id="imli-form-myr2ZxDTgEfXPYoKr"></div>

                    </div>
                </div>
            </section>



        </>
    );
}
export default Bookappointment;
