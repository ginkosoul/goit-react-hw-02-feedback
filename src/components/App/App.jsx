import { Component } from 'react';
import FeedbackBtn from 'components/FeedbackBtn/FeedbackBtn';
import Statistics from 'components/Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import css from '../App/App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleButtonClick = event => {
    const btnId = event.target.id;
    const step = 1;
    switch (btnId) {
      case 'good':
        this.setState(pv => ({ ...pv, good: pv.good + step }));
        break;
      case 'neutral':
        this.setState(pv => ({ ...pv, neutral: pv.neutral + step }));
        break;
      case 'bad':
        this.setState(pv => ({ ...pv, bad: pv.bad + step }));
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackBtn handleClick={this.handleButtonClick} />
        </Section>
        {Object.values(this.state).reduce((acc, e) => acc + e) === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics state={this.state} />
          </Section>
        )}
      </div>
    );
  }
}
