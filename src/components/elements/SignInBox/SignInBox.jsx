import LoginButton from "./LoginButton";

const SignInBox = () => {
    return (
        <div className="max-w-[1100px] mx-auto text-center bg-[#00000033] p-6 mb-10 rounded-sm text-[#8f98a0] font-normal">
            <span className="block">Sign in to view personalized recommendation</span>
            <LoginButton />
            <span className="block">
                Or{" "}
                <a href="register.html" className="text-white hover:text-[#66c0f4]">
                    sign up
                </a>{" "}
                and join Steam for free
            </span>
        </div>
    );
};

export default SignInBox;
