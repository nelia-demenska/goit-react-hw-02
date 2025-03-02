export default function Feedback({ feedback, total, positivePercentage }) {
    
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total feedback: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
}