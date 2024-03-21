import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  // Function to recursively convert keys and values to lowercase
  const convertToLowerCase = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = key.toLowerCase();
        const newValue = convertToLowerCase(obj[key]);
        newObj[newKey] = newValue;
      }
    }

    return newObj;
  };
  useEffect(() => {
    fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_wcU4VqYtZ0JqJJTwpizlMzXV7JieeubKgYZrGVpD&currencies=`
    )
      .then((res) => res.json())
      .then((res) => {
        const lowercaseData = convertToLowerCase(res.data);
        setData(lowercaseData);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
