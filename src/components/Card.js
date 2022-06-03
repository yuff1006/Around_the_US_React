function Card({ cardData, onCardClick, deleteButton, heartButton }) {
  function handleClick() {
    onCardClick(cardData);
  }
  return (
    <li className="card">
      <button type="button" className={deleteButton} aria-label="Delete" />
      <img
        className="card__img"
        alt={cardData.name}
        src={cardData.link}
        onClick={handleClick}
      />
      <div className="card__handle">
        <h2 className="card__place">{cardData.name}</h2>
        <div className="card__like-container">
          <button aria-label="Like" type="button" className={heartButton} />
          <p className="card__like-count">{cardData.likeCount}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
