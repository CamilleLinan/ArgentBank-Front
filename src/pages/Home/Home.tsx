import { FC } from "react";
import Header from "../../components/Layout/Header/Header";
import Banner from "../../components/Home/Banner/Banner";
import Features from "../../components/Home/Features/Features";

const Home: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Features />
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default Home;
