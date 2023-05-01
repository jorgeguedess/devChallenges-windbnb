// import data from "../data/hotels";

// function generateImages(data) {
//   let array = [];
//   let sizes = ["LG", "MD", "SM"];
//   data.map(({ name_image }) => {
//     sizes.map((size) => {
//       array = [...array, `${name_image}_${size}.jpg`];
//     });
//   });
//   return array;
// }

// export const imagePaths = generateImages(data);

// export const importImages = async (arrayImg, path = "./images") => {
//   return Promise.all(
//     arrayImg.map((image) => {//       return import(`${path}/${image}`).then((module) => module.default);
//     })
//   );
// };
