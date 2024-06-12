import { FC, FormEvent, useState } from "react";
import "./_SignInForm.scss";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/slice/authSlice";
import { useAppDispatch } from "../../../redux/store";

const SignInForm: FC = () => {
  const [email, setEmail] = useState<string>("tony@stark.com");
  const [password, setPassword] = useState<string>("password123");
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
            defaultValue={"tony@stark.com"}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            defaultValue={"password123"}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInForm;
