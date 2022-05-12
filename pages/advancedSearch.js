import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import AdvancedSearchForm from "../components/forms/AdvancedSearchForm";

export default function AdvancedSearch() {
  return (
    <Layout>
      <Head title="Advanced search" />
      <Header />
      <main>
        <section>
          <div>
            <Heading title="Advanced search" />
            <AdvancedSearchForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
