import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button } from "@mui/material";
import { updateProfile } from "../../store/profile";

const ProfileForm = ({ firstName, lastName, phone }) => {
  const [form, setForm] = useState({ firstName, lastName, phone });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <div>
        <Input
          value={form.firstName}
          inputProps={{ "data-name": "firstName" }}
          onChange={handleChangeForm}
        />
        <Input
          value={form.lastName}
          inputProps={{ "data-name": "lastName" }}
          onChange={handleChangeForm}
        />
        <Input
          value={form.phone}
          inputProps={{ "data-name": "phone" }}
          onChange={handleChangeForm}
        />
        <Button onClick={() => dispatch(updateProfile(form))}>Save Form</Button>
      </div>
    </div>
  );
};

export default ProfileForm;
