/* eslint-disable react/prop-types */
const RegisterSelectBox = ({registerForm, setRegisterForm}) => {
  return (
    <select id="region" name="region" className="shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%]" value={registerForm.region} onChange={(e) => setRegisterForm({...registerForm, region: e.target.value})}>
      <option value="Indonesia">Indonesia</option>
      <option value="Thailand">Thailand</option>
      <option value="Vietnam">Vietnam</option>
    </select>
  );
};

export default RegisterSelectBox;
