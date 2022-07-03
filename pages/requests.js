import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import RequestedResults from "../components/RequestedResults";
import { GetSpoilrRequests } from "../lib/spoilrs";

export default function Requests({ spoilrRequests }) {
  const movies = spoilrRequests.spoilrRequests.data;

  return (
    <Layout>
      <Head title="requests" />
      <Header />
      <main>
        <section>
          <div>
            <Heading title="Requests" />
            <div className="requests__container">
              <RequestedResults movies={movies} />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const spoilrRequests = await GetSpoilrRequests();

  return {
    props: { spoilrRequests },
  };
}
