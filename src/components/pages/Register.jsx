import Footer from "../elements/Footer/Footer";
import Header from "../elements/Header/Header";

const Register = () => {
    return (
        <div className="flex flex-col justify-between h-screen bg-[#212429]">
            <Header />
            <div className="container-register mt-8">
                <h2 className="text-4xl font-thin my-8">CREATE YOUR ACCOUNT</h2>
                <form className="mb-8">
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm_email">Confirm Your Address</label>
                        <input type="email" id="confirm_email" name="confirm_email" required="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="country">Country of Residence</label>
                        <select id="negara" name="negara">
                            <option value="ID">Indonesia</option>
                            <option value="SG">Singapura</option>
                            <option value="MY">Malaysia</option>
                            <option value="TH">Thailand</option>
                            <option value="VN">Vietnam</option>
                            <option value="PH">Filipina</option>
                            <option value="BR">Brasil</option>
                            <option value="US">Amerika Serikat</option>
                            <option value="CA">Kanada</option>
                            <option value="AU">Australia</option>
                            <option value="NZ">Selandia Baru</option>
                            <option value="GB">Britania Raya</option>
                            <option value="DE">Jerman</option>
                            <option value="FR">Prancis</option>
                            <option value="IT">Italia</option>
                            <option value="ES">Spanyol</option>
                            <option value="JP">Jepang</option>
                            <option value="KR">Korea Selatan</option>
                            <option value="CN">China</option>
                        </select>
                    </div>
                    <div className="recaptcha-container">
                        <div className="g-recaptcha" data-sitekey="SITE_KEY" />
                    </div>
                    <div className="age-checkbox-label">
                        <input type="checkbox" id="age_checkbox" name="age_checkbox" required="" />
                        <span style={{ fontSize: "0.8rem" }}>
                            I am 13 years of age or older and agree to the terms of the <a href="#">Steam Subscriber Agreement</a> and the <a href="#">Valve Privacy Policy</a>.
                        </span>
                    </div>
                    <a href="#" className="btn">
                        Continue
                    </a>
                </form>
            </div>
            <Footer />
        </div>
    );
};
export default Register;
