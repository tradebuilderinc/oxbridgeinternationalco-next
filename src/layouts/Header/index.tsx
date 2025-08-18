import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, SyntheticEvent, useEffect, useState } from "react";
import { ConnectIcon } from "@components/ConnectIcon";
import { MainNav } from "./Nav";
import { useWindowSize } from "@hooks/useWindowSize";
import { Mainbanner } from "./Mainbanner";
function Header({ ...props }) {
  const router = useRouter();
  const { width } = useWindowSize();
  return (
   
   
   <div className="siteheader">
   
        <>
          <Mainbanner></Mainbanner>
        </>

   
    </div>
  );
}
export { Header };
