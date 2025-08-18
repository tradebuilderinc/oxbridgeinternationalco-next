import { MainInnerNav } from "@layouts/Header/innerNav";
import { MainNav } from "@layouts/Header/Nav";
import React from "react";

import { Container } from "react-bootstrap";
function HeaderInner({ ...props }) {
  return (
    <div className="siteheader innerNavBar">

      <>
        <header>

          <MainInnerNav></MainInnerNav>


        </header>
      </>


    </div>
  );
}

export { HeaderInner };
