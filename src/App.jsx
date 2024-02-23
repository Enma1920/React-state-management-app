import { useState } from "react";
import { Button, SectionHeader, NoFeedback, StatisticLine } from "./components";


const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  const average = (good - bad) / all;

  const positive = (good / all) * 100;

  return (
    <>
      <SectionHeader title="Statistics" />
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

  const handleIncreaseGood = ()=>{
    setGood((prevTotal)=>(prevTotal+1));
  }
  
  const handleIncreaseNeutral = ()=>{
    setNeutral((prevTotal)=>(prevTotal+1));
  };

  const handleIncreaseBad = ()=>{ 
    setBad((prevTotal)=>(prevTotal+1));
  };

  const hasFeedback = good + neutral + bad;

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
    const anecdotesRange = anecdotes.length;
    const randomIndex = Math.floor(Math.random() * anecdotesRange);
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
      <section>

        <SectionHeader title="Give Feedback" />
        <Button label="Good" handle={handleIncreaseGood} />
        <Button label="Neutral" handle={handleIncreaseNeutral} />
        <Button label="Bad" handle={handleIncreaseBad} />
        {hasFeedback>0 && <Statistics good={good} neutral={neutral} bad={bad} /> || <NoFeedback text="No feedback given"/> }

      </section>

      <section>

        <SectionHeader title="Anecdote of the day" />
        <p>{anecdotes[selected]}</p>
        <Button label="votar" handle={handleVote} />
        <Button label="siguiente anecdota" handle={handleNext} />
        <p>has {votes[selected]} votes</p>
      </section>

      <section>

        <SectionHeader title="Anecdote with most votes" />
        <p>{anecdotes[mostVotedIndex]}</p>
        <p>has {votes[mostVotedIndex]} votes</p>

      </section>


    </>
  );
};

export default App;
