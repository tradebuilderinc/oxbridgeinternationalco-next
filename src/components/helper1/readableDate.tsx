import React, { useState } from "react";

function ReadableDate(props: any): any {
  return new Date(props.datedata).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default ReadableDate;
