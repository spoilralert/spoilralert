import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";

export default function Details() {
  return (
    <Layout>
      <Head title="movie title" />
      <Header />
      <Heading title="movie title" />
    </Layout>
  );
}
