import { ACTIONS } from "../constants";

/* eslint-disable react/prop-types */
function DigitButton({ dispatch, digit }) {
  return (
    <button
      className="rounded bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-600 select-none"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
