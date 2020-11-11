import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const useFetch = (url, opts) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const basicRequest = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setResponse(data);
    } catch (error) {
      setHasError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    basicRequest();
  }, [url]);

  return [response, loading, hasError];
};
