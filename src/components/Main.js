function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic-container">
          <img alt=" " className="profile__pic" src=" " />
          <button
            type="button"
            aria-label="Edit Profile Picture"
            className="profile__pic-edit"
            id="profile-pic-edit"
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__name-and-icon">
          <h1 className="profile__name"></h1>
          <button
            aria-label="Edit"
            type="button"
            className="profile__edit-icon"
            id="edit-icon"
            onClick={props.onEditProfileClick}
          ></button>
        </div>
        <p className="profile__title"></p>
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
