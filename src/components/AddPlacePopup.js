import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, buttonState }) {
  const [pictureName, setPictureName] = useState("");
  const [pictureLink, setPictureLink] = useState("");

  function handlePictureNameChange(e) {
    setPictureName(e.target.value);
  }
  function handlePictureLinkChange(e) {
    setPictureLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name: pictureName, link: pictureLink });
  }
  return (
    <PopupWithForm
      name="place"
      title="New place"
      buttonText={buttonState === false ? "Create" : "Saving..."}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__info"
        id="popup-place"
        placeholder="Title"
        required
        minLength="1"
        maxLength="30"
        name="name"
        value={pictureName}
        onChange={handlePictureNameChange}
      />
      <span className="popup__error" id="popup-place-error"></span>
      <input
        className="popup__info"
        id="popup-url"
        placeholder="Image Link"
        required
        type="url"
        name="link"
        value={pictureLink}
        onChange={handlePictureLinkChange}
      />
      <span className="popup__error" id="popup-url-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
