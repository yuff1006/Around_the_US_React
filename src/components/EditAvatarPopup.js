import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useRef, useEffect } from "react";
import { CreateUserContext } from "../contexts/CreateUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState("");
  const currentUser = useContext(CreateUserContext);
  const avatarRef = useRef(avatar);

  useEffect(() => {
    setAvatar(currentUser.avatar ?? "");
  }, [currentUser]);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="avatar"
      title="Change Profile Picture"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Save"
      onSubmit={handleSubmit}
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
        ref={avatarRef}
      />
      <span className="popup__error" id="popup-profile-pic-url-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
