import React, { useState, useEffect, useContext } from "react";
import { api } from "../utils/api";
import Card from "./Card";
import { CreateUserContext } from "../contexts/CreateUserContext";

function Main({
  onEditAvatarClick,
  onAddPlaceClick,
  onEditProfileClick,
  onCardClick,
}) {
  const [userInfo, setUserInfo] = useState({});
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CreateUserContext);

  useEffect(() => {
    setUserInfo({
      name: currentUser.name,
      about: currentUser.about,
      avatar: currentUser.avatar,
    });
  }, [currentUser]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleLikeClick(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        // loop over all the currentCards stored in the state and find the card that has been liked/disliked and change the data of that card
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() =>
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        )
      )
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic-container">
          <img
            alt={`${userInfo.name}'s headshot`}
            className="profile__pic"
            src={userInfo.avatar}
          />
          <button
            type="button"
            aria-label="Edit Profile Picture"
            className="profile__pic-edit"
            id="profile-pic-edit"
            onClick={onEditAvatarClick}
          />
        </div>
        <div className="profile__name-and-icon">
          <h1 className="profile__name">{userInfo.name}</h1>
          <button
            aria-label="Edit"
            type="button"
            className="profile__edit-icon"
            id="edit-icon"
            onClick={onEditProfileClick}
          />
        </div>
        <p className="profile__title">{userInfo.about}</p>
        <button
          aria-label="Add"
          type="button"
          className="profile__add-icon"
          id="add-icon"
          onClick={onAddPlaceClick}
        />
      </section>
      <section className="cards">
        <ul className="cards__container">
          {cards.map((card) => {
            const isOwn = card.owner._id === currentUser._id;
            const cardDeleteButtonClassName = isOwn
              ? "card__trash"
              : "card__trash card__trash_hidden";
            const isLiked = card.likes.some(
              (user) => user._id === currentUser._id
            );
            const cardHeartButtonClassName = isLiked
              ? "card__heart card__heart_active"
              : "card__heart";
            return (
              <Card
                cardData={card}
                onCardClick={onCardClick}
                key={card._id}
                deleteButton={cardDeleteButtonClassName}
                heartButton={cardHeartButtonClassName}
                onCardLike={() => handleLikeClick(card)}
                onCardDelete={() => handleCardDelete(card)}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
