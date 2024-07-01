
const RegisterAgeCheck = () => {
  return (
    <div className="flex lg:w-[85%]">
      <span className="text-sm">
        <input className="mr-1 w-[18px] h-[18px]" type="checkbox" id="age_checkbox" name="age_checkbox" required />I am 13 years of age or older and agree to the terms of the{" "}
        <span className="text-white cursor-pointer hover:text-linkHoverColor">
          Steam Subscriber Agreement
        </span>{" "}
        and the{" "}
        <span className="text-white cursor-pointer hover:text-linkHoverColor">
          Valve Privacy Policy
        </span>
        .
      </span>
    </div>
  );
};

export default RegisterAgeCheck;
