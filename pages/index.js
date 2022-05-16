import Layout from "../components/layout/Layout";
import Head from "../components/layout/Head";
import HeaderNav from "../components/HeaderNav";
import HamburgerMenu from "../components/HamburgerMenu";
import Heading from "../components/Heading";
import Image from "next/image";
import Logo from "../public/images/logo_rooster_white1.png";
import Paragraph from "../components/paragraph";
import Search from "../components/search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faUserNinja,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className="header__nav">
        <HeaderNav />
        <HamburgerMenu />
      </div>
      <main>
        <div className="bg-text">spoilralert</div>
        <section>
          <div className="logo-search__container">
            <Image
              src={Logo}
              width="200"
              height="200"
              alt="spoliralert logo, rooster in warningsign"
              className="logo-home"
            />
            <Search style={{ display: "flex !important" }} />
          </div>
        </section>

        <section>
          <div className="intro__container">
            <Heading title="Long story short" />
            <div>
              <h3>-get movie endings and spoilers of popular titles</h3>
              <h3>-share your knowledge by adding your own spoilrs</h3>
              <h3>-climb our spoilr hierarchy</h3>
              <h3>-discuss movies with other peerse</h3>
            </div>
            <button>view requested spoilrs</button>
          </div>
        </section>

        <section className="description__container">
          <h2>how does it work?</h2>

          <div className="description">
            <h4>Finding spoilers:</h4>
            <div className="description__content">
              <FontAwesomeIcon
                icon={faSearch}
                // style={{ fontSize: 50 }}
                className="icon"
              />
              <Paragraph text="-search for movie title to get details, then you can choose if you want to see the spoilers or not ;)" />
            </div>
          </div>

          <div className="description">
            <h4>Making a spoiler request:</h4>
            <div className="description__content">
              <FontAwesomeIcon
                icon={faPlus}
                // style={{ fontSize: 50 }}
                className="icon"
              />
              <Paragraph
                text="-Is your desired title not in the search results? 
              don't worry, you can make a request for spoilers by clicking the plus sign on the search box, find your title and make a spoiler request!"
              />
            </div>
          </div>

          <div className="description">
            <h4>Creating account:</h4>
            <div className="description__content">
              <FontAwesomeIcon
                icon={faUserNinja}
                // style={{ fontSize: 50 }}
                className="icon"
              />
              <Paragraph
                text="-By creating an account you agree to sell your soul to us, no of course not. 
                  By creating an account you get to add spoilrs, rate other spoilrs and be part of our happy farm. 
                  All accounts are private and no user information is shared except username and avatar."
              />
            </div>
          </div>

          <div className="description">
            <h4>Adding spoiler:</h4>
            <div className="description__content">
              <FontAwesomeIcon
                icon={faStar}
                // style={{ fontSize: 50 }}
                className="icon"
              />
              <Paragraph
                text="-Want to add spoilers? You are now our best friend! 
                Just find a title and get to it my friend! 
                Or why not check out our list of spoiler requests to see if you can help someone out. 
                For every spoiler added, you get a shiny point. For every upvote; you guessed it -point! 
                Share your movie knowledge with us and welcome to the spoilr family!"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
