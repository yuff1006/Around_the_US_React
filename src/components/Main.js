import { api } from "../utils/api";
import React from "react";
import Card from "./Card";
function Main({
  onEditAvatarClick,
  onAddPlaceClick,
  onEditProfileClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.initialize().then(([user, cardData]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards(cardData);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic-container">
          <img
            alt={`${userName}'s headshot`}
            className="profile__pic"
            src={userAvatar}
          />
          <button
            type="button"
            aria-label="Edit Profile Picture"
            className="profile__pic-edit"
            id="profile-pic-edit"
            onClick={onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__name-and-icon">
          <h1 className="profile__name">{userName}</h1>
          <button
            aria-label="Edit"
            type="button"
            className="profile__edit-icon"
            id="edit-icon"
            onClick={onEditProfileClick}
          ></button>
        </div>
        <p className="profile__title">{userDescription}</p>
        <button
          aria-label="Add"
          type="button"
          className="profile__add-icon"
          id="add-icon"
          onClick={onAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__container">
          {cards.map((card) => {
            return (
              <Card cardData={card} onCardClick={onCardClick} key={card._id} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
