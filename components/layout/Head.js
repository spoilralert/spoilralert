import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <meta
        name="veiwport"
        content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no;user-scalable=0;"
      />
      <title>
        {title}
        {title ? " | " : ""}spoilralert
      </title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
