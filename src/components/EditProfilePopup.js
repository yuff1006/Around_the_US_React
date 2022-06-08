import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CreateUserContext } from "../contexts/CreateUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonState }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CreateUserContext);

  useEffect(() => {
    setName(currentUser.name ?? "");
    setDescription(currentUser.about ?? "");
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="profile"
      title="Edit Profile"
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonState === false ? "Save" : "Saving..."}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__info"
        id="popup-name"
        required
        minLength="2"
        maxLength="40"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <span className="popup__error" id="popup-name-error"></span>
      <input
        type="text"
        className="popup__info"
        id="popup-title"
        required
        minLength="2"
        maxLength="200"
        name="about"
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className="popup__error" id="popup-title-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
