export const AnecdotesList = ({ anecdotes }) => {
  return (
    <ul>
      {anecdotes.map((anecdote, index) => (
        <li key={index}>{anecdote}</li>
      ))}
    </ul>
  );
};
