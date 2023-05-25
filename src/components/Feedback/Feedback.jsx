import FeedbackBtn from "components/FeedbackBtn/FeedbackBtn";
import Statistics from "components/Statistics/Statistics";
import {Component} from "react";

export class Feedback extends Component {
    state = { 
        good: 0,
        neutral: 0,
        bad: 0
    } 
    handleButtonClick(event){
        const btnId = event.target.id;
        const step = 1;
        switch (btnId) {
            case "good":
                this.setState(pv => ({...pv, good: pv.good + step}))
                break;
            case "neutral":
                this.setState(pv => ({...pv, neutral: pv.neutral + step}))
                break;
            case "bad":
                this.setState(pv => ({...pv, bad: pv.bad + step}))
                break;
            default:
                break;
        }
    }
    render() { 
        return (
            <div>
                <FeedbackBtn handleClick={this.handleButtonClick.bind(this)}/>
                <Statistics state={this.state}/>
            </div>
        );
    }
}