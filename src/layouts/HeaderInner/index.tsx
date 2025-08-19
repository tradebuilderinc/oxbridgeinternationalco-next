import { MainInnerNav } from "@layouts/Header/innerNav";
import { MainNav } from "@layouts/Header/Nav";
import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
function HeaderInner({ ...props }) {

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="siteheader innerNavBar">

      <>
        <header className={` blackbg  ${props?.page}`}>
          <div className={` ${isScrolled ? "fixed topmenu" : "notfixed"}`}>
            <MainInnerNav></MainInnerNav>

          </div>
        </header>
      </>


    </div>
  );
}

export { HeaderInner };
