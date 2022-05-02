import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Paragraph from "../components/paragraph";

export default function About() {
  return (
    <Layout>
      <Head title="About" />
      <Header />
      <Heading title="About" />
      <Paragraph text="About us" />
    </Layout>
  );
}
