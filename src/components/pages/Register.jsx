import Footer from "../elements/Footer/Footer";
import Header from "../elements/Header/Header";
import "../../assets/register.css";

const Register = () => {
    return (
        <div>
            <Header />
            <div className="container-register mt-8">
                <h2 className="text-2xl font-semibold mb-4">Create Your Account</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm_email">Confirm Your Email Address:</label>
                        <input type="email" id="confirm_email" name="confirm_email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="country">Country of Residence:</label>
                        <input type="text" id="country" name="country" required />
                    </div>
                    <div className="recaptcha-container">
                        <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" />
                        <p>Please complete the reCAPTCHA verification</p>
                    </div>
                    <div className="age-checkbox-label">
                        <input type="checkbox" id="age_checkbox" name="age_checkbox" required />
                        <span style={{ fontSize: '0.8rem' }}>
                            I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve
                            Privacy Policy
                        </span>
                    </div>
                    <a href="#" className="btn">Continue</a>
                </form>
            </div>
           <Footer />
        </div>
    );
}
export default Register;