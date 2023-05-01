import { useEffect } from "react";
import useFetch from "./useFetch";
// import pathData from "src/data/hotels.json";

const useData = () => {
  const { data, setData, loading, error, request } = useFetch();
  // const pathData = "src/data/hotels.json";

  useEffect(() => {
    request("src/data/hotels.json");
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
