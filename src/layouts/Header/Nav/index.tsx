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

const MainNav = (props: any) => {
  const { width } = useWindowSize();

  const menu2Toggle = () => {
    setIsShowing(!isShowing);
  };

  const [isShowing, setIsShowing] = useState(false);

  return (
    <Fragment>
      <div className="d-flex justify-content-between bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <Link href="/">
            <img src="/images/logo.png" />
          </Link>
        </div>
        <div className="p-2 bd-highlight">
          <ul className="mobile-menu">
            <img
              alt=""
              width="20"
              className="close-icon"
              src="/img/icon-close-white.svg"
            />

            <li>
              <Link href="/commercials">Commercial</Link>
            </li>
            <li>
              <Link href="/lands">Land and Development</Link>
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
          <div className="mobilemenu">
            <Link href="tel:408-404-5754" className="text-white">
              (408) 404-5754
            </Link>

            {width > 1199 ? (
              <> </>
            ) : (
              <>
                <div className="mobiletoggle">
                  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

                  <button
                    type="submit"
                    className="navbar-toggler collapsed"
                    onClick={menu2Toggle}
                  >
                    <div className="hamburger-menu">
                      <div className="navbar-menu">
                        <span className="icon"></span>
                        <span className="icon"></span>
                        <span className="icon"></span>
                      </div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {width > 1199 ? (
          <></>
        ) : (
          <>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav
                className="mainnav"
                style={{ display: isShowing ? "block" : "none" }}
              >
                <ul>
                  <li>
                    <Link href="/commercials">Commercial</Link>
                  </li>
                  <li>
                    <Link href="/lands">Land and Development</Link>
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
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </div>
    </Fragment>
  );
};

export { MainNav };
