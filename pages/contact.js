import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <Header />
      <main>
        <section>
          <div>
            <Heading title="Contact" />
            <ContactForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
