import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CreateUserContext } from "../contexts/CreateUserContext";

function EditAvatarPopup({ isOpen, onClose }) {
  const [avatar, setAvatar] = useState("");
  const currentUser = useContext(CreateUserContext);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Change Profile Picture"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Save"
    >
      <input
        className="popup__info"
        id="popup-profile-pic-url"
        placeholder="https://somewebsite.com/someimage.jpg"
        required
        type="url"
        name="avatar"
        onChange={handleAvatarChange}
        value={avatar}
      />
      <span className="popup__error" id="popup-profile-pic-url-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
