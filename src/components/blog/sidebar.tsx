import Link from "next/link";

import Image from "next/image";
import { useEffect, useState } from "react";
import { apiBaseURL } from "@config/api";
import RecentBlog from "./recentBlog";
import Category from "./category";

function Sidebar() {
  return (
    <>
      <div className="col-lg-1"></div>
      <div className="col-lg-4">
        <div className="blogsidebar">
          <div className="sidebarset insightshome">
            <div className="sidebarhead">
              <h3>Must Read</h3>
            </div>

            <RecentBlog />
          </div>
          {/* <div className="sidebarset ">
            <div className="sidebarhead">
              <h3>Categories</h3>
            </div>
            <div className="blogcate">
              <Category />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
