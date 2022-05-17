import { api } from "../utils/api";
import React from "react";
function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api.initialize().then(([user, cards]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    });
  });
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic-container">
          <div
            alt={`${userName}'s headshot`}
            className="profile__pic"
            src={userAvatar}
            // style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
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
        <ul className="cards__container"></ul>
      </section>
    </main>
  );
}

export default Main;
