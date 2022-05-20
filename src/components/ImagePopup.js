function ImagePopup({ name, isOpen, onClose, card }) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`}
      onClick={onClose}
    >
      <div className="popup__close-and-picture">
        <img alt={card.name} src={`${card.link}`} className="popup__picture" />
        <button
          aria-label="Close"
          type="button"
          className="popup__close popup__close_picture"
          onClick={onClose}
        ></button>
        <h2 className="popup__popup-caption">{card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
