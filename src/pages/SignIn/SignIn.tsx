import { FC } from "react";
import "./_SignIn.scss";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import SignInForm from "../../components/SignIn/SignInForm/SignInForm";

const SignIn: FC = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
