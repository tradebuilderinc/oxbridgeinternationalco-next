import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdPhone } from "react-icons/md";
import { Image } from "react-bootstrap";
import { apiBaseURL } from "@config/api";

function Listing({ ...props }) {
  const [list, setList] = useState([]);

  const ListingData = async () => {
    let credentials = {
      userId: process.env.userId,
      orgId: process.env.orgId,
      type: "photo",

      limit: 100,
      originatingSystemName: "myListings",
      skip: 0,
      filter: {
        uri: "listings",
        mlsStatus: "",
      },
    };
    const response = await fetch(`${apiBaseURL}/getAllMyListings/properties`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    setList(data?.data);
  };

  useEffect(() => {
    ListingData();
  }, []);

  return (
    <>
      {list &&
        list?.slice(0, 30)?.map((item: any, index: any) => {
          return (
            <div className="full" key={index}>
              <div className="item">
                <div className="inner">
                  <Link href="#">
                    <div className="property-tag button alt featured">
                      {item?.mlsStatus}
                    </div>

                    <img
                      src={
                        item?.photo
                          ? item?.photo
                          : "https://oxbridgeinternationalco.com/assets//images/noAvatar.png"
                      }
                      alt={item?.city}
                      className="img-responsive imageLoader"
                    />
                  </Link>
                  <div className="img-info">
                    <h5>
                      {" "}
                      {item?.city}{" "}
                      {`${item?.stateOrProvince}${item?.postalCode}`}
                    </h5>
                    <h5> {item?.listPrice}</h5>
                    <ul>
                      <li>{item?.propertySubType}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export { Listing };
