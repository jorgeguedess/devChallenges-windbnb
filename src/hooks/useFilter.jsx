import { useState, useCallback, useEffect } from "react";
import useData from "./useData";

const infoHotels = {
  location: "",
  adults: 0,
  childrens: 0,
};

const useFilter = () => {
  const { data } = useData();

  const [newData, setNewData] = useState(data);
  const [hotels, setHotels] = useState(infoHotels);

  const filterHotel = useCallback(
    (closeModal = null) => {
      const totalPeoples = Number(hotels.adults) + Number(hotels.childrens);
      let arrayHotels = [];
      if (data) {
        // eslint-disable-next-line array-callback-return
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
      if (closeModal) closeModal();
      setNewData(arrayHotels);
      return arrayHotels;
    },
    [hotels, newData]
  );

  useEffect(() => {
    if (newData.length) {
      console.log(newData);
    }
  }, [newData]);

  return {
    data,
    newData,
    hotels,
    setHotels,
    filterHotel,
  };
};

export default useFilter;
