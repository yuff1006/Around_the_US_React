function Card() {
  return (
    <template id="card">
      <li className="card">
        <button
          type="button"
          className="card__trash"
          aria-label="Delete"
        ></button>
        <img className="card__img" alt=" " src=" " />
        <div className="card__handle">
          <h2 className="card__place"></h2>
          <div className="card__like-container">
            <button
              aria-label="Like"
              type="button"
              className="card__heart"
            ></button>
            <p className="card__like-count">0</p>
          </div>
        </div>
      </li>
    </template>
  );
}

export default Card;
