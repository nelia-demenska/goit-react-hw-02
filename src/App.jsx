import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description'
import Options from './components/Options';
import Feedback from './components/Feedback';
import Notification from './components/Notification';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const positivePercentage = totalFeedback > 0 ?
        Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        showReset={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} positivePercentage={positivePercentage} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  )
}


