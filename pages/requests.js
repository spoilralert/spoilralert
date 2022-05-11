import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";

export default function Requests() {
  return (
    <Layout>
      <Head title="requests" />
      <Header />
      <main>
        <section>
          <div>
            <Heading title="requests" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
