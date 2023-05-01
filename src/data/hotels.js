const generateId = () => {
  const id = Number(
    Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")
  );
  return id;
};

let count = 0;

const generateData = ({
  title,
  description,
  beds,
  superHost,
  rating,
  location,
  guests,
}) => {
  const result = {
    id: generateId(),
    title,
    description,
    beds,
    superHost,
    rating,
    location,
    guests,
    name_image: `hotel_${(count += 1)}`,
  };
  return result;
};

const dataHotel = [
  generateData({
    title: "Stylist apartment in center of the city",
    description: "Entire apartment",
    beds: 2,
    superHost: true,
    rating: 4.4,
    location: "Helsinki, Finland",
    guests: 4,
  }),
  generateData({
    title: "Cozy, peaceful and private room with...",
    description: "Private room",
    beds: null,
    superHost: false,
    rating: 4.25,
    location: "Turku, Finland",
    guests: 2,
  }),
  generateData({
    title: "Mordern House in a remote area",
    description: "Entire house",
    beds: null,
    superHost: false,
    rating: 4.96,
    location: "Oulu, Finland",
    guests: 10,
  }),
  generateData({
    title: "Stylist room in design district",
    description: "Entire apartment",
    beds: 2,
    superHost: true,
    rating: 4.85,
    location: "Vaasa, Finland",
    guests: 3,
  }),
  generateData({
    title: "Modern apartment close to nature",
    description: "Private room",
    beds: null,
    superHost: false,
    rating: 4.54,
    location: "Turku, Finland",
    guests: 5,
  }),
  generateData({
    title: "House in a remote area",
    description: "Entire house",
    beds: null,
    superHost: false,
    rating: 4.64,
    location: "Helsinki, Finland",
    guests: 9,
  }),
  generateData({
    title: "House in a remote area",
    description: "Entire house",
    beds: null,
    superHost: false,
    rating: 4.64,
    location: "Helsinki, Finland",
    guests: 9,
  }),
  generateData({
    title: "Nice apartment in center of Helsink",
    description: "Entire apartment",
    beds: 3,
    superHost: false,
    rating: 4.2,
    location: "Turku, Finland",
    guests: 6,
  }),
  generateData({
    title: "Arty interior in 1900 wooden house",
    description: "Entire house",
    beds: 6,
    superHost: true,
    rating: 4.5,
    location: "Oulu, Finland",
    guests: 9,
  }),
  generateData({
    title: "Apartment next to market spuare",
    description: "Entire apartment",
    beds: null,
    superHost: false,
    rating: 4.48,
    location: "Vaasa, Finland",
    guests: 5,
  }),
  generateData({
    title: "Villa Aurora guest-house",
    description: "Entire house",
    beds: null,
    superHost: true,
    rating: 4.75,
    location: "Oulu, Finland",
    guests: 5,
  }),
  generateData({
    title: "A cosy family house",
    description: "Entire house",
    beds: null,
    superHost: true,
    rating: 4.95,
    location: "Turku, Finland",
    guests: 10,
  }),
  generateData({
    title: "Beautiful and comfortable old wooden house",
    description: "Entire house",
    beds: null,
    superHost: false,
    rating: 4.63,
    location: "Helsinki, Finland",
    guests: 4,
  }),
  generateData({
    title: "Lovely Studio near Railway Station",
    description: "Private room",
    beds: null,
    superHost: false,
    rating: 4.68,
    location: "Helsinki, Finland",
    guests: 3,
  }),
];

export default dataHotel;
