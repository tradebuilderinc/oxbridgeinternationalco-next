import Head from "next/head";

function PageMeta({ ...props }) {
  return (
    <Head>
      <title>{process.env.siteTitle}</title>
      <meta name="description" content={process.env.siteDescription} />
      <meta property="og:title" content={process.env.siteTitle} />
      <meta property="og:description" content={process.env.siteDescription} />
      <meta property="og:image" content={process.env.siteImage} />
      <meta property="Facebook:title" content={process.env.siteTitle} />
      <meta
        property="Facebook:description"
        content={process.env.siteDescription}
      />
      <meta property="Facebook:image" content={process.env.siteImage} />
      <meta property="Twitter:title" content={process.env.siteTitle} />
      <meta
        property="Twitter:description"
        content={process.env.siteDescription}
      />
      <meta property="Twitter:image" content={process.env.siteImage} />
      <meta property="og:site_name" content={process.env.siteName} />
    </Head>
  );
}
export default PageMeta;
