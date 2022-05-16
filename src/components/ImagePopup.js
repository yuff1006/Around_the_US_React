function ImagePopup() {
  return (
    <div className="popup" id="picture-popup">
      <div className="popup__close-and-picture">
        <img alt=" " src=" " className="popup__picture" />
        <button
          aria-label="Close"
          type="button"
          className="popup__close popup__close_picture"
          id="picture-popup-close"
        ></button>
        <h2 className="popup__popup-caption"></h2>
      </div>
    </div>
  );
}

export default ImagePopup;
