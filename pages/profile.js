import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import TabsProfile from "../components/tabs/TabsProfile";

export default function Profile() {
  return (
    <Layout>
      <Head title="profile" />
      <Header />
      <main>
        <section>
          <div className="user__info">
            <Heading title="username" />
            <div>
              <h5>Points:</h5>
            </div>
          </div>
        </section>
        <section>
          <TabsProfile />
        </section>
      </main>
    </Layout>
  );
}
