import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import HeaderNav from "../components/HeaderNav";
import Heading from "../components/Heading";
import Image from "next/image";
import Logo from "../public/images/logo_rooster_white1.png";
import Paragraph from "../components/paragraph";
import Search from "../components/search";

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <HeaderNav />
      <div className="bg-text">spoileralert</div>
      <section className="logo-wrapper">
        <Image
          src={Logo}
          width="200"
          height="200"
          alt="spoliralert logo, rooster in warningsign"
          className="logo-home"
        />
        <Search />
      </section>

      {/* <section>
        <Search />
      </section> */}

      <section>
        <div className="intro">
          <Heading title="Long story short" />
          <div>
            <h3>-get movie endings and spoilers of popular titles</h3>
            <h3>-share your knowledge by adding your own spoilrs</h3>
            <h3>-climb our spoilr hierarchy</h3>
            <h3>-discuss movies with other peerse</h3>
          </div>
          {/* <div>
            <button>View requested spoilrs</button>
          </div> */}
          <button>View requested spoilrs</button>
        </div>
      </section>
      <section className="description-container">
        <h2>how does it work?</h2>
        <div className="description">
          <h4>Finding spoilers:</h4>
          <Paragraph text="-search for movie title to get details, then you can choose if you want to see the spoilers or not ;)" />
        </div>
        <div className="description">
          <h4>Making a spoiler request:</h4>
          <Paragraph text="-Is your desired title not in the search results? don't worry, you can make a request for spoilers by clicking the plus sign on the search box, find your title and make a spoiler request!" />
        </div>
        <div className="description">
          <h4>Creating account:</h4>
          <Paragraph text="-By creating an account you agree to sell your soul to us, no of course not. By creating an account you get to add spoilrs, rate other spoilrs and be part of our happy farm. All accounts are private and no user information is shared except username and avatar." />
        </div>
        <div className="description">
          <h4>Adding spoiler:</h4>
          <Paragraph text="-Want to add spoilers? You are now our best friend! Just find a title and get to it my friend! Or why not check out our list of spoiler requests to see if you can help someone out. For every spoiler added, you get a shiny point. For every upvote; you guessed it -point! Share your movie knowledge with us and welcome to the spoilr family!" />
        </div>
      </section>
    </Layout>
  );
}