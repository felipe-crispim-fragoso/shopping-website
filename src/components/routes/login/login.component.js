import SignUpForm from "../../signup/signup-form.component"
import SignInForm from "../../signin/signin-form.component";
import "./login.style.scss";

const Login = () => (    
    <div className="login-container">
        <SignInForm />
        <SignUpForm />
    </div>
);

export default Login;