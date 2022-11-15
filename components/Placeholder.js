import Image from "next/image";
import Logo from "../public/images/logo_rooster_white1.png";
import SignupForm from "./forms/SignupForm";
import Heading from "./Heading";
import Paragraph from "./paragraph";

export default function Placeholder() {
  return (
    <>
      <Image
        src={Logo}
        width="200"
        height="200"
        alt="spoliralert logo, rooster in warningsign"
        className="logo-home"
      />
      <Heading title="Under construction" />
      <div className="placeholder__paragraphs">
        <Paragraph text="Coming soon to a browser near you!" />
        <Paragraph
          text="Welcome to SpoilrAlert, the site by and for movie lovers that want to share experiences from the world of film. 
                       Here you will be able to partake in our spoilralert hierarchy as a writer or just enjoy shared spoilers of your choice,
                       Spoiler: it's going to be fun!"
        />
        <Paragraph text="Want to secure your favorite username before launch and get early access? Sign up now and become a member of our happy spoilralert farm today!" />
      </div>

      <SignupForm />
    </>
  );
}
