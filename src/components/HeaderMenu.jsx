import React from "react";
import { useCallback, useEffect, useState } from "react";
import P from "prop-types";

import { MdSearch, MdLocationPin } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import useData from "../hooks/useData";

import styles from "../styles/scss/HeaderMenu.module.scss";

const infoHotels = {
  location: "",
  adults: 0,
  childrens: 0,
};

const HeaderMenu = ({ modalIsOpen, openModal, closeModal, setNewData }) => {
  const { data } = useData();
  const [hotels, setHotels] = useState(infoHotels);

  const filterHotel = useCallback(
    (closeModal = null) => {
      const totalPeoples = Number(hotels.adults) + Number(hotels.childrens);
      let arrayHotels = [];
      if (data) {
        data.filter((item) => {
          const acceptTotalGuests =
            totalPeoples >= 0 && item.guests >= totalPeoples;
          const checkLocation = hotels.location
            ? item.location === hotels.location
            : true;
          if (acceptTotalGuests && checkLocation) {
            arrayHotels = [...arrayHotels, item];
          }
        });
      }
      setNewData(arrayHotels);
      if (closeModal) closeModal();
      return arrayHotels;
    },
    [hotels]
  );

  const [menuLocation, setMenuLocation] = useState(false);
  const [menuGuests, setMenuGuests] = useState(false);
  const [inputGuests, setInputGuests] = useState("");

  useEffect(() => {
    if (hotels.adults + hotels.childrens > 0) {
      setInputGuests(`${hotels.adults} adult, ${hotels.childrens} children`);
    } else {
      setInputGuests("");
    }
  }, [inputGuests, hotels]);

  const uniqueLocation =
    data?.length > 0 &&
    data.filter((value, index, self) => {
      // Cria um Set com as localizações únicas dos objetos anteriores ao índice atual
      const locations = new Set(
        self.slice(0, index).map((obj) => {
          return obj.location;
        })
      );

      // Retorna true se a localização atual não estiver no Set de localizações únicas
      return !locations.has(value.location);
    });

  return (
    <div
      onClick={!modalIsOpen ? openModal : null}
      className={`${styles.input_group} ${
        modalIsOpen ? styles.input_modal : ""
      }`}
    >
      <div
        className={`${styles.input} ${menuLocation ? styles.active : ""}`}
        onClick={() => {
          if (modalIsOpen) {
            setMenuGuests(false);
            setMenuLocation(true);
          }
        }}
      >
        <label
          htmlFor="location"
          className={`${!modalIsOpen ? "sr-only" : ""} label_aria`}
        >
          location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          aria-describedby="location-hint"
          placeholder="Location"
          value={hotels.location || ""}
          disabled
        />
      </div>
      <div
        className={`${styles.input} ${menuGuests ? styles.active : ""}`}
        onClick={() => {
          if (modalIsOpen) {
            setMenuLocation(false);
            setMenuGuests(true);
          }
        }}
      >
        <label
          htmlFor="guests"
          className={`${!modalIsOpen ? "sr-only" : ""} label_aria`}
        >
          guests
        </label>
        <input
          type="text"
          name="guests"
          id="guests"
          aria-describedby="guests-hint"
          placeholder="Add guests"
          value={inputGuests || ""}
          disabled
        />
      </div>
      <div className={styles.btn_search}>
        <button
          type="button"
          onClick={() => {
            return modalIsOpen ? filterHotel(closeModal) : null;
          }}
        >
          <MdSearch />
          <label className={`${!modalIsOpen ? "sr-only" : ""} `}>Search</label>
        </button>
      </div>
      <div className={styles.menus}>
        {modalIsOpen && menuLocation && (
          <ul className={styles.menuLocation}>
            {uniqueLocation?.length > 0 ? (
              uniqueLocation.map(({ location, id }) => {
                return (
                  <li
                    role="none"
                    key={id}
                    onClick={() => {
                      return setHotels({ ...hotels, location });
                    }}
                  >
                    <MdLocationPin /> {location}
                  </li>
                );
              })
            ) : (
              <p>No location find</p>
            )}
          </ul>
        )}
        {modalIsOpen && menuGuests && (
          <ul className={styles.menuGuests}>
            <li>
              <h3>Adults</h3>
              <span>Ages 13 or above</span>
              <div className={styles.buttons}>
                <button
                  type="button"
                  onClick={() => {
                    if (hotels.adults > 0) {
                      return setHotels({
                        ...hotels,
                        adults: hotels.adults - 1,
                      });
                    }
                  }}
                >
                  <AiOutlineMinus />
                </button>
                <span>{hotels.adults}</span>
                <button
                  type="button"
                  onClick={() => {
                    if (hotels.adults < 10) {
                      return setHotels({
                        ...hotels,
                        adults: hotels.adults + 1,
                      });
                    }
                  }}
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </li>
            <li>
              <h3>Children</h3>
              <span>Ages 2-12</span>
              <div className={styles.buttons}>
                <button
                  type="button"
                  onClick={() => {
                    if (hotels.childrens > 0) {
                      return setHotels({
                        ...hotels,
                        childrens: hotels.childrens - 1,
                      });
                    }
                  }}
                >
                  <AiOutlineMinus />
                </button>
                <span>{hotels.childrens}</span>
                <button
                  type="button"
                  onClick={() => {
                    if (hotels.childrens < 10) {
                      return setHotels({
                        ...hotels,
                        childrens: hotels.childrens + 1,
                      });
                    }
                  }}
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;

HeaderMenu.propTypes = {
  modalIsOpen: P.bool.isRequired,
  openModal: P.func.isRequired,
  closeModal: P.func.isRequired,
  setNewData: P.func.isRequired,
};
