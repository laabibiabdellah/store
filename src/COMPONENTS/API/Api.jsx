import axios from "axios";
import { useEffect, useState } from "react";

export default function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return [data];
}
