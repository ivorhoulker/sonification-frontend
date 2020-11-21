import React from "react";
import useApi from "./useApi";

function App() {
  const { data } = useApi();
  return <div>{JSON.stringify(data)}</div>;
}

export default App;
