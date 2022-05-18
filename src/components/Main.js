import { api } from "../utils/api";
import React from "react";
function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.initialize().then(([user, cardData]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      setCards([...cards, cardData]);
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
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__name-and-icon">
          <h1 className="profile__name">{userName}</h1>
          <button
            aria-label="Edit"
            type="button"
            className="profile__edit-icon"
            id="edit-icon"
            onClick={props.onEditProfileClick}
          ></button>
        </div>
        <p className="profile__title">{userDescription}</p>
        <button
          aria-label="Add"
          type="button"
          className="profile__add-icon"
          id="add-icon"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__container">
          {cards.forEach((card) => {
            return (
              <li className="card">
                <button
                  type="button"
                  class="card__trash"
                  aria-label="Delete"
                ></button>
                <img className="card__img" alt={card.name} src={card.link} />
                <div className="card__handle">
                  <h2 className="card__place">{card.name}</h2>
                  <div className="card__like-container">
                    <button
                      aria-label="Like"
                      type="button"
                      className="card__heart"
                    ></button>
                    <p className="card__like-count"></p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
