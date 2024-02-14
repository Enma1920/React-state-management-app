import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  const average = (good - bad) / all;

  const positive = (good / all) * 100;

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + "%"} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

  const hasFeedback = good + neutral + bad > 0;

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      {hasFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}

      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <button onClick={handleVote}>Votar</button>
        <button onClick={handleNext}>Siguiente anécdota</button>
        <p>has {votes[selected]} votes</p>

        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVotedIndex]}</p>
        <p>has {votes[mostVotedIndex]} votes</p>
      </div>
    </>
  );
};

export default App;
