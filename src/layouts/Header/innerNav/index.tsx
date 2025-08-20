import React, { useEffect, useState, SyntheticEvent } from "react";
import Link from "next/link";
import { Fragment } from "react";
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
import { GrFormNext } from "react-icons/gr";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import { BsChevronDown } from "react-icons/bs";
import { useWindowSize } from "@hooks/useWindowSize";
import { axiosClient, axiosHandler } from "@utils/axios";

import { AiOutlineMenu } from "react-icons/ai";
import Head from "next/head";


const MainInnerNav = (props: any) => {

  const { width } = useWindowSize();




  return (
    <Fragment>
     

       <div className="d-flex justify-content-between bd-highlight mb-3">
        <div className="p-2 bd-highlight">
            <Link href="/">
                <img src="/images/logo2.png"/>
            </Link>
        </div>
        <div className="p-2 bd-highlight">
            <ul className="mobile-menu">
                <img  alt="" width="20" className="close-icon"
                    src="/img/icon-close-white.svg" />
       

                <li>
                  <Link href="/commercial">Commercial</Link>
                </li>
                <li>
                  <Link href="/land">Land and Development</Link>
                </li>
              
                <li>
                    <Link href="/team">Team</Link>
                </li>
        
                <li>
                    <Link href="/blog">Insights</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/join-us">Join Us</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="p-2 bd-highlight">
            <a href="tel:408-404-5754" className="text-white">(408) 404-5754</a>
            <a href="javascript:void(0)" className="navbar-menu">
                <span className="icon"></span>
                <span className="icon"></span>
                <span className="icon"></span>
            </a>

        </div>
    </div>
    </Fragment>
  );
};

export { MainInnerNav };
