    export default function Options({ onLeaveFeedback, onReset, showReset }) {
    return (
        <div>
            <button onClick={() => onLeaveFeedback("good")}>Good</button>
            <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
            <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
            {showReset && <button onClick={onReset}>Reset</button>}
        </div>
    );
}