function renderLoading(isLoading, buttonText) {
  if (isLoading) {
    this._button.disabled = true;
    this._button.textContent = buttonText;
  } else {
    this._button.textContent = this._buttonOriginalText;
    this._button.disabled = false;
  }
}
export default renderLoading;
