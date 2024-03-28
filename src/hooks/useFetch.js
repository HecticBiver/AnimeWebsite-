import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const results = await res.json();
        setData(results);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, isLoading, isError };
};
