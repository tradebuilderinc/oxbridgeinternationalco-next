import Link from "next/link";
import { Container } from "react-bootstrap";
function GMap({ ...props }) {



 


  return (
    <>
      <div className="iframe-rwd">
        <iframe
          src={
            props?.source && props?.source !== ""
              ? props?.source
              : "https://www.google.com/maps/d/embed?mid=1K1ouziycs6CXVDKIEIeVUwg6Tw-qQWQ&hl=en&ehbc=2E312F"
          }
          width="100%"
          height="580"
        ></iframe>
      </div>
    </>
  );
}
export default GMap;
