import { useEffect } from "react";
import useFetch from "./useFetch";

const useData = () => {
  const { data, setData, loading, error, request } = useFetch();
  const pathData = "src/data/hotels.json";

  useEffect(() => {
    request(pathData);
  }, [request]);

  return {
    data,
    setData,
    loading,
    error,
    request,
  };
};

export default useData;
