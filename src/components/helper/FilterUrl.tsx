import React, { useState } from "react";

function FilterUrl(props: any) {
  let ret = props.replace("?", "");
 return ret;
}

export default FilterUrl;
