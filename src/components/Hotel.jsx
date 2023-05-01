import P from "prop-types";
import { MdStar } from "react-icons/md";
import styles from "../styles/scss/Hotel.module.scss";

// eslint-disable-next-line consistent-return
const pathImage = (data, size) => {
  if (data) {
    return `https://raw.githubusercontent.com/jorgeguedess/devChallenges-windbnb/main/src/images/hotel/${data.name_image}_${size}.jpg`;
  }
};

const Hotel = ({ hotel }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {hotel ? (
        <div className={styles.card}>
          <picture className={styles.card_image}>
            <source
              media="(min-width: 1024px)"
              srcSet={pathImage(hotel, "LG")}
            />
            <source
              media="(min-width: 768px)"
              srcSet={pathImage(hotel, "MD")}
            />
            <img src={pathImage(hotel, "SM")} alt={`${hotel.title}`} />
          </picture>
          <div className={styles.card_content}>
            <div className={styles.description}>
              {hotel.superHost && (
                <span className={styles.host}>super host</span>
              )}
              <p>
                {hotel.description}
                {hotel.beds !== null && <span>. {hotel.beds} beds</span>}
              </p>
            </div>
            <div className={styles.rating}>
              <MdStar />
              <span>
                {typeof hotel.rating === "number" && hotel.rating.toFixed(2)}
              </span>
            </div>
            <h2 className={styles.title}>{hotel.title}</h2>
          </div>
        </div>
      ) : (
        <p>Erro ao carregar os dados</p>
      )}
    </>
  );
};

export default Hotel;

Hotel.propTypes = {
  hotel: P.object.isRequired,
};
