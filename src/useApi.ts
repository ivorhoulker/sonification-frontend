import React, { useEffect, useState } from "react";
import axios from "axios";

function useApi() {
  const [data, setData] = useState<any>();
  const getData = async () => {
    try {
      const response = await axios.get(
        // "https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases"
        "https://api.kanye.rest/"
      );
      setData(response.data.quote);
      console.log("Api response", response.data.quote);
    } catch (err) {
      console.error(err);
    }
  };
  const refreshData = () => {
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return { data, refreshData };
}

export default useApi;
