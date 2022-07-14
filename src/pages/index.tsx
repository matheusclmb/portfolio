import { Navigation } from "components/Navigation";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1>CLMB .dev</h1>
        <h3>Matheus Colombo</h3>
        <Navigation />
      </div>
    </>
  );
};

export default Home;
