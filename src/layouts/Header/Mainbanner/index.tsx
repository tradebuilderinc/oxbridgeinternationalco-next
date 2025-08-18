import React, { useEffect, useState, SyntheticEvent } from "react";
import Link from "next/link";

import { Fragment } from "react";
import {
  Button,
  Card,
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  Stack,
} from "react-bootstrap";
import Head from "next/head";
import { GrFormNext } from "react-icons/gr";
import { MainNav } from "../Nav";

function Mainbanner() {
  return (
     <header className="home-bg">
    <video width="100%" autoPlay muted loop id="video_player">
        <source src="/images/oi_homepage_video-1.mp4" type="video/mp4"/>
        Sorry, your browser doesn't support embedded videos.
    </video>
        <MainNav></MainNav>
    <div className="main-heading">
        San Francisco
    </div>
    <div className="view">
        <div className="container">
            <span className="first">VIEW OUR LISTINGS</span>
            <span className="second">LIST WITH US</span>
        </div>
    </div>
</header>
  );
}

export { Mainbanner };
