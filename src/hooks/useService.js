import { useEffect, useState } from "react";

//custom hook declare for multiple use of fetching data

const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};
export default useService;
