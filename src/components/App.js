import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import PopupWithForm from "./PopupWithForm";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isPicturePopupOpen, setPicturePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keyup", handleEscClose);
    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, []);

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setPicturePopupOpen(false);
    setSelectedCard("");
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleCardClick(cardData) {
    setSelectedCard(cardData);
    setPicturePopupOpen(true);
  }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup
          name="picture"
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isPicturePopupOpen}
        />
        <PopupWithForm
          name="avatar"
          title="Change Profile Picture"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Save"
        >
          <input
            className="popup__info"
            id="popup-profile-pic-url"
            placeholder="https://somewebsite.com/someimage.jpg"
            required
            type="url"
            name="avatar"
          />
          <span
            className="popup__error"
            id="popup-profile-pic-url-error"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          name="profile"
          title="Edit Profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Save"
        >
          <input
            type="text"
            className="popup__info"
            id="popup-name"
            required
            minLength="2"
            maxLength="40"
            name="name"
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
          />
          <span className="popup__error" id="popup-title-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="place"
          title="New place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Create"
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
          />
          <span className="popup__error" id="popup-place-error"></span>
          <input
            className="popup__info"
            id="popup-url"
            placeholder="Image Link"
            required
            type="url"
            name="link"
          />
          <span className="popup__error" id="popup-url-error"></span>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
