import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import LoginForm from "../components/forms/LoginForm";

export default function Login() {
  return (
    <Layout>
      <Head title="Login" />
      <Header />
      <main>
        <section>
          <div>
            <Heading title="Login" />
            <LoginForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
