function PopupWithForm() {
  return (
    <>
      <div className="popup" id="popup">
        <div className="popup__container">
          <h2 className="popup__title">Edit profile</h2>
          <form
            className="popup__form"
            id="form-field-author"
            name="popup-author"
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
            <button
              type="submit"
              className="popup__button"
              id="edit-profile-button"
            >
              Save
            </button>
          </form>
          <button
            aria-label="Close"
            type="button"
            className="popup__close"
          ></button>
        </div>
      </div>

      <div className="popup popup_picture">
        <div className="popup__container">
          <h2 className="popup__title">New place</h2>
          <form
            className="popup__form"
            id="form-field-picture"
            name="popup-picture"
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
            <button
              type="submit"
              className="popup__button"
              id="add-picture-button"
            >
              Create
            </button>
          </form>
          <button
            aria-label="Close"
            type="button"
            className="popup__close"
          ></button>
        </div>
      </div>

      <div className="popup popup_profile-pic">
        <div className="popup__container">
          <h2 className="popup__title">Change Profile Picture</h2>
          <form
            className="popup__form"
            id="form-field-profile-picture"
            name="popup-profile-picture"
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
            <button
              type="submit"
              className="popup__button"
              id="edit-avatar-button"
            >
              Save
            </button>
          </form>
          <button
            aria-label="Close"
            type="button"
            className="popup__close"
          ></button>
        </div>
      </div>

      <div className="popup popup_delete">
        <div className="popup__container">
          <h2 className="popup__title popup__title_no-input">Are you sure?</h2>
          <button
            type="submit"
            className="popup__button"
            id="delete-confirmation-button"
          >
            Yes
          </button>
          <button
            aria-label="Close"
            type="button"
            className="popup__close"
          ></button>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
