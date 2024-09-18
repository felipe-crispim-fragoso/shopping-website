import { useState } from "react";
import  { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./signin-form.style.scss"
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
        } catch(error) {
            switch(error.code) {
                case "auth/invalid-credential":
                    alert("Wrong password or email");
                    break;
                default:
                    console.log('error on signup: ', error);
                    break;
            }
        }
    }

    return <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}> 
            <FormInput 
                label='Email' 
                type="email" 
                onChange={handleChange} 
                name="email" 
                value={email} 
                required 
            />
            <FormInput 
                label='Password' 
                type="password" 
                onChange={handleChange} 
                name="password" 
                value={password} 
                required 
            />
            <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonClass="google" onClick={logGoogleUser}>Google sign in</Button>
            </div>
        </form>
    </div>
}

export default SignInForm;