const InputForm = ({ text, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        value={text}
        onChange={(event) => {
          handleInput(event.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default InputForm;
