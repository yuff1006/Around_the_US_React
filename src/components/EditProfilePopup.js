import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect, useRef } from "react";
import { CreateUserContext } from "../contexts/CreateUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonState }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isNameValid, setNameValid] = useState(false);
  const [isAboutValid, setAboutValid] = useState(false);
  const currentUser = useContext(CreateUserContext);

  useEffect(() => {
    setName(currentUser.name ?? "");
    setDescription(currentUser.about ?? "");
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
    if (e.target.checkValidity()) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    if (e.target.checkValidity()) {
      setAboutValid(true);
    } else {
      setAboutValid(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.checkValidity()) {
      console.log(e.target.checkValidity());
      setNameValid(true);
      setAboutValid(true);
      onUpdateUser({
        name,
        about: description,
      });
    }
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
