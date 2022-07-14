import { Header } from "components/MainHeader";
import { Navigation } from "components/Navigation";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
    </>
  );
};

export default Home;
