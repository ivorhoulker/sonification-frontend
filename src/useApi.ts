import React, { useEffect, useState } from "react";
import axios from "axios";

function useApi() {
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://covid-api.mmediagroup.fr/v1/cases",
        { httpAgent: true }
      );
      setData(response);
      console.log(response);
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
