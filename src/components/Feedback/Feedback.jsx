import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import shortid from 'shortid';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const countFeedback = button => {
    switch (button) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositive(`${((good / total) * 100).toFixed(0)}%`);
  }, [good, total]);

  const feedbacksButtonsTitle = 'Please leave feedback';
  const statisticsTitle = 'Statistics';

  return [
    <Section key={shortid.generate()} title={feedbacksButtonsTitle}>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={countFeedback}
      />
    </Section>,
    total ? (
      <Section key={shortid.generate()} title={statisticsTitle}>
        <Statistics
          data={[good, neutral, bad, total, positive]}
          stats={['Good', 'Neutral', 'Bad', 'Total', 'Positive feedback']}
        />
      </Section>
    ) : (
      <p key={shortid.generate()}>There is no feedback</p>
    ),
  ];
}
