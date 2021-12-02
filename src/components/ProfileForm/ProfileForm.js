import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile";

const ProfileForm = ({ firstName, lastName, phone }) => {
  const [form, setForm] = useState({ firstName, lastName, phone });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    console.log("e", e);
    const field = e.target.getAttribute("data-name");
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <div>
        <input
          value={form.firstName}
          inputProps={{ "data-name": "firstName" }}
          onChange={handleChangeForm}
        />
        <input
          value={form.lastName}
          inputProps={{ "data-name": "lastName" }}
          onChange={handleChangeForm}
        />
        <input
          value={form.phone}
          inputProps={{ "data-name": "phone" }}
          onChange={handleChangeForm}
        />
        <button onClick={() => dispatch(updateProfile(form))}>Save Form</button>
      </div>
    </div>
  );
};

export default ProfileForm;
