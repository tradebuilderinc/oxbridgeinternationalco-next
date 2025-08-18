import Link from "next/link";

import Image from "next/image";
import { useEffect, useState } from "react";
import { apiBaseURL } from "@config/api";
import SplitDescription from "@components/helper/splitDescription";
import ReadableDate from "@components/helper/ReadableDate";
import FilterUrl from "@components/helper/FilterUrl";

function RecentBlog() {
  const [blogs, setBlogs] = useState([]);

  const getBlog = async () => {
    const response = await fetch(
      `${apiBaseURL}/v1/posts/${process.env.userId}/${process.env.orgId}?limit=15&skip=0`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const dataBlog = await response.json();
    if (dataBlog.success) {
      setBlogs(dataBlog?.data?.posts);
    }
  };

  function filterUrl(url: string) {
    let ret = url.replace("?", "");
    return ret;
  }

  const events: any = blogs.filter(
    (event: any) => event?.category?._id !== "j84GdRRnafXyZ6fBo"
  );

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      {events &&
        events?.slice(0, 5)?.map((blog: any, index: any) => {
          return (
            <div className="blogrept" key={index}>
              {/* <div className="blogsidebar-img">
                <img src={blog?.featuredImageThumb} />
              </div> */}
              <div className="blogsidebar-desc">
              <div className="blogdate">
                {" "}
                <ReadableDate datedata={blog.createdAt} />
              </div>
                <h4>
                  <Link
                    href={
                      blog?.seoMeta?.tags?.url &&
                        blog?.seoMeta?.tags?.url !== ""
                        ? `/blog/${blog?.seoMeta?.tags?.url}?p=${blog._id}`
                        : `/blog/${FilterUrl(blog?.slug)}?p=${blog._id
                        }`
                    }
                  >
                    {blog?.title}
                  </Link>
                </h4>

                {/* <p>
                  <SplitDescription
                    className="blogtxt"
                    des={blog?.body}
                    limit={20}
                  />
                </p> */}
              </div>
             
              {/* <div className="learnMoreblog">
                <Link href={`/blog/${filterUrl(blog?.slug)}?p=${blog._id}`}>
                  Read More
                </Link>
              </div> */}
            </div>
          );
        })}

      {!blogs ||
        (blogs.length == 0 && (
          <>
            <p>Loading...</p>
          </>
        ))}
    </>
  );
}

export default RecentBlog;
