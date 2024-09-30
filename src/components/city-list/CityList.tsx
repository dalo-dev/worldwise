import { useEffect, useState } from "react";
import styles from "./CityList.module.css";
import Spinner from "../spinner/Spinner";
import CityItem from "../city-item/CityItem";
import Message from "../message/Message";
import { CityI } from "../../models/city";

const BASE_URL = "http://localhost:8000";

function CityList() {
  const [cities, setCities] = useState<CityI[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCities = async function () {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities`);
      const data = await response.json();

      setCities(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
