import "./button.component.scss";

const BUTTON_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

const Button = ({ children, buttonClass, ...otherProps }) => (
    <button className={`button-container ${BUTTON_CLASSES[buttonClass]}`} {...otherProps}>
        {children}
    </button>
);

export default Button;