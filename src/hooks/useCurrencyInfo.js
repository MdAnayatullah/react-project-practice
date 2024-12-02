import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    // fetch(
    //   `https://v6.exchangerate-api.com/v6/865bae9b5b9e4fa22e51a8a2/latest/${currency}.json`
    // )
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    //console.log(data);
  }, [currency]);
  //console.log(data);
  return data;
}

export default useCurrencyInfo;
