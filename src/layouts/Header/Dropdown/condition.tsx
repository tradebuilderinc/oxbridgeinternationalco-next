import React, { useEffect, useState, SyntheticEvent } from "react";
import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/router";

function ConditionLink() {
  const router = useRouter();
  return (
    <Fragment>
      {/* <Link
        className={
          router.pathname == "/conditions"
            ? "dropdown-item sub-active"
            : "dropdown-item"
        }
        href="/conditions"
      >
        Conditions
      </Link> */}
      <Link
        className={
          router.pathname == "/lil-mantis-programs"
            ? "dropdown-item sub-active"
            : "dropdown-item"
        }
        href="/lil-mantis-programs"
      >
        Lil Mantis Programs
      </Link>
      <Link
        className={
          router.pathname == "/tough-tigers-program"
            ? "dropdown-item sub-active"
            : "dropdown-item"
        }
        href="/tough-tigers-program"
      >
        Tought Tigers Programs
      </Link>
      <Link
        className={
          router.pathname == "/power-dragons-program"
            ? "dropdown-item sub-active"
            : "dropdown-item"
        }
        href="/power-dragons-program"
      >
        Power Dragons Programs
      </Link>
      <Link
        className={
          router.pathname == "/black-belt-club"
            ? "dropdown-item sub-active"
            : "dropdown-item"
        }
        href="/black-belt-club"
      >
        Black Belt Club
      </Link>
    </Fragment>
  );
}

export { ConditionLink };
