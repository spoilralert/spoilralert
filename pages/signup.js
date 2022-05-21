import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import SignupForm from "../components/forms/SignupForm";

export default function Login() {
  return (
    <Layout>
      <Head title="Sign up" />
      <Header />
      <main>
        <section>
          <div>
            <Heading title="Sign Up" />
            <SignupForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
