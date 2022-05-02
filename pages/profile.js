import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";

export default function Profile() {
  return (
    <Layout>
      <Head title="profile" />
      <Header />
      <Heading title="username" />
    </Layout>
  );
}
