import useData from "../hooks/useData";
import { useEffect } from "react";

import Hotel from "./Hotel";
import useFilter from "../hooks/useFilter";

import styles from "../styles/scss/Hotels.module.scss";

const Hotels = () => {
  const { loading, error } = useData();
  const { newData, hotels } = useFilter();

  useEffect(() => {
    if (newData.length) {
      console.log(newData);
    }
  }, [newData]);

  useEffect(() => {
    console.log(hotels);
  }, [hotels]);

  return (
    <main className={`${styles.hotels} container`}>
      <header className={styles.header}>
        <h1>Stays in Finland</h1>
        <span>{newData?.length || 0} stays</span>
      </header>
      <section className={styles.menu}>
        {!error && loading && <p>Loading...</p>}
        {!loading && error && (
          <p className={styles.message}>
            There are no hotels that match your search.
          </p>
        )}
        {!error &&
          !loading &&
          newData &&
          newData.map((hotel, index) => {
            return <Hotel hotel={hotel} index={index} key={hotel.id} />;
          })}
      </section>
    </main>
  );
};

export default Hotels;
