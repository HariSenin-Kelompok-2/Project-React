import EditProfileGeneralForm from "./EditProfileGeneralForm";
import EditProfilePasswordForm from "./EditProfilePasswordForm";

const EditProfileForm = () => {
  return (
    <div className="px-3 pt-4 pb-24">
      <EditProfileGeneralForm />
      <EditProfilePasswordForm />
    </div>
  );
};

export default EditProfileForm;
