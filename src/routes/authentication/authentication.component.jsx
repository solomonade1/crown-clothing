import SignInForm from "../../components/signin-form/signin-form.component";
import SignUpForm from "../../components/signup-form/signup-form.component";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
