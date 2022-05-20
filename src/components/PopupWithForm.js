function PopupWithForm({ name, isOpen, onClose, title, children, buttonText }) {
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`}
      onClick={onClose}
    >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name}>
          {children}
          <button type="submit" className="popup__button">
            {buttonText}
          </button>
        </form>
        <button
          aria-label="Close"
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
