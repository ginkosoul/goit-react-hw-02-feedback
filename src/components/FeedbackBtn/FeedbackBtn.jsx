import PropTypes from 'prop-types';
import css from '../FeedbackBtn/Feedback.module.css';

const FeedbackBtn = ({ handleClick }) => {
  return (
    <div className={css.container}>
      <button className={css.btn} id="good" onClick={handleClick}>
        Good
      </button>
      <button className={css.btn} id="neutral" onClick={handleClick}>
        Neutral
      </button>
      <button className={css.btn} id="bad" onClick={handleClick}>
        Bad
      </button>
    </div>
  );
};

FeedbackBtn.propTypes = {
  handleClick: PropTypes.func,
};

export default FeedbackBtn;
