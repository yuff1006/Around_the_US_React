function PopupWithForm({ name, isOpen, onClose, title, children, buttonText }) {
  function handleOverLayClose(evt) {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      onClose();
    }
  }
  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_open" : ""}`}
      onClick={handleOverLayClose}
    >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name}>
          {children}
          <button type="submit" className="popup__button">
            {buttonText}
          </button>
        </form>
        <button aria-label="Close" type="button" className="popup__close" />
      </div>
    </div>
  );
}

export default PopupWithForm;
