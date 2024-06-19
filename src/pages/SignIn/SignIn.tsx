import { FC } from "react";
import "./_SignIn.scss";
import SignInForm from "../../components/SignIn/SignInForm/SignInForm";

const SignIn: FC = () => {
  return (
    <main className="main bg-dark">
      <SignInForm />
    </main>
  );
};

export default SignIn;
