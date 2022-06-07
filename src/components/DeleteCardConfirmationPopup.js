import PopupWithForm from "./PopupWithForm";
import { CreateDeletedCardContext } from "../contexts/CreateDeletedCardContext";
import { useContext } from "react";
function DeleteCardConfirmationPopup({ isOpen, onClose, onConfirmation }) {
  const deletedCard = useContext(CreateDeletedCardContext);
  function handleSubmit(e) {
    e.preventDefault();
    onConfirmation(deletedCard);
  }
  return (
    <PopupWithForm
      name="delete-confirmation"
      title="Are you sure?"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Yes"
      onSubmit={handleSubmit}
    />
  );
}
export default DeleteCardConfirmationPopup;
