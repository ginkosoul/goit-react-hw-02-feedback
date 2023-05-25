import { Component } from "react";

class FeedbackBtn extends Component {
    render() { 
        const { handleClick } = this.props;
        return (
            <div>
                <h2>Please leave feedback</h2>
                <button id="good" onClick={handleClick}>Good</button>
                <button id="neutral" onClick={handleClick}>Neutral</button>
                <button id="bad" onClick={handleClick}>Bad</button>
            </div>
        );
    }
}
 
export default FeedbackBtn;