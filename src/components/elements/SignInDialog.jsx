import LoginButton from "./SignInBox/LoginButton";

const SignInDialog = () => {
    return (
        <>
            <span className="block">Sign in to view personalized recommendation</span>
            <LoginButton />
            <span className="block">
                Or{" "}
                <a href="register.html" className="text-white hover:text-[#66c0f4]">
                    sign up
                </a>{" "}
                and join Steam for free
            </span>
        </>
    );
};

export default SignInDialog;
