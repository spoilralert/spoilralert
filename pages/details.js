import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Paragraph from "../components/paragraph";
import Image from "next/image";
import Placeholder from "../public/images/placeholder.jpg";
import PostForm from "../components/forms/postForm";

export default function Details() {
  return (
    <Layout>
      <Head title="movie title" />
      <Header />
      <main>
        <Image
          src={Placeholder}
          width="200"
          height="200"
          alt="placeholder"
          className="image__movie__banner"
        />
        <section>
          <div className="container__layout movie">
            <div>
              <Image
                src={Placeholder}
                width="100"
                height="150"
                alt="placeholder"
                className="image__movie__poster"
              />
            </div>

            <div className="container__movie__details">
              <Heading title="movie title" />
              <div className="container__movie__details__info">
                <h5>release year</h5>
                <h5>genre</h5>
                <h5>runtime</h5>
              </div>
              <div>
                <h5>Plot</h5>
                <Paragraph
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras ut est porttitor, pharetra mi nec, faucibus odio. 
                Aenean vitae purus sit amet nulla semper vehicula eget at magna. 
                Nullam ultrices tellus at eros imperdiet ultricies. Vestibulum a aliquam ligula. 
                Nam et massa eget nibh fermentum pretium eu eu nunc. Ut vestibulum, odio eget rhoncus accumsan, ipsum orci feugiat turpis, non egestas nulla justo a nulla. 
                Aliquam ac vestibulum nunc."
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="tabs container__layout">
            <input type="radio" name="tabs" id="tabone" checked="checked" />
            <label htmlFor="tabone" className="tab__label">
              Spoilrs
            </label>
            <div className="tab">
              <h2>Spoilrs</h2>
              <button>Show Spoilrs</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <input type="radio" name="tabs" id="tabtwo" />
            <label htmlFor="tabtwo" className="tab__label">
              Add spoilr
            </label>
            <div className="tab">
              <h2>Add spoilr</h2>
              <PostForm />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
