import { Component } from "react";

class Statistics extends Component {
    countTotalFeedback(...args){
        return args.reduce((acc, el) => (acc + el),0)
    }
    countPositiveFeedbackPercentage(el, ...args){
        return `${Math.round(100*(el / (args.reduce((acc,el) => (acc + el),0) || 1)))} %`;
    }
    render() { 
        const {good, neutral, bad} = this.props.state;
        const total = this.countTotalFeedback(good, neutral, bad);
        const positevePart = this.countPositiveFeedbackPercentage(good, total);
        return (
            <div>
                <h2>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positevePart}</p>
            </div>
        );
    }
}
 
export default Statistics;