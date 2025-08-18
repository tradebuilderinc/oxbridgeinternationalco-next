import Link from "next/link";

import Image from "next/image";
import { useEffect, useState } from "react";
import { apiBaseURL } from "@config/api";
import RemoveHyphens from "@components/helper/removeHyphens";

function Category() {
  const [cate, setCate] = useState([]);
  const category = async () => {
    const response = await fetch(
      `${apiBaseURL}/v1/posts/categories/${process.env.userId}/${process.env.orgId}?limit=15&skip=0`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const dataBlog = await response.json();
    if (dataBlog.success) {
      setCate(dataBlog?.data);
    }
  };

  useEffect(() => {
    category();
  }, []);



  return (
    <>
      {cate &&
        cate?.slice(0, 30)?.map((item: any, index: any) => {
          return (
            <span key={index}>
              {item?._id == "j84GdRRnafXyZ6fBo" ? (
                <></>
              ) : (
                <>
                  <Link href={`/blogs/category/${item.title}`}>
                    <span style={{ textTransform: "capitalize" }}>
                      {" "}
                      {`${RemoveHyphens(item?.title)}`}{" "}
                    </span>
                  </Link>
                </>
              )}
            </span>
          );
        })}

      {!cate ||
        (cate.length == 0 && (
          <>
            <p>Loading...</p>
          </>
        ))}
    </>
  );
}

export default Category;
