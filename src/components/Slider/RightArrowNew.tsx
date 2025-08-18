import React from "react";
import { GrNext } from "react-icons/gr";
import { FcNext, FcPrevious } from "react-icons/fc";
import { IoMdArrowForward } from "react-icons/io";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
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
const RightArrowNew = ({
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
      <GoArrowRight size={33}></GoArrowRight>
      {/* <Image
              src="/images/islandsmiles/Forwaed-Arrow.png"
              alt=""
            /> */}
    </div>
  );
};

export default RightArrowNew;
