import React, { useEffect, useState } from "react";
import axios from "axios";

function useApi() {
  const [data, setData] = useState<any>();
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases"
      );
      setData(response);
      console.log("Api response", response);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { data };
}

export default useApi;
