/* eslint-disable react/prop-types */
import { ACTIONS } from "../constants";
function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="rounded bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-600 select-none"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
