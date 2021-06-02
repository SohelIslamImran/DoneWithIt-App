import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const { data, ok } = await apiFunc();
    setLoading(false);

    if (!ok) return setError(true);

    setError(false);
    setData(data);
  };

  return { data, error, loading, request };
};
