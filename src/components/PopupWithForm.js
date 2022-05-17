function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${props.open}`}
      onClick={props.onClose}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name}>
          {props.children}
          <button type="submit" className="popup__button">
            {props.buttonText}
          </button>
        </form>
        <button
          aria-label="Close"
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
