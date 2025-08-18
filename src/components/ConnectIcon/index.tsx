import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown, MdPhone } from "react-icons/md";
import { Image } from "react-bootstrap";

function ConnectIcon({ ...props }) {
  return (
    <>
  
      <div className="chaticon">
        <Link className="call" href="/">
          <Image
            src={`${process.env.imagePath}ssdchat.png`}
            alt={process.env.siteName}
          />
        </Link>
      </div>
    </>
  );
}

export { ConnectIcon };
