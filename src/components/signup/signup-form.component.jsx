import { useState } from "react";
import  { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./signup-form.style.scss"
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password === confirmPassword) {
            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password);
                user.displayName = displayName;
                await createUserDocumentFromAuth(user);
            } catch(error) {
                if(error.code === "auth/email-already-in-use") {
                    alert("Cannot create user, email already in use");
                }
                else {
                    console.log('error on signup: ', error);
                }
            }
        }
    }

    return <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}> 
            <FormInput 
                label='Display Name' 
                type="text" 
                onChange={handleChange} 
                name="displayName" 
                value={displayName} 
                required    
            />
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
            <FormInput 
                label='Confirm Password' 
                type="password" 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword} 
                required    
            />
            <Button type="submit" >Sign Up</Button>
        </form>
    </div>
}

export default SignUpForm;