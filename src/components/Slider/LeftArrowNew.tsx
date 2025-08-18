import React from "react";
import { GrPrevious } from "react-icons/gr";
import {
  Button,
  Card,
  Container,
  Dropdown,
  Form,
  Image,
  Modal,
  Navbar,
  Stack,
} from "react-bootstrap";
import { FcNext, FcPrevious } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import { GoArrowLeft } from "react-icons/go";
const LeftArrowNew = ({
  className,
  to,
  onClick,
  customClass,
}: {
  className: string;
  to: string;
  onClick: any;
  customClass: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`slick-next ${className} ${customClass}`}
      aria-label={to}
    >
       {/* <Image
              src="/images/islandsmiles/Back-Arrow.png"
              alt=""
            /> */}
      <GoArrowLeft size={33} />
      {/* <FcPrevious size={33} /> */}
    </div>
  );
};

export default LeftArrowNew;
