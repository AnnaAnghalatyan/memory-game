import './SingleCard.css';
import PropTypes from 'prop-types';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    !disabled && handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="card front" />
        <img onClick={handleClick} className="back" src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
}

SingleCard.propTypes = {
  card: PropTypes.objectOf(PropTypes.any),
  handleChoice: PropTypes.func.isRequired,
  flipped: PropTypes.bool,
  disabled: PropTypes.bool
};
