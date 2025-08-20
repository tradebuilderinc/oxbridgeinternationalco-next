import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdPhone } from "react-icons/md";
import { Image } from "react-bootstrap";
import { apiBaseURL } from "@config/api";

function ListingData({ ...props }) {

  const { data } = props?.data;
  console.log('check list',data);


  return (
    <>
  {data &&
        data?.slice(0, 30)?.map((item: any, index: any) => {
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

export { ListingData };
