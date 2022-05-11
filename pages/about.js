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
      <main>
        <section>
          <div className="container__layout about-faq">
            <Heading title="About" />
            <Paragraph
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras ut est porttitor, pharetra mi nec, faucibus odio. Aenean vitae purus sit amet nulla semper vehicula eget at magna. 
                    Nullam ultrices tellus at eros imperdiet ultricies. Vestibulum a aliquam ligula. 
                    Nam et massa eget nibh fermentum pretium eu eu nunc. Ut vestibulum, odio eget rhoncus accumsan, ipsum orci feugiat turpis, non egestas nulla justo a nulla. 
                    Aliquam ac vestibulum nunc. 
                    Aenean eu eros eget urna tempor aliquam. 
                    Quisque pellentesque aliquam tempor. 
                    Nulla non urna iaculis, interdum felis ut, facilisis purus. 
                    Nam maximus pulvinar eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Sed blandit rutrum mauris. Fusce interdum vitae purus eget ornare. 
                    Maecenas eu enim ac elit consequat dictum eu ac urna."
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
