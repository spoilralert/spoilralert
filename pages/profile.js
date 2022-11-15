import Layout from "../components/layout/Layout";
import Loading from "../components/Loading";
import Head from "../components/layout/Head";
import Header from "../components/Header";
import Heading from "../components/Heading";
import TabsProfile from "../components/tabs/TabsProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GetSpoilrsForUser } from "../lib/spoilrs";
import { getUserId, getToken, getUsername } from "../lib/storage";
import Image from "next/image";
import Pig from "../public/images/user_avatars/pig_1_fill.svg";

export default function Profile() {
  const router = useRouter();
  const [userSpoilrs, setUserSpoilrs] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = getUserId();
    const token = getToken();
    setUserName(getUsername());
    token ? router.push("/profile") : router.push("/login");
    async function getSpoilrs() {
      const data = await GetSpoilrsForUser(user);
      setUserSpoilrs(data);
      setLoading(false);
    }
    getSpoilrs();
  }, []);

  if (isLoading)
    return (
      <Layout>
        <Head title="profile" />
        <Header />
        <main>
          <section>
            <Loading />
          </section>
        </main>
      </Layout>
    );

  return (
    <Layout>
      <Head title="profile" />
      <Header />
      <main>
        <section>
          <div className="user__info">
            <div className="container__img__profile">
              <Pig id="img__profile" />
            </div>
            <Heading title={userName} />
            <div>
              <h5>Points:</h5>
            </div>
          </div>
        </section>
        <section>
          <TabsProfile spoilrs={userSpoilrs.movies.data} />
        </section>
      </main>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const userSpoilrs = await GetSpoilrsForUser(user.token);

//   return {
//     props: { userSpoilrs },
//   };
// }
