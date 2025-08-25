import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdPhone } from "react-icons/md";
import { Image } from "react-bootstrap";
import { apiBaseURL } from "@config/api";
import FormatPrice from "@components/helper/FormatPrice";


function Listing({ ...props }) {
  const [list, setList] = useState([]);
  const [mlsStatus, setMlsStatus] = useState("");
  const [loading, setLoading] = useState("Active");

  const ListingData = async (mlsStatus: any) => {
    let credentials = {
      userId: process.env.userId,
      orgId: process.env.orgId,
      type: "photo",

      limit: 100,
      originatingSystemName: "myListings",
      skip: 0,
      filter: {
        uri: "listings",
        mlsStatus: mlsStatus,
        
      },
    };

    let response: any;
    if (mlsStatus !== "featured") {
      response = await fetch(`${apiBaseURL}/getAllMyListings/properties`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
    } else {
      let credentialsF = {
        userId: process.env.userId,
        orgId: process.env.orgId,
        type: "photo",
      };

      response = await fetch(`${apiBaseURL}/getFeaturedProperties`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentialsF),
      });
    }

    const data = await response.json();
    setList(data?.data);
    setLoading("none");
  };

  const [selectOption, setSelectOption] = useState("Active");

  function setOption(mlsStatus?: any) {
    setLoading("active");
    ListingData(mlsStatus);
  }

  useEffect(() => {
    ListingData("");
  }, []);

  return (
    <>
      <div className="min-container home-list featured-homelist homefeaturedlist">
        <h5 className="main-ti">Oxbridge Listings</h5>
        <h6 className="main-pa">COMMERCIAL</h6>

        <div className="selectboxx">
          <select
            defaultValue={selectOption}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">All Listings</option>
            <option value="active">Active Listings</option>
            <option value="pending">Pending/InContract</option>
            <option value="closed">Recently Sold</option>
            <option value="deal room">Off Market</option>
            <option value="featured">Featured</option>
          </select>
        </div>

        <div id="member_table2">
          {loading == "active" ? (
            <div className="loading">Loading...</div>
          ) : (
            <></>
          )}

          {loading !== "active" ? (
            <div className="rooms">
              {list &&
                list?.slice(0, 30)?.map((item: any, index: any) => {
                  return (
                    <div className="full" key={index}>
                      <div className="item">
                        <div className="inner">
                          <Link href={`commercials/detail/${item?._id}/${item?.listingId}`}>
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
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="d-flex justify-content-between bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <a href="/commercials" className="listing-btn">
              ALL LISTINGS
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { Listing };
