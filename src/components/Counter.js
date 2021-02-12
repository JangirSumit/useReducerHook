import { useReducer } from "react";

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "incrementBy1":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "incrementBy5":
      return {
        ...state,
        counter: state.counter + 5
      };
    case "decrementBy1":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "decrementBy5":
      return {
        ...state,
        counter: state.counter - 5
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{state.counter}</h3>
      <br />
      <button onClick={() => dispatch({ type: "incrementBy1" })}>
        increment By 1
      </button>
      <button onClick={() => dispatch({ type: "incrementBy5" })}>
        increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrementBy1" })}>
        decrement By 1
      </button>
      <button onClick={() => dispatch({ type: "decrementBy5" })}>
        decrement By 5
      </button>
    </div>
  );
};

export default Counter;
