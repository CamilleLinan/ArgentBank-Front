import { FC, FormEvent, useState } from "react";
import "./_SignInForm.scss";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/authSlice";
import { useAppDispatch } from "../../../redux/store";

const SignInForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password }));
      if (login.fulfilled.match(resultAction)) {
        setError(undefined);
        navigate("/");
      } else {
        setError(resultAction.payload as string);
      }
    } catch {
      setError("Une erreur interne est survenue");
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <p className="form-error">{error}</p>}
        {/* PLACEHOLDER DUE TO STATIC SITE */}
        {/* <a href="./user.html" className="sign-in-button">
          Sign In
        </a> */}
        {/* SHOULD BE THE BUTTON BELOW */}
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInForm;
