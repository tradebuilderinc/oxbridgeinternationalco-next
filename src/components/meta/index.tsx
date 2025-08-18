import React from "react";
import Head from "next/head";
export default function Mainmeta({ ...props }) {
  let meta: any = props?.metaData;
 

  return (
    <Head>
      
      {meta?.metaTitle && <title>{meta?.metaTitle}</title>}

      {meta?.metaDescription && (
        <meta name="description" content={meta?.metaDescription} />
      )}
      {meta?.keywords && <meta name="keywords" content={meta?.keywords} />}
      {meta?.canonicalURL && <link rel="canonical" href={meta?.canonicalURL} />}
      {meta?.metaRobots && <meta name="robots" content={meta?.metaRobots} />}

      {meta?.metaSocial &&
        meta?.metaSocial.length !== 0 &&
        meta?.metaSocial?.slice(0, 1)?.map((item: any, index: any) => (
          <>
            {item?.title && item?.title !== "" && (
              <meta property="og:title" content={item?.title} />
            )}
            {item?.description && item?.description !== "" && (
              <meta property="og:description" content={item?.description} />
            )}
            {item?.image?.data?.attributes?.url &&
              item?.image?.data?.attributes?.url !== "" && (
                <meta
                  property="og:image"
                  content={
                    process.env.API_HOST_ADMIN +
                    item?.image?.data?.attributes?.url
                  }
                />
              )}
          </>
        ))}

      {meta?.metaSocial &&
        meta?.metaSocial.length !== 0 &&
        meta?.metaSocial?.map((item: any, index: any) => (
          <>
            {item?.title && item?.title !== "" && (
              <meta
                property={`${item?.socialNetwork}:title`}
                content={item?.title}
              />
            )}
            {item?.description && item?.description !== "" && (
              <meta
                property={`${item?.socialNetwork}:description`}
                content={item?.description}
              />
            )}
            {item?.image?.data?.attributes?.url &&
              item?.image?.data?.attributes?.url !== "" && (
                <meta
                  property={`${item?.socialNetwork}:image`}
                  content={
                    process.env.API_HOST_ADMIN +
                    item?.image?.data?.attributes?.url
                  }
                />
              )}
          </>
        ))}
    </Head>
  );
}
