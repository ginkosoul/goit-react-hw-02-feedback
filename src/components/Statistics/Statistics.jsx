import PropTypes from 'prop-types';

const countTotalFeedback = (...args) => {
  return args.reduce((acc, el) => acc + el, 0);
};
const countPositiveFeedbackPercentage = (el, ...args) => {
  return `${Math.round(
    100 * (el / (args.reduce((acc, el) => acc + el, 0) || 1))
  )} %`;
};

const Statistics = ({ state }) => {
  const { good, neutral, bad } = state;
  const total = countTotalFeedback(good, neutral, bad);
  const positevePart = countPositiveFeedbackPercentage(good, total);
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positevePart}</p>
    </div>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
