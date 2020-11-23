import { useEffect, useState, useCallback } from "react";
import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";

const useFetch = (url, body) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const basicRequest = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await (body ? axios.post(url, body) : axios.get(url));
      setResponse(data);
    } catch (error) {
      setHasError(true);
    }
    setLoading(false);
  }, [body, url]);

  useEffect(() => {
    basicRequest();
  }, []);

  return [response, loading, hasError];
};

export default useFetch;
