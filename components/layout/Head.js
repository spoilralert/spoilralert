import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1"
      />
      <title>
        {title}
        {title ? " | " : ""}spoilralert
      </title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
