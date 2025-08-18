import PageItem from "./page-item";
import { useEffect } from "react";

function PageList(props:any) {
  const plist = props.items;
  return (
    <>
      {plist?.map((page:any, idx:any) => (
        <PageItem pagenum={page.num} key={idx} />
      
      ))}
    </>
  );
}

export default PageList;
