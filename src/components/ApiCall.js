import { useEffect, useReducer, useState } from "react";

const initialState = {
  error: "",
  data: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchingData":
      return {
        ...state,
        data: [],
        loading: true
      };
    case "gotError":
      return {
        ...state,
        data: [],
        error: action.payload,
        loading: false
      };
    case "dataFetched":
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      break;
  }
};

const ApiCall = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch({ type: "fetchingData" });
    fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then((res) => res.json())
      .then((result) => {
        let data = [];
        if (result && !result.length) {
          data = [result];
        } else {
          data = result;
        }

        dispatch({ type: "dataFetched", payload: data });
      })
      .catch((error) => dispatch({ type: "gotError", payload: error }));
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(event) => setValue(event.target.value)} />
      <br />
      <br />
      {state.data.length
        ? state.data.map((d) => {
            return (
              <div key={d.id} style={{ textAlign: "left" }}>
                <b>
                  {d.id}: {d.title}
                </b>
                <br />
                <small>{d.body}</small>
              </div>
            );
          })
        : ""}

      {state.loading && "Loading Data"}

      {state.error}
    </div>
  );
};

export default ApiCall;
