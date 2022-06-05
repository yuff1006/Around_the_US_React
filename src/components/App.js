import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import { api } from "../utils/api";
import { CreateUserContext } from "../contexts/CreateUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isPicturePopupOpen, setPicturePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
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
    setSelectedCard({});
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
        <CreateUserContext.Provider value={currentUser}>
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
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
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
        </CreateUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
