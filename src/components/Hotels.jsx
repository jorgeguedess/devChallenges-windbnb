import React from "react";
import P from "prop-types";

import useData from "../hooks/useData";

import Hotel from "./Hotel";

import styles from "../styles/scss/Hotels.module.scss";

const Hotels = ({ newData }) => {
  const { loading, error } = useData();

  return (
    <main className={`${styles.hotels} container`}>
      <header className={styles.header}>
        <h1>Stays in Finland</h1>
        <span>{newData?.length || 0} stays</span>
      </header>
      <section className={styles.menu}>
        {!error && loading && <p>Loading...</p>}
        {(!loading && error) ||
          (newData.length <= 0 && (
            <p className={styles.message}>
              There are no hotels that match your search.
            </p>
          ))}
        {!error &&
          !loading &&
          newData &&
          newData.map((hotel, index) => {
            return (
              <Hotel
                hotel={hotel}
                index={index}
                key={hotel.id}
                loading={loading}
              />
            );
          })}
      </section>
    </main>
  );
};

Hotels.propTypes = {
  newData: P.array.isRequired,
};

export default Hotels;
