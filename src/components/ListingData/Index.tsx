import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdPhone } from "react-icons/md";
import { Image } from "react-bootstrap";
import { apiBaseURL } from "@config/api";
import FormatPrice from "@components/helper/FormatPrice";

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
                    <Link href={`${props?.page}/detail/${item?._id}/${item?.listingId}`}>
                    <div className="property-tag button alt featured">
                      {item?.mlsStatus}
                    </div>

                    <img
                      src={
                        item?.photo
                          ? item?.photo
                          : "/images/noAvatar.png"
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
                        <h5>
                              {item?.listPrice == "0" ||
                              item?.listPrice == "1" ||
                              item?.listPrice == "00" ||
                              item?.listPrice == 0 ? (
                                <Link href="tel:+14084045754">
                                 
                                  Call for Price
                                </Link>
                              ) : (
                                <FormatPrice price={item?.listPrice} />
                              )}
                            </h5>
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
