import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import Button from "./components/Button";
import { useReducer } from "react";
import reducer from "./reducer";
import { ACTIONS } from "./constants";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <>
      <div className="main w-screen h-screen flex justify-center items-center text-white">
        <div className="calculator w-96 border border-slate-200 border-solid rounded p-1">
          <p className="text-center text-white">O</p>
          <div className="display h-48 border border-slate-200 border-solid rounded text-right py-5 pr-5 pl-4">
            <div className="previous-operand h-1/2 font-medium text-lg break-all overflow-hidden leading-9">
              {previousOperand} {operation}{" "}
            </div>
            <div className="current-operand h-1/2 text-2xl font-semibold break-all overflow-hidden leading-10">
              {currentOperand}
            </div>
          </div>
          <p className="text-center text-white py-1">Alien</p>
          <div className="keyboard h-96 grid grid-cols-4 gap-px font-medium text-white">
            <Button
              text="AC"
              onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            />
            <Button
              text="DEL"
              onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
            />
            <OperationButton operation="%" dispatch={dispatch} />
            <OperationButton operation="/" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <OperationButton operation="x" dispatch={dispatch} />
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton operation="-" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton operation="+" dispatch={dispatch} />
            <OperationButton operation="+/-" dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <DigitButton digit="." dispatch={dispatch} />
            <Button
              text="="
              onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
