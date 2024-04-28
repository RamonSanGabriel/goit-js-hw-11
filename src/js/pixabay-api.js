export const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43611533-cbd3c8679d2736af7125873fa";

export const options = {
  params: {
    key: API_KEY,
    q: "",
    iamge_type: "photo",
    orientation: "horizaontal",
    safesearch: "true",
    page: 1,
    per_page: 40,
  },
};
