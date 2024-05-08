import axios from "axios";
// const ENDPOINT = "https://airbnb-s9n4.onrender.com/api";
const ENDPOINT = "http://localhost:5606/api";

export const host = axios.create({
  baseURL: `${ENDPOINT}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const user = axios.create({
  baseURL: `${ENDPOINT}`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const hostImage = axios.create({
  baseURL: `${ENDPOINT}`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

export const listings = axios.create({
  baseURL: `${ENDPOINT}/listings`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const A_booking = axios.create({
  baseURL: `${ENDPOINT}/bookings`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const A_favorite = axios.create({
  baseURL: `${ENDPOINT}/favourite`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
