import { FC } from "react";
import Header from "../../components/Layout/Header/Header";
import Banner from "../../components/Home/Banner/Banner";
import Features from "../../components/Home/Features/Features";
import Footer from "../../components/Layout/Footer/Footer";

const Home: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Home;
