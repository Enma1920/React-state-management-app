export const Button = ({ label, handle }) => {
    return (
      <button onClick={handle}>
        {label}
      </button>
    );
  };