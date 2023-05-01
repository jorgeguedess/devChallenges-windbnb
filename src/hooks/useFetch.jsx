import { useCallback, useState } from "react";
import dataJSON from "../data/hotels.json";

const useFetch = () => {
  const [data, setData] = useState(dataJSON);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const request = useCallback(async (url) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
      return json;
    } catch (e) {
      json = null;
      setError(true);
      throw new Error(e);
    } finally {
      setData(json);
      setLoading(false);
      // eslint-disable-next-line no-unsafe-finally
      return { response, json };
    }
  }, []);

  return { data, setData, loading, error, request };
};

export default useFetch;
