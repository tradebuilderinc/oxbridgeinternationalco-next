import React, { useEffect, useState, SyntheticEvent } from "react";
import Link from "next/link";
import { Fragment } from "react";
import { apiBaseURL } from "@config/api";
import { useRouter } from "next/router";

function CatalogLink({...props}) {
  return (
    <Fragment>
      {props?.navData &&
        props?.navData?.map((item: any, index: any) => (
          <Link
            key={index}
            className="dropdown-item"
            href={`/products/${item.slug}?p=${item._id}`}
          >
            {item.name}
          </Link>
        ))}
    </Fragment>
  );
}

export { CatalogLink };
