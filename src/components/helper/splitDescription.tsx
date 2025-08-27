import React, { useState } from "react";

function SplitDescription({ ...props }) {
    let { limit, des } = props;
    
if (!limit) {
        limit = 60;
    
} 

  const regex = /(<([^>]+)>)/gi;
  const result = des?.replace(regex, "");
  const words = result?.split(" ");
  const truncated = words?.slice(0, limit);
  const blogDes = truncated?.join(" ") + "";

  return blogDes;
}

export default SplitDescription;
