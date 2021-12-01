import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useRequestData(url) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [url]);

  return [data, setData, isLoading];
}
